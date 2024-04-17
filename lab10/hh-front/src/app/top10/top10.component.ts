import { Component } from '@angular/core';
import {Vacancy} from "../models";
import {VacancyService} from "../vacancy.service";

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component {
  vacancies: Vacancy[] = [];
  constructor(private vacancyService: VacancyService) {
  }

  ngOnInit() {
    this.vacancyService.getTopVacancies().subscribe((v) => {
      this.vacancies = v;
    });
  }
}
