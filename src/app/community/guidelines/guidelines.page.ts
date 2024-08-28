import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.page.html',
  styleUrls: ['./guidelines.page.scss'],
})
export class GuidelinesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToCreateCommunity(){
    this.router.navigate(['/new-community']);
  }

  navigateToCommunityDetails(){
    this.router.navigate(['/community-details']);
  }

}
