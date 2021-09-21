import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pcmresponses',
  templateUrl: './pcmresponses.component.html',
  styleUrls: ['./pcmresponses.component.css']
})
export class PcmresponsesComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
	  this.apiService.getPCMResponses().subscribe((data)=>{
		  console.log('**********************************************');
      console.log(data);
     this.bodyList = data['bodyList'];
    });
  }

}
