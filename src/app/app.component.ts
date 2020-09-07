import { Component } from '@angular/core';

// this is called a decorator: function applied to a class to modify behavior
@Component({
  selector: 'app-root', //tag in index to be used
  templateUrl: './app.component.html', // view of the component
  styleUrls: ['./app.component.css'] // property to indice stylesheet
})
export class AppComponent {
  title = 'Learning Angular';
}
