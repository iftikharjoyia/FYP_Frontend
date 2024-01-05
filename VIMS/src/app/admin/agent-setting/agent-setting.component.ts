import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgentregisterationService } from 'src/app/services/agentregisteration.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-agent-setting',
  templateUrl: './agent-setting.component.html',
  styleUrls: ['./agent-setting.component.scss']
})
export class AgentSettingComponent {
  users:any;
 constructor(
  
  private agentSettingService:AgentregisterationService,
  private router: Router,

){}
ngOnInit(): void {
  
  this.showAgents()

  }

  showAgents(): void {
   
  
  this.agentSettingService.showAllAgents("mod").subscribe((Response) => {
  
    
    if (Response.status == 201 || Response.status==200) {
      this.users=Response["body"];

    }
  });   
}
onUpdate(email:any){
console.log(email);


  this.agentSettingService.activateAgentByEmail(email).subscribe((Response) => {
  
    
    if (Response.status == 201 || Response.status==200) {
      this.users=Response["body"];

    }
  });   

}
}
