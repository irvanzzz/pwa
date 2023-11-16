import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private render: Renderer2) {
    this.render.addClass(document.body, 'register-page');
  }
  ngOnInit(): void {}
}
