import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employees';
import { Pipe, PipeTransform } from '@angular/core';
// import { animate, trigger, state, style, transition } from '@angular/animations';
import { CustomPipePipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    
  ]
})
export class TestComponent implements OnInit {
  @Input() count: number;
  @Output() countChanged: EventEmitter<number> = new EventEmitter();
  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
  decrement() {
    if(this.count > 0) this.count--;
    this.countChanged.emit(this.count);
  }
  public employee_list = [
    {
      id: 1,
      name: 'Sam',
      age: 30,
      gender: 'M',
      position: 'Jr.Employee',
    },
    {
      id: 2,
      name: 'Mary',
      age: 40,
      gender: 'F',
      position: 'Sr.Employee',
    },
    {
      id: 1,
      name: 'Sam',
      age: 30,
      gender: 'M',
      position: 'Jr.Employee',
    },
    {
      id: 2,
      name: 'Mary',
      age: 40,
      gender: 'F',
      position: 'Sr.Employee',
    }
  ]
  myEmployees: IEmployee;
  msg: string = "Hello World";
  num: number = 3.678;
  pi: number = 3.14;
  e: number = 2.718281828459045;
  fahrenheit = 36;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    // this.myEmployees = this.employeeService.getEmployees();
    // this.myEmployees = null;
    let that = this;
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(){
      that.myEmployees = JSON.parse(this.responseText).employee_list;
    });
    xhr.open('GET', 'http://127.0.0.1:8000/');
    xhr.send();
  }

}
