import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

// Services
import { AlertService, AuthenticationService } from './_services/index';

// Guards
import { AuthGuard } from './_guards/index';

// Directives
import { AlertComponent } from './_directives/index';

// Helpers
import { JwtInterceptor } from './_helpers/index';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
