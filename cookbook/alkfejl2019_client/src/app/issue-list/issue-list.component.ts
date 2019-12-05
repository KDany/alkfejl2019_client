import { Component, OnInit } from '@angular/core';
import { Issue } from "../issue";
import { IssueService } from '../issue.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  public filteredIssues: Issue[];
  public selectedStatus: string;
  public selectedIssue: Issue;

  private issues: Issue[] = [];
  private user: string;

  constructor(
    private issueService: IssueService,
    public authService: AuthService
  ) {}

  async ngOnInit(): Promise<void> {
    this.selectedStatus = '';
    this.issues = await this.issueService.getIssues();
    this.user = this.authService.user.username;
    this.filter();
  }

  onFilterChange(status: string): void {
    this.selectedStatus = status;
    this.filter();
  }

  onSelectIssue(issue: Issue): void {
    this.selectedIssue = issue;
  }

  async onFormSubmit(issue: Issue): Promise<void> {
    if (issue.id > 0) {
      await this.issueService.updateIssue(issue)
      this.selectedIssue.author = issue.author;
      this.selectedIssue.title = issue.title;
      this.selectedIssue.ingredients = issue.ingredients;
      this.selectedIssue.description = issue.description;
      
    } else {
      this.selectedIssue.id = Math.floor(Math.random()*1000000);
      this.selectedIssue.author = issue.author;
      this.selectedIssue.title = issue.title;
      this.selectedIssue.ingredients = issue.ingredients;
      this.selectedIssue.description = issue.description;
      this.selectedIssue.status = 'ADMIN';
      issue.author = this.user;
      this.issueService.createIssue(issue)
                        .then(createdIssue => {
                          this.issues.push(createdIssue);
                        });
    }
    this.selectedIssue = null;
  }
  
  onNewClick(): void {
    this.selectedIssue = new Issue();
  }
  
  onDeleteClick(id: number) {
    this.issueService.deleteIssue(id)
    .then(async () => {
      this.selectedIssue = null;
      this.issues = await this.issueService.getIssues();
      this.filter();
    })
  }

  private filter(): void {
    this.filteredIssues = this.selectedStatus === ''
    ? this.issues
    : this.issues.filter(issue => issue.status === this.selectedStatus);
  }
}
