 import { Component, OnInit } from '@angular/core';

import { Online} from '../online';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  online: Online= new Online();

  constructor(private onlineservice:OnlineserviceService) { }

  ngOnInit() {
  }
  
	createAccount()
	{
		this.online.accNo = Math.floor(Math.random() * (10000 - 1) + 1);
		this.onlineservice.createAccount(this.online).subscribe(data=>console.log(data), error=>console.log(error));
		alert(this.online.accHolder+" account is created by account number "+this.online.accNo);
	}
	
}
