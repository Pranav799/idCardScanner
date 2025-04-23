import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sucessfull-tap',
  templateUrl: './sucessfull-tap.component.html',
  styleUrls: ['./sucessfull-tap.component.css']
})
export class SucessfullTapComponent {
@Input() name: string = '';
@Input() rollno: string = '';
@Input() image: string = '';
}
