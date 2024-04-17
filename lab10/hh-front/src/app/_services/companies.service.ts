import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../_models/company';
import { Vacancy } from '../_models/vacancy';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private BASE_URL = 'http://127.0.0.1:8000/api/companies/';

  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.BASE_URL);
  }

  getCompany(id: number): Observable<Company> {
    const url = `${this.BASE_URL}${id}/`;
    return this.http.get<Company>(url);
  }

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.BASE_URL, company);
  }

  updateCompany(id: number, company: Company): Observable<Company> {
    const url = `${this.BASE_URL}${id}/`;
    return this.http.put<Company>(url, company);
  }

  deleteCompany(id: number): Observable<void> {
    const url = `${this.BASE_URL}${id}/`;
    return this.http.delete<void>(url);
  }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    const url = `${this.BASE_URL}${companyId}/vacancies/`;
    return this.http.get<Vacancy[]>(url);
  }
}
