import { Component, OnInit } from '@angular/core';
import { NavigationBar } from '../Navigation-Component/navigation-bar/navigation-bar';

@Component({
  imports: [NavigationBar],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
