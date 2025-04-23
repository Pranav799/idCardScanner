import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';

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

  socket: Socket = io('http://localhost:5000');  

  ngOnInit() {
    this.socket.on('rfid_data', (data: any) => {
      this.rollNo = data.data;

      if (data.student && !data.student.error) {
        this.name = data.student.Name;
        this.photoUrl = data.student.Photo;
        this.showPhoto = true;
        console.log(this.photoUrl);
      } else {
        this.name = 'Unknown';
        this.photoUrl = '../assets/dewang.png';
        this.showPhoto = true;
      }
    });
  }
}
