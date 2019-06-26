import { Component, HostBinding } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("slideDown", [
      transition(":enter", [
        style({
          transform: "translateY(-100%)",
          opacity: 0
        }),
        animate(
          "1s ease-in-out",
          style({
            transform: "translateY(0)",
            opacity: 1
          })
        )
      ]),
      transition(":leave", [
        animate(
          "1s ease-in-out",
          style({
            transform: "translateY(-10%)",
            opacity: 0
          })
        )
      ])
    ]),

    trigger("slideUp", [
      transition(":enter", [
        style({
          transform: "translateY(100%)",
          opacity: 0
        }),
        animate(
          "1s ease-in-out",
          style({
            transform: "translateY(0)",
            opacity: 1
          })
        )
      ]),
      transition(":leave", [
        animate(
          "1s ease-in-out",
          style({
            transform: "translateY(-10%)",
            opacity: 0
          })
        )
      ])
    ]),

    trigger("slideRight", [
      transition(":enter", [
        style({
          transform: "translateX(-100%)",
          opacity: 0
        }),
        animate(
          "1s ease-in-out",
          style({
            transform: "translateX(0)",
            opacity: 1
          })
        )
      ]),
      transition(":leave", [
        animate(
          "1s ease-in-out",
          style({
            transform: "translateX(-10%)",
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class AppComponent {
  title = "EmployeeApp";
  Counter = 0;
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  handleCounterChange(count: number) {
    console.log(event);
    this.Counter = count;
    console.log(count);
  }
}
