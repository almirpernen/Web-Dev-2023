import { Component } from '@angular/core';
import {Company, Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  company: Company;
  vacancies: Vacancy[] = [];
  constructor( private route: ActivatedRoute, private service: CompanyService) {
    this.company = {} as Company;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let strid = params.get('id');
      if (strid) {
        let id = +strid;
        this.service.getCompany(id).subscribe((company) => {
          this.company = company;
        })
        this.service.getCompanyVacancies(id).subscribe((v) => {
          this.vacancies = v;
        })
      }
    });
  }
}
