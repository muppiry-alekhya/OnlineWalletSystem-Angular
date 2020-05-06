import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ShowbalanceComponent } from './showbalance/showbalance.component';
import { DepositeComponent } from './deposite/deposite.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';

const routes: Routes = [
	{ path:'create', component: CreateComponent },
	{path:'show',component:ShowbalanceComponent},
{path:'deposite',component:DepositeComponent},
{path:'withdraw',component:WithdrawComponent},
{path:'transactions',component:TransactionsComponent},
{path:'fundtransfer',component:FundtransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
