import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';
declare var M: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,public employeeService : EmployeeService) { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm ) {
    this.employeeService.login(form.value).subscribe((res) => {
      if(res===true)
      {   
        this.route.navigate(['/dashboard']);
        M.toast({ html: 'LogIn successfully', classes: 'rounded' });
      }
      else{
        M.toast({ html: 'User Not Found', classes: 'rounded' });

      }
    });
    
    }

}
