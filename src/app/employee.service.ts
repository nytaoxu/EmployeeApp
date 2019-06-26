import { Injectable } from '@angular/core';
import { IEmployee } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Employees = [
  //   {id: 1, name: 'John', age: '10'},
  //   {id: 1, name: 'John', age: '10'},
  //   {id: 1, name: 'John', age: '10'},
  // ];
  Employees: IEmployee;
  getEmployees() {
    console.log(this.Employees);
    return this.Employees;
  }
  
  // constructor(private employeeService: EmployeeService) { }
  constructor() {}
}
