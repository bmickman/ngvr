import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function () {
      var toggle = document.getElementById('header-nav-toggle'),
          nav = document.getElementById('header-nav');
          
      // If JavaScript Is Enabled
      // Modify Initial States
      toggle.className = 'is-visible';
      nav.className = 'is-hidden';
      
      // Change Visibility On Click
      toggle.addEventListener('click', function() {
        if (nav.className === 'is-hidden') {
          nav.className = '';
        } else {
          nav.className = 'is-hidden';
        }
      })
    })();
  }

}
