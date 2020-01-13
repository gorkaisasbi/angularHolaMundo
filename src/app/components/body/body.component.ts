import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: []
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  frase: any = {
    mensaje: "Un gran poder blabla",
    autor: "Ben Parket"
  }


  mostrar: true;

  personajes : string[] = ["Spiderman","Hulk","Thor","Dardevil"];

}
