import { Component, OnInit } from '@angular/core';
import { Cookbook } from "../cookbook";
import { CookbookService } from '../cookbook.service';

@Component({
  selector: 'app-cookbook-list',
  templateUrl: './cookbook-list.component.html',
  styleUrls: ['./cookbook-list.component.css']
})
export class CookbookListComponent implements OnInit {
  public filteredCookbook: Cookbook[];
  public selectedStatus: string;
  public selectedCookbook: Cookbook;

  private cookbook: Cookbook[] = [];

  constructor(
    private cookbookService: CookbookService
  ) { 
  }

  async ngOnInit(): Promise<void> {
    this.selectedStatus = '';
    this.cookbook = await this.cookbookService.getCookbooks();
    this.filter();
  }

  onFilterChange(status: string): void {
    this.selectedStatus = status;
    this.filter();
  }

  onSelectCookbook(cookbook: Cookbook): void {
    this.selectedCookbook = cookbook;
  }

  async onFormSubmit(cookbook: Cookbook): Promise<void> {
    if (cookbook.id > 0) {
      await this.cookbookService.updateCookbook(cookbook)
      this.selectedCookbook.ingredients = cookbook.ingredients;
      this.selectedCookbook.title = cookbook.title;
      this.selectedCookbook.description = cookbook.description;
      
    } else {
      this.selectedCookbook.id = Math.floor(Math.random()*1000000);
      this.selectedCookbook.ingredients = cookbook.ingredients;
      this.selectedCookbook.title = cookbook.title;
      this.selectedCookbook.description = cookbook.description;
      this.selectedCookbook.status = 'NEW';
      this.cookbookService.createCookbook(cookbook)
                        .then(createdCookbook => {
                          this.cookbook.push(createdCookbook);
                        });
    }
    this.selectedCookbook = null;
  }
  
  onNewClick(): void {
    this.selectedCookbook = new Cookbook();
  }
  
  onDeleteClick(id: number) {
    this.cookbookService.deleteCookbook(id)
    .then(async () => {
      this.selectedCookbook = null;
      this.cookbook = await this.cookbookService.getCookbooks();
      this.filter();
    })
  }

  private filter(): void {
    this.filteredCookbook = this.selectedStatus === ''
    ? this.cookbook
    : this.cookbook.filter(cookbook => cookbook.status === this.selectedStatus);
  }
}
