import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from '../_models/vacancy';
import { CompanyService } from '../_services/companies.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companyId: number | undefined;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.companyId = params['id'];
      if (this.companyId !== undefined) {
        this.loadVacancies();
      }
    });
  }

  loadVacancies() {
    if (this.companyId !== undefined) {
      this.companyService.getCompanyVacancies(this.companyId).subscribe((vacancies) => {
        this.vacancies = vacancies;
      });
    }
  }
}
