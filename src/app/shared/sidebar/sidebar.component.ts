import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }

      li:hover {
        background-color: #63acd3;
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
