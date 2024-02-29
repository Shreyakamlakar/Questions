import { Component } from '@angular/core';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [GameControlComponent,OddComponent,EvenComponent,FormsModule,NgFor],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  oddNumber: number[]=[];
  evenNumber: number[]=[];

  onIntervalFired(firedNumber: number){
    if(firedNumber%2==0)
    {
      this.evenNumber.push(firedNumber)
    }
    else{
      this.oddNumber.push(firedNumber)
    }
  }
}
