import { Component, OnInit } from '@angular/core';
import { Cookbook } from '../cookbook';
import { ActivatedRoute } from '@angular/router';
import { CookbookService } from '../cookbook.service';

@Component({
  selector: 'app-cookbook-detail',
  templateUrl: './cookbook-detail.component.html',
  styleUrls: ['./cookbook-detail.component.css']
})
export class CookbookDetailComponent implements OnInit {
  
  public cookbook: Cookbook = null;

  constructor(
    private route: ActivatedRoute,
    private cookbookService: CookbookService
  ) { }
  
  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cookbook = await this.cookbookService.getCookbook(id);
  }
}
