import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {UserService, User} from '../core';

@Component({
    selector: 'app-LoginSocial-page',
    template: ''
})

export class SocialAuthComponent implements OnInit {
    authType: String = '';
    isSubmitting = false;
    authForm: User;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
    ) {}

    ngOnInit() {
        this.route.url.subscribe(data => {
            this.authType = data[data.length - 1].path;
            this.SocialLogin();
            // console.log(data);
        });
    }

    SocialLogin() {
        // debugger;
        this.userService.sociallogin(this.authType)
        .subscribe(data =>{
            this.authForm = data
            this.router.navigateByUrl('/')
        });
    }
}