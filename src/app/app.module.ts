import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatBadgeModule} from '@angular/material/badge';
import { DisplayCartComponent } from './components/display-cart/display-cart.component';
import {MatRadioModule} from '@angular/material/radio';
import { OrderSuccessfulComponent } from './pages/order-successful/order-successful.component';
import {MatTableModule} from '@angular/material/table';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthGuardGuard } from './services/authGuard/auth-guard.guard';
import { UserServiceService } from './services/userService/user-service.service';
import { BooksServiceService } from './services/booksService/books-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    DisplayBooksComponent,
    ToolBarComponent,
    FooterComponent,
    DisplayCartComponent,
    OrderSuccessfulComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatChipsModule,
    MatMenuModule,
    MatBadgeModule,
    MatRadioModule,
    MatTableModule,
    MatSnackBarModule,
    NgxPaginationModule
  ],
  providers: [
    AuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
