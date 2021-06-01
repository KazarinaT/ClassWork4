import { Component, OnInit } from '@angular/core';
//import { from } from 'rxjs';
import {hobbys} from '../hobby'
import {HOBBY} from '../mock-hobby'

@Component({
  selector: 'app-strangehobby',
  templateUrl: './strangehobby.component.html',
  styleUrls: ['./strangehobby.component.css']
})
export class StrangehobbyComponent implements OnInit {

  MyHobby = HOBBY;
  

  constructor() { }

  ngOnInit(): void {
  }

}
