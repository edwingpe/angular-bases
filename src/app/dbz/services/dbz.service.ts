import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character [] = [{
    id: crypto.randomUUID(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: crypto.randomUUID(),
    name:'Goku',
    power: 10000
  },
  {
    id:crypto.randomUUID(),
    name:'Vegetta',
    power: 7500
  }];

  addCharacter( character: Character ):void {
    const newCharacter: Character = {...character};
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string){
    this.characters = this.characters.filter( character => character.id != id );
  }




  // onDeleteCharacter( id: string ) {
  //   this.characters.splice(id,1);
  // }

}
