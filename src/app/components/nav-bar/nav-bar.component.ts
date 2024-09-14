import { Component } from '@angular/core';
import {NavItems} from "../../interfaces/nav-items.interface";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  navItems:NavItems[] = [
    {
      name:'Movies',
      path:'movies',
      icon:'',
    },
    {
      name:'TV Shows',
      path:'tvshows',
      icon:'',
    },
    {
      name:'Suggest Me',
      path:'suggest',
      icon:'bi bi-arrow-right',
    },

  ]


}
