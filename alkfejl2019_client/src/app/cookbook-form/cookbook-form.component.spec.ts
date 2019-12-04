import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CookbookFormComponent } from './cookbook-form.component';

describe('CookbookFormComponent', () => {
  let component: CookbookFormComponent;
  let fixture: ComponentFixture<CookbookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookbookFormComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookbookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
