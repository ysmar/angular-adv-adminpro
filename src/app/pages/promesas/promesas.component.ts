import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: []
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    this.getUsuarios().then ( usuarios => {
      console.log(usuarios);
    });

  }

  getUsuarios(){

    const promesa = new Promise( (resolve, reject) => {

      fetch('https://reqres.in/api/users')
      .then( data => data.json())
      .then( body => resolve( body.data ))
      .catch( error => reject(error));

    });

    return promesa

  }

}
