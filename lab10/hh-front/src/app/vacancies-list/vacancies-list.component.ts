import { Component } from '@angular/core';
import {Company, Vacancy} from "../models";
import {VacancyComponent} from "../vacancy/vacancy.component";
import {VacancyService} from "../vacancy.service";

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacancies-list.component.html',
  styleUrls: ['./vacancies-list.component.css']
})
export class VacanciesListComponent {
  vacancies: Vacancy[] = [];
  constructor(private vacancyService: VacancyService) {
  }

  ngOnInit() {
    this.vacancyService.getVacancies().subscribe((v) => {
      this.vacancies = v;
    });
  }
}
