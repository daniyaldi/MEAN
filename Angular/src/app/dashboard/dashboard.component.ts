import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


declare var M: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[EmployeeService]
})
export class DashboardComponent implements OnInit {
  constructor(private route:Router,public employeeService : EmployeeService,private modalService: NgbModal) { }
  ngOnInit(): void {
    this.showUsers()
  }

  closeResult = '';
  
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onSubmit(form: NgForm) {
    console.log(this.employeeService.selectedEmployee)
    this.employeeService.putEmployee(this.employeeService.selectedEmployee).subscribe(
      (resp) => {
        console.log(resp);
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
 showUsers(){
   this.employeeService.getEmployeeList().subscribe((res)=>{
    this.employeeService.employees=res as Employee[]
   })
 }
  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
    }
 
    onDelete(_id: string) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.employeeService.deleteEmployee(_id).subscribe((res:any) => {
      this.showUsers()
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
