import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent } from './components/my-component/my-component.component';
import { MoviesComponent } from './components/movies/movies.component'

@NgModule({
  declarations: [
    AppComponent, // this declaration helps in the sense of one-import only needed
    MyComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Main component that is going to be loaded
})
export class AppModule { }
