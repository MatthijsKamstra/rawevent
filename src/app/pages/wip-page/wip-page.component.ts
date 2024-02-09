import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-wip-page',
  templateUrl: './wip-page.component.html',
  styleUrls: ['./wip-page.component.scss']
})
export class WipPageComponent implements OnInit {
  url?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private securityService: SecurityService,
  ) { }


  ngOnInit(): void {
    this.url = this.router.url;
    console.log(this.url);
  }

}
