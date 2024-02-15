import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvironmentService } from 'src/app/services/environment.service';
import { SecurityService } from 'src/app/services/security.service';
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

    attendee!: IUser;
    user!: IUser;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private environmentService: EnvironmentService,
        private sanitizer: DomSanitizer,
        private securityService: SecurityService,
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id == null) {
            // [mck] should this be a redirect???
            return;
        };
        this.id = id;

        // console.log(this.id);

        this.getCurrentUser();

        this.userService.getUserById(this.id).subscribe({
            next: (value) => {
                if (!value) {
                    console.log('unknown attendee');
                    this.router.navigate([Redirects.REDIRECT_HOME]);
                } else {
                    console.log('known attendee');
                    console.log(value);
                    this.attendee = value;
                }
            },
            error(err) {
                console.error(err);
            },
            complete() {
                // console.info('complete');
            },
        });
    }

    getCurrentUser(): string {
        const user = this.securityService.getUser();
        if (user) this.user = user;
        if (!user) return '';
        return user?.firstName + ' ' + user?.lastName;
    }

    currentAttendeeIsUser() {
        const user = this.securityService.getUser();
        if (!user || !this.attendee) return false;
        if (this.attendee._id === user?._id) {
            return true;
        } else {
            return false;
        }
    }

    attendeeLogedIn() {
        const user = this.securityService.getUser();
        if (!user) return false;
        return !!user;
    }


}
