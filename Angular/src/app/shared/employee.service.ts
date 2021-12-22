import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {Employee} from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee:Employee =new Employee;
  employees: Employee[] =[];
  readonly baseURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  postEmployee(emp:Employee) {
   
    return this.http.post(this.baseURL+'employee', emp);
  }
  login(emp:Employee) {
    return this.http.post(this.baseURL+'login', emp);
  }
  getEmployeeList() {
    return this.http.get(this.baseURL+'dashboard');
  }
   putEmployee(emp: any) {
     return this.http.put(this.baseURL + `dashboard/${emp._id}`, emp);
   }
  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `dashboard/${_id}`);
  }


}
