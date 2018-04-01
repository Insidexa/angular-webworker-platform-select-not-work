import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public key: any = {path: '', value: '', type: '[object String]', unlocalized: true};
  public types: Array<any> = [
    { text: 'Number', value: '[object Number]' },
    { text: 'String', value: '[object String]' },
    { text: 'Array', value: '[object Object]' },
  ];
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  public ngOnInit() {
    this.form = this.fb.group({
      path: [this.key.path, Validators.required],
      // init value worked
      type: [this.types[1], Validators.required],
    });
    this.form.valueChanges.subscribe(v => {
      // on select this does not react
      // on change path its work
      console.log(v)
    });
  }

  public submit() {

  }
}
