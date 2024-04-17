import { Component } from '@angular/core';
import { CompanyService } from "../company.service";
import { Company } from "../models";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent {
  newCompany: Company;
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {
    this.newCompany = {} as Company;
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }


}
