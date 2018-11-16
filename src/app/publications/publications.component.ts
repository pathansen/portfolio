import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  private titles : string[] = [
    'Soccer Ball Recognition and Distance Prediction Using Fuzzy Petri Nets',
    'Using Timed Petri nets to Regulate Optimal Game Strategy'
  ];
  private authors : string[] = [
    'Patrick Hansen, Philip Franco, Seung-yun Kim',
    'Philip Franco, Patrick Hansen, Seung-yun Kim'
  ];
  private venues : string[] = [
    '2018 IEEE International Conference on Information Reuse and Integration, pp. 315-322',
    '2018 International Conference on Computers and Their Applications, pp. 207-213'
  ];
  private paperLinks : string[] = [
    'https://ieeexplore.ieee.org/document/8424726/',
    'https://www.searchdl.org/PagesPublic/ConfPaper.aspx?ConfPprID=D8B2CCD9-165D-E811-80D2-0CC47A83FB77'
  ]

  constructor() { 
    // 
  }

  ngOnInit() {
    // 
  }

}
