import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './containers';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [LoginComponent]
})
export class AuthModule {}
