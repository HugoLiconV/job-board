// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

// Services
import {
AlertService,
AuthenticationService,
EventEmiterService,
OpeningService} from './_services/index';

// Guards
import { AuthGuard } from './_guards/index';

// Directives
import { AlertComponent } from './_directives/index';

// Helpers
import { JwtInterceptor } from './_helpers/index';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './_services/user.service';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { OpeningFormComponent } from './opening-form/opening-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProfileFormComponent,
    OpeningFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    EventEmiterService,
    OpeningService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
