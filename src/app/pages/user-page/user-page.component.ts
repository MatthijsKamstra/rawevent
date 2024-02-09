import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Redirects } from 'src/app/shared/constants/redirects';
import { IUser } from 'src/app/shared/interfaces/i-user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  title: string = 'User';
  id!: string;

  user!: IUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id == null) {
      // [mck] should this be a redirect???
      return;
    };
    this.id = id;

    this.userService.getUserById(this.id).subscribe({
      next: (value) => {
        if (!value) {
          console.log('unknown');
          this.router.navigate([Redirects.REDIRECT_HOME]);
        } else {
          console.log('known');
          console.log(value);
          this.user = value;
        }
      },
      error(err) {
        console.error(err);
      },
      complete() {
        console.info('complete');
      },
    });
  }
}
