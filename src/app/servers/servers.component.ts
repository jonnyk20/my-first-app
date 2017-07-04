import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowNewUser = false;
  ServerCreationStatus = 'No server was created.';
  ServerName = 'TestServer';
  UserName = '';
  serverCreated = false;
  servers = ['Testserver','Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.ServerName)
    this.ServerCreationStatus = 'Server was created. Name is ' +this.ServerName;
  }
  onUpdateServerName(event: Event)
  {
    this.ServerName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event){
      this.UserName = (<HTMLInputElement>event.target).value;
      var input = this.UserName;
      if (input.length){
        this.allowNewUser = true;
      }
      else {
        this.allowNewUser = false;
      }
  }

  newUser(event)
  {
    this.UserName = '';
  }

}
