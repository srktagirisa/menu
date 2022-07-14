import { Component, OnInit } from '@angular/core';
import MenuItem from '../interface/MenuItem'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  
  menuItems: MenuItem[] =[
    {name: "Chicken Fryes" , category: "sides", price: 9.99},
    {name: "Chicken Biryani" , category: "dinner", price: 15},
    {name: "Wings" , category: "sides", price: 6},
    {name: "Gulab Jam" , category: "desert", price: 5},
    {name: "Goat Biryani" , category: "dinner", price: 18}
  ]

}
