import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-timer-list-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './timer-list-card.component.html',
  styleUrl: './timer-list-card.component.scss'
})
export class TimerListCardComponent {
   @Input()name:String="";
   @Input()count:Number=0;
   @Input()svg:SafeHtml="";
   @Input()class:String="";
   @Input()index:Number=0;
   
}
