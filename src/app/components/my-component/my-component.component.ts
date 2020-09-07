import { Component } from '@angular/core'

// NEVER PUT ;
// template: means online one, templateUrl means local one
// <h1>brackets here</h1> is called: binding via interpolation
@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html'
})

export class MyComponent {

  public title: string;
  public comment: string;
  public year: number;

  constructor() {
    this.title = "Hello World, i am My Component"
    this.comment = "This is a test"
    this.year = 2020

    console.log("Component my-component loaded")
    console.log(this.title, this.comment, this.year)
  }
}
