import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  //    @ViewChild('myForm')
  // myForm!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  // onSubmit(form: NgForm) {
  //   this.myForm.reset();
  //   console.log(this.myForm); 
  // }

  onSubmit(myForm: any){
    console.log(myForm);
  }
}

