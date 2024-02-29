import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tdform.component.html',
  styleUrl: './tdform.component.css'
})
export class TDFormComponent {

  defaultSubs='Advanced';
  // @ViewChild('f') signupForm: NgForm;
 
  userInfo={
    email: '',
    subscriptionType:'Advanced' ,
    Password: ''
  };

  showData=false;
  onSubmit(form: NgForm){
    this.showData=true;
    console.log(form.value)
    console.log(this.userInfo.email=form.value.email);
    console.log(this.userInfo.subscriptionType=form.value.subModes);
    console.log(this.userInfo.Password=form.value.password);

  }
}




