import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form = new FormGroup({
    'nom': new FormControl(),
    'age': new FormControl(undefined, [Validators.min(0), Validators.max(100)]),
    'bouffe-pref': new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.form.valid)
      console.log(this.form);
    else
      console.log('form invalide');
  }
}
