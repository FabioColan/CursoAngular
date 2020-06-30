import { Component, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.component.html'
})
export class NgbdDatepickerPopup {
  model: NgbDateStruct;

  @Input() parentForm: FormGroup;
  @Input() formControlName: string;
  @Input() formLabel: string;
}