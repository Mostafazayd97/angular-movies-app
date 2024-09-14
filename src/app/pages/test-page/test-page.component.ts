import { Component } from '@angular/core';
import {NavBarComponent} from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [
    NavBarComponent
  ],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {

}
