import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { MediaItemService } from "../services/media-item-service";
import { lookupListToken } from "../services/providers";

@Component({
  selector: "mw-media-item-form",
  templateUrl: "./media-item-form.component.html",
  styleUrls: ["./media-item-form.component.css"],
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private mediaItemService:MediaItemService ,
    @Inject(lookupListToken) public lookupLists) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control("Movies"),
      name: this.formBuilder.control( "",Validators.compose([
          Validators.required,
          Validators.pattern("[\\w\\-\\s\\/]+"),
        ])
      ),
      category: this.formBuilder.control("Drama"),
      year: this.formBuilder.control("", this.yearValidator),
    });

    console.log("This is the lookup list ===>" + this.lookupLists.mediums)
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        year: {
          min: minYear,
          max: maxYear,
        },
      };
    }
  }

  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem);
    console.log(mediaItem);
  }
}
