import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultaat',
  templateUrl: './resultaat.component.html',
  styleUrls: ['./resultaat.component.css']
})
export class ResultaatComponent implements OnInit {

  @Input() gekozenKeuze :any[];

  constructor() { }

  ngOnInit(): void {
  }

 /* this.newObject = {
    option: option,
    price: price
  };
  this.gekozenKeuze.push(this.newObject)
*/
}
