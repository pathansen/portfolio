import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // FOR MODAL
  private modalDisplayType  = "none";
  private modalTitle        = "";
  private modalLanguage     = "";
  private modalDescription  = "";
  private modalImages       = [];
  private modalCaptions     = [];

  private myProjects : any = {
    "data": [
      {
        "project_name": "Portfolio Website",
        "project_language": "Angular 2 - TypeScript, HTML, CSS",
        "project_description": "first description",
        "project_repo_link" : "https://github.com",
        "project_page_link" : "https://github.com",
        "images": ["./assets/portfolio_thumbnail.png"],
        "captions": ["caption 1", "caption 2", "caption 3"]
      }
    ]
  };

  numProjects : number = this.myProjects["data"].length;
  numberColumns : number = 4;
  numberItems : number = Math.ceil(this.numProjects/this.numberColumns);
  colCollection = Array(this.numberColumns).fill(0);
  itemCollection = Array(this.numberItems).fill(0);

  constructor() { 
    // 
  }
  
  ngOnInit() {
    // 
  }

  isProjectValid(i, j) {
    return this.numberColumns*j+i < this.numProjects ? true : false;
  }

  // FOR MODAL
  openModal(modalId) {
    console.log(modalId);
    this.modalDisplayType = "block";
    this.modalTitle = this.myProjects["data"][modalId]["project_name"];
    this.modalLanguage = this.myProjects["data"][modalId]["project_language"];
    this.modalDescription = this.myProjects["data"][modalId]["project_description"];
    this.modalImages = [];
    this.modalImages = this.myProjects["data"][modalId]["images"];
    this.modalCaptions = [];
    this.modalCaptions = this.myProjects["data"][modalId]["captions"];
    // console.log(this.modalDisplayType);
  }

  closeModal() {
    this.modalDisplayType = "none";
    // console.log(this.modalDisplayType);
  }

  getModalDisplayType() {
    return this.modalDisplayType;
  }

}
