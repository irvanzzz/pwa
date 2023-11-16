import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private render: Renderer2) {
    this.render.addClass(document.body, 'login-page');
  }
  ngOnInit(): void {}
}
