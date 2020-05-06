import { Component, OnInit } from '@angular/core';
import { Online} from '../online';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent implements OnInit {
	
	online: Online= new Online();
	public errMessage: string;
	displayMessage:string;
	accNo:number;
	depositeAmount:number;
  constructor(private onlineservice: OnlineserviceService) {}

  ngOnInit() {
  }
	
	deposite()
	{
		alert(this.accNo+" deposite amount is: "+this.depositeAmount);
		this.onlineservice.deposite(this.accNo,this.depositeAmount).subscribe(data=>(this.online = data),error => (this.errMessage = error));
	}

}
