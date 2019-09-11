import { Component, OnInit } from '@angular/core';
import { UserUtil } from 'src/app/utils/user.util';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    UserUtil.removeUser();
  }

}
