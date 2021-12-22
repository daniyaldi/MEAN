import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})

export class EmployeeComponent implements OnInit {

  constructor(private route:Router,public employeeService : EmployeeService) { }

  ngOnInit() {

  }
  


  onSubmit(form : NgForm ) {
  if (true) {
    this.employeeService.postEmployee(form.value).subscribe((res) => {
      M.toast({ html: 'Saved successfully', classes: 'rounded' });
      this.route.navigate(['/login']);
    });
  }
  } 
}


