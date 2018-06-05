import { Injectable } from '@angular/core';
import { Projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private data: Projects[] = [
    {id: 1, name: 'The Castle of Cagliostro'},
    {id: 2, name: 'Nausicaä of the Valley of the Wind'},
    {id: 3, name: 'Castle in the Sky'},
    {id: 4, name: 'My Neighbor Totoro'},
    {id: 5, name: 'Kiki\'s Delivery Service'},
    {id: 6, name: 'Only Yesterday'},
    {id: 7, name: 'Porco Rosso'},
    {id: 8, name: 'Pom Poko'},
    {id: 9, name: 'Whisper of the Heart'},
    {id: 10, name: 'On Your Mark'},
    {id: 11, name: 'Princess Mononoke'},
    {id: 12, name: 'Spirited Away'},
    {id: 13, name: 'Whale Hunt'},
    {id: 14, name: 'Koro\'s Big Day Out'},
    {id: 15, name: 'Mei and the Kittenbus'},
    {id: 16, name: 'Imaginary Flying Machines'},
    {id: 17, name: 'The Cat Returns'},
    {id: 18, name: 'Howl\'s Moving Castle'},
    {id: 19, name: 'Monmon the Water Spider'},
    {id: 20, name: 'House-hunting'},
    {id: 21, name: 'The Day Bought A Star'},
    {id: 22, name: 'Ponyo'},
    {id: 23, name: 'Mr. Dough and the Egg Princess'},
    {id: 24, name: 'Arrietty'},
    {id: 25, name: 'From Up on Poppy Hill'},
    {id: 26, name: 'The Wind Rises'},
    {id: 27, name: 'The Kingdom of Dreams and Madness'},
    {id: 28, name: 'Boro the Caterpillar'},
    {id: 29, name: 'How Do You Live?'}
  ];
  get get(): Projects[] {
    return this.data;
  }
}
