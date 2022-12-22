import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string="https://cdn.pixabay.com/photo/2015/02/04/05/01/musician-623362_960_720.jpg";
  cardTitle: string="Musica é vida!";
  cardContent: string="Musica te leva a um nivel maior de felicidade e experiência na vida... se não se permitiu cair nessa jornada... permita-se cair nessa experiencia incrivél!!";


  constructor() { }

  ngOnInit(): void {
  }

}
