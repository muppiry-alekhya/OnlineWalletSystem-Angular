import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, routes } from './app.component';

import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowbalanceComponent } from './showbalance/showbalance.component';
import { DepositeComponent } from './deposite/deposite.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';


@NgModule({
  declarations: [
    AppComponent,
   	CreateComponent,
   	ShowbalanceComponent,
   	DepositeComponent,
   	WithdrawComponent,
   	TransactionsComponent,
   	FundtransferComponent,
   	
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
