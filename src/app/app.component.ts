import { Component, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsernameComponent } from './username/username.component';
import { FormsModule, NgForm } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { GameComponent } from './game/game.component';
import { BrowserModule } from '@angular/platform-browser';
import { TDFormComponent } from './tdform/tdform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UsernameComponent,FormsModule,DirectivesComponent,GameComponent,TDFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 
  title = 'Questions';
}
