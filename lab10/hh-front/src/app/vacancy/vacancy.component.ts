import { Component } from '@angular/core';
import {Company, Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../company.service";
import {VacancyService} from "../vacancy.service";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent {
  vacancy: Vacancy;
  constructor( private route: ActivatedRoute, private service: VacancyService) {
    this.vacancy = {} as Vacancy;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let strid = params.get('id');
      if (strid) {
        let id = +strid;
        this.service.getVacancy(id).subscribe((value) => {
          console.log(value)
          this.vacancy = value;
        })
      }
    });
  }
}
