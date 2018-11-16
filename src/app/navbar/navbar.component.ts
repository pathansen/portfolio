import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private homeName : string = 'Patrick Hansen' 
  private linkNames : string[] = ['Home','Projects', 'Publications']; 
  private linkToggles : boolean[] = [false, true, false];

  private showHamburger : boolean = true;

  constructor() {
    // 
  }

  ngOnInit() {
    // 
  }

  clickMenuItem(index : number) {
    if (this.linkToggles[index] === false){
      for (var i = 0; i < this.linkToggles.length; i++){
        if (i === index) {
          this.linkToggles[i] = true;
        } else {
          this.linkToggles[i] = false;
        }
      }
    }
  }

  getCurrentToggle() {
    return this.linkToggles;
  }

  menuClick() {
    this.showHamburger = !this.showHamburger;
  }

  getMenuIcon() {
    if (this.showHamburger) {
      return 'glyphicon glyphicon-menu-hamburger';
    } else {
      return 'glyphicon glyphicon-remove'
    }
  }

  linkMenu() {
    if (!this.showHamburger) {
      return 'link-menu';
    } else {
      return '';
    }
  }   

}
