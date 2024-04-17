import { Component, Input } from '@angular/core';
import { Company } from '../_models/company';
import { CompanyService } from '../_services/companies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  @Input() newCompany: Company = {
    name: '',
    description: '',
    city: '',
    address: '',
  }

  constructor(private companyService: CompanyService, private router: Router) { }

  createCompany() {
    this.companyService.addCompany(this.newCompany).subscribe(() => {
      this.newCompany = {
        name: '',
        description: '',
        city: '',
        address: '',
      };
      this.router.navigate(['']);
    });
  }
}
