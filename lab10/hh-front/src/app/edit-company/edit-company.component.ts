import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../_models/company';
import { CompanyService } from '../_services/companies.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  company: Company = {
    id: 0,
    name: '',
    description: '',
    city: '',
    address: ''
  };
  constructor(private route: ActivatedRoute, private router: Router, private companyService: CompanyService) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const companyId = params['id'];
      console.log(companyId);
      this.companyService.getCompany(companyId).subscribe((company) => {
        this.company = company
        console.log(this.company)
      })
      
    })
  }

  updateCompany() {
    if (this.company && this.company.id !== undefined) {
      this.companyService.updateCompany(this.company.id, this.company).subscribe(() => {
        // Navigate to the company details page or any other page after updating
        this.router.navigate(['']);
      });
    }
  }

}
