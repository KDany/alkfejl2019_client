import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule, MatButtonToggleModule, MatIconModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CookbookListComponent } from './cookbook-list/cookbook-list.component';
import { CookbookFormComponent } from './cookbook-form/cookbook-form.component';
import { CookbookDetailComponent } from './cookbook-detail/cookbook-detail.component'; 
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { RoutingModule } from './routing/routing.module';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CookbookListComponent,
    CookbookFormComponent,
    CookbookDetailComponent,
    StatusFilterComponent,
    LoginFormComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
