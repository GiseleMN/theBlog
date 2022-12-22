import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  id: string | null = "";
  @Input()
  cardContent: string = "";
  @Input()
  photoCover: string = "";
  @Input()
  span: string = "img_left: by pixabay";

  constructor() { }

  ngOnInit(): void {
  }

}
