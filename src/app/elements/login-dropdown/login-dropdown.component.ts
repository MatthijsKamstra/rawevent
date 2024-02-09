import { Component } from '@angular/core';

declare var bootstrap: any;


@Component({
  selector: 'app-login-dropdown',
  templateUrl: './login-dropdown.component.html',
  styleUrls: ['./login-dropdown.component.scss']
})
export class LoginDropdownComponent {

  onClickHandler() {
    const dropdownEl = document.getElementById('loginDropdown');
    const dropdown = new bootstrap.Dropdown(dropdownEl);
    dropdown.hide();
  }

}
