import { Component, OnInit } from '@angular/core';
import { Online} from '../online';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

	public errMessage: string;
	online: Online= new Online();
	online1: Online = new Online();
	accNo:number;
	withdrawAmount:number;
  constructor(private onlineservice: OnlineserviceService) { }

  ngOnInit() {
  }

	withdraw(){
		this.onlineservice.get(this.accNo).subscribe(data=>(this.online=data),error => (this.errMessage = error));
		if(this.online.balance<this.withdrawAmount)
		{
			alert("Insuffient Balance");
		}else if(this.online.balance>this.withdrawAmount)
		{
			alert(this.accNo+" withdraw amount is: "+this.withdrawAmount);
			this.onlineservice.withdraw(this.accNo,this.withdrawAmount).subscribe(data=>(this.online1=data));
		}
	}
}
