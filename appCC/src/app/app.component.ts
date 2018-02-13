import { Component } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit(): void {
    // Inicializando o Firebase
    var config = {
      apiKey: "AIzaSyDFy29pgNwiww12roXq-fweo8hN0VzlF6E",
      authDomain: "testeestagiova.firebaseapp.com",
      databaseURL: "https://testeestagiova.firebaseio.com",
      projectId: "testeestagiova",
      storageBucket: "",
      messagingSenderId: "48413756267"
    };
    firebase.initializeApp(config);
  }
}
