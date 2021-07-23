import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

    constructor(public service: AuthService, private router: Router) { }

    ngOnInit(): void {
        if (localStorage.getItem('isLoggedIn')) {
            var user = JSON.parse( localStorage.getItem('isLoggedIn'));
            if(user.data.roles == 'admin'){
                this.router.navigateByUrl('dashboard');
            }else {
                this.router.navigateByUrl('student');
            }
        }
    }

    signIn(): void{
        this.service.adminSignInOperation().subscribe(
            (response: any) => {
                if (response) {
                    console.log(response.data)
                    localStorage.setItem('isLoggedIn', JSON.stringify(response));
                    if(response.data.roles == 'admin'){
                        this.router.navigateByUrl('dashboard');
                    }else {
                        this.router.navigateByUrl('student');
                    }
                    this.service.adminSignInformModel.reset();
                }
                else {
                    console.log("not succeed");
                }
            },
            error => {                             
                alert('Can not login. Please try again');
            }
        );

    }

}
