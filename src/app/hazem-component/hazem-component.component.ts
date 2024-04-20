import { Component } from '@angular/core';
import { Cons } from 'rxjs';
import { Persons } from './interface';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-hazem-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hazem-component.component.html',
  styleUrl: './hazem-component.component.css',
})
export class HazemComponentComponent{
  
  name:string="Hazem Alyaari";
  person:Persons;
  FullName=['Hazem','Abdullah','Salah','Alyaari'];
  
constructor(){ 
  this.person={
    id:2,
    name:"Hazem",
    age:23
  }  
}  
  

  // name="Fahem";
  // addrass:any;
  // names:any[]=["hazem","Fahem",1,2,3,4];
  // age:number=22;
  // constructor(){
  //  this.name="Ali";
  //  this.age=4;
  //  this.changename();
  
  // }
  // changenames(){
  //   return this.name="Alyaari";
  // }
  //   changename(){
  //   this.name="Mohammed";
  //  }
}


