import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './username.component.html',
  styleUrl: './username.component.css'
})
export class UsernameComponent {
  userName: string=''
  allowReset=false
  serverCreated=false

  Result()
  {
    if(this.userName=='')
    {
      return this.allowReset=false;
    }
    else{
      return this.allowReset=true;
    }
  }

  onButtonClick()
  {
    this.serverCreated=true;
    
  }

  
}
