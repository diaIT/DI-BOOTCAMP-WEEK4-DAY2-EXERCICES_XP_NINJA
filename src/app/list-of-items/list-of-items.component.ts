import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css'],
})
export class ListOfItemsComponent {
 
 
  items=[
  {
    check:false,
    label:"Iphone X"
  },
  {
    check:false,
    label:"Mac Book"
  },
  {
    check:true,
    label:"Dell Laptop"
  },
  {
    check:false,
    label:"Imprimante VHT"
  },
  {
    check:true,
    label:"BASKET"
  },
  {
    check:false,
    label:"Samsung A32"
  },
  {
    check:true,
    label:"Itel Hp45"
  }
]

}
