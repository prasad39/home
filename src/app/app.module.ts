import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { ManageModule } from './manage/manage.module';
import { NewcompComponent } from './newcomp/newcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserlistComponent,
    UserdetailsComponent,
    NewcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    DeletedModule,
    ManageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
