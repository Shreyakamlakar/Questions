import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  hide=true;

  onclick()
  {
    
    if(this.hide==true)
    {
        this.hide=false
    }
    else{
      this.hide=true;
    }
    return this.hide;
  }
}
