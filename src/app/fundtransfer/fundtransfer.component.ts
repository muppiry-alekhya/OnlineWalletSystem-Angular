import { Component, OnInit } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';
import { Online} from '../online';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {

	saccNo:number;
	raccNo:number;
	transferAmount:number;
	sOnline: Online = new Online();
	rOnline: Online = new Online();
	lOnline: Online = new Online();
  constructor(private service: OnlineserviceService) { }

  ngOnInit() {
  }

	transfer()
	{
		this.service.get(this.saccNo).subscribe(data=>(this.sOnline=data));
		this.service.get(this.raccNo).subscribe(data=>(this.rOnline=data));
		if(this.saccNo!=this.sOnline.accNo)
		{
			alert("Invalid sender account number.");
		}else if(this.raccNo!=this.rOnline.accNo)
		{
			alert("Invalid receiver account number.");
		}else if(this.transferAmount>this.sOnline.balance)
		{
			alert("Insufficient funds to transfer.");
		}else if(this.transferAmount<this.sOnline.balance)
		{
			alert(this.transferAmount+" is transfered from "+this.saccNo+" to "+this.raccNo);
			this.service.transfer(this.saccNo,this.raccNo,this.transferAmount).subscribe(data=>(this.lOnline=data));
		}
	}
}
