import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../_services/companies.service';
import { Company } from '../_models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = []

  constructor(private companyService: CompanyService, private router: Router) {}
  
  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companyService.getAllCompanies().subscribe((companies) => {
      this.companies = companies;
      console.log(companies);
    })
  }

  navigateToAddCompany() {
    this.router.navigate(['/add-company']);
    console.log("Navigating")
  }

  editCompany(companyId: number | undefined) {
    if (companyId !== undefined) {
      this.router.navigate(['/edit-company', companyId]);
    }
  }

  deleteCompany(companyId: number | undefined) {
    if (companyId !== undefined) {
      this.companyService.deleteCompany(companyId).subscribe(() => {
        this.companies = this.companies.filter(company => company.id !== companyId);
      });
    }
  }

  navigateToCompanyVacancies(companyId: number | undefined) {
    const id = companyId as number;
    if (id !== undefined) {
      this.router.navigate(['/company-vacancies', id]);
    }
  }
}
