import {Component} from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private url = 'http://localhost:3000';
  socket = io(this.url);

  emit() {
    this.socket.emit('test', {
      test: 'test'
    });
  }
}
