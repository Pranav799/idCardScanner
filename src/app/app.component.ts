import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  socket: any;
  studentData: {
    name: string;
    rollno: string;
    image: string;
  } | null = null;

  ngOnInit() {
    this.socket = io('http://localhost:3000'); 

    this.socket.on('rfid_data', (data: any) => {
      if (data.student && !data.student.error) {
        this.studentData = {
          name: data.student.Name,
          rollno: data.data,
          image: data.student.Photo
        };
      } else {
        this.studentData = {
          name: 'Unknown',
          rollno: data.data,
          image: 'assets/default.png'
        };
      }
    });
  }
}
