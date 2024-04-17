import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompaniesListComponent} from "./companies-list/companies-list.component";
import {CompanyComponent} from "./company/company.component";
import {VacancyComponent} from "./vacancy/vacancy.component";
import {HomeComponent} from "./home/home.component";
import {Top10Component} from "./top10/top10.component";
import {VacanciesListComponent} from "./vacancies-list/vacancies-list.component";

const routes: Routes = [
  { path: 'companies', component: CompaniesListComponent },
  { path: 'companies/:id', component: CompanyComponent},
  {path: 'vacancies/:id', component: VacancyComponent},
  {path: '', component: HomeComponent},
  {path: 'top_ten', component: Top10Component},
  {path:'vacancies', component:VacanciesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
