import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-control',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval: any;

  lastNumber=0;
  
  

  onStart(){
    this.interval=setInterval(()=>{
      this.intervalFired.emit(this.lastNumber++);
      

    },1000)
  }

  onStop(){
    clearInterval(this.interval)
  }

}
