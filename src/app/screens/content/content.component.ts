import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/dataFakes'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = "0";

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponents(this.id)
  }
  setValuesToComponents(id: string | null) {
    const result = data.filter(
      article => article.id == id)[0]

    this.contentTitle = result.cardTitle
    this.contentDescription = result.cardDescription
    this.photoCover = result.photoCover


  }



}
