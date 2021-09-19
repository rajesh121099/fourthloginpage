import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AccountstettingsComponent } from './accountstettings/accountstettings.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { BillingComponent } from './billing/billing.component';
import { PasswordComponent } from './password/password.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    AccountstettingsComponent,
    BillingComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,MatIconModule, BrowserAnimationsModule,MatInputModule,MatButtonModule,MatCardModule,MatButtonToggleModule,MatSidenavModule,MatGridListModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
        {path:'Login',component:LoginComponent},
        {path:'Register',component:RegisterComponent},
        {path:'Forget',component:ForgetComponent},
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
