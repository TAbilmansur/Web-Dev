import { Component } from '@angular/core';

@Component({
  selector: 'app-example5',
  imports: [],
  templateUrl: './example5.component.html',
  styleUrl: './example5.component.css'
})
export class Example5Component {
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
}
