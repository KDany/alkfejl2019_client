import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CookbookListComponent } from './cookbook-list.component';

describe('CookbookListComponent', () => {
  let component: CookbookListComponent;
  let fixture: ComponentFixture<CookbookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookbookListComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
