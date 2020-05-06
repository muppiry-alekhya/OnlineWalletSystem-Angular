import { Component, OnInit } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';
import { Online} from '../online';

@Component({
  selector: 'app-showbalance',
  templateUrl: './showbalance.component.html',
  styleUrls: ['./showbalance.component.css']
})
export class ShowbalanceComponent implements OnInit {

	online: Online = new Online();
	online1: Online = new Online();
	public errMessage: string;
	displayMessage:string;
  constructor(private onlineservice: OnlineserviceService) { }

  ngOnInit() {
  }

	showBalance(){
	this.onlineservice.showBalance(this.online.accNo).subscribe(data=>(this.online1 = data),error => (this.errMessage = error));

	}

}
