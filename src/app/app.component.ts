import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(title: Title, private meta: Meta) {
    title.setTitle('Awesome VR Stuff');
    this.meta.addTag({ name: 'keywords', content: 'vr is cool ' });
    this.meta.addTag({ name: 'description', 
    content: 
    'vr can be used with angular like this' 
  });

}}
