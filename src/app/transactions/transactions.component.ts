import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

	transList:any=[];
	accNo:number;
  constructor(private onlineservice: OnlineserviceService) { }

  ngOnInit() {
  }

	printTransactions()
	{
		this.onlineservice.printTransactions(this.accNo).subscribe(data=>(this.transList=data));
	}
}
