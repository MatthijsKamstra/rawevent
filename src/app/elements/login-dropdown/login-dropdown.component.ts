import { Component, EventEmitter, Output } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-login-dropdown',
  templateUrl: './login-dropdown.component.html',
  styleUrls: ['./login-dropdown.component.scss']
})
export class LoginDropdownComponent {

  @Output() change = new EventEmitter();

  onClickHandler() {
    // const dropdownEl = document.getElementById('loginDropdown');
    // const dropdown = new bootstrap.Dropdown(dropdownEl);
    // dropdown.hide();
    // this.change.emit();
    console.log('login');

  }

}
