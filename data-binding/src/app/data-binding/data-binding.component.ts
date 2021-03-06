import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;

  urlImageOne: string = 'https://picsum.photos/200/300/?1'
  urlImageTwo: string = 'https://picsum.photos/200/300/?2'

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
