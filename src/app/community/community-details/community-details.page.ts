import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-community-details',
  templateUrl: './community-details.page.html',
  styleUrls: ['./community-details.page.scss'],
})
export class CommunityDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToChat(){
    this.router.navigate(['/chat']);
  }

  navigateToMembers(){
    this.router.navigate(['/members']);
  }

}
