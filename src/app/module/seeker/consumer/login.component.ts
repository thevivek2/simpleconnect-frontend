import {Component, OnInit} from "@angular/core";
declare var FB: any
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {


    constructor() {
    }

    ngOnInit(): void {

    }

    submitLogin() {
        console.log("submit login to facebook");
        FB.login((response) => {
            console.log('submitLogin', response);
            if (response.authResponse) {

            } else {
                console.log('User login failed');
            }
        });
    }

}