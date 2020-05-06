import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ShowbalanceComponent } from './showbalance/showbalance.component';
import { DepositeComponent } from './deposite/deposite.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineWallet';
}
export const routes:Routes=[{path:'create',component:CreateComponent},
{path:'show',component:ShowbalanceComponent},
{path:'deposite',component:DepositeComponent},
{path:'withdraw',component:WithdrawComponent},
{path:'transactions',component:TransactionsComponent},
{path:'fundtransfer',component:FundtransferComponent}]