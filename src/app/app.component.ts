import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rollNo: string = '--';
  name: string = '--';
  photoUrl: string = '';
  showPhoto: boolean = false;

  private socket = io('http://localhost:3000'); // Update if server is hosted elsewhere

  ngOnInit() {
    this.socket.on('rfid_data', (data: any) => {
      this.rollNo = data.data;

      if (data.student && !data.student.error) {
        this.name = data.student.Name;
        this.photoUrl = data.student.Photo;
        this.showPhoto = true;
      } else {
        this.name = 'Unknown';
        this.photoUrl = '../assets/default.png';
        this.showPhoto = true;
      }
    });
  }
}
