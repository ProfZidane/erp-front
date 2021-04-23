import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register = {
  lastName: '',
  firtName: '',
  email: '',
  password: '',
  photo: '',
  role: '',
  isConnected: 'false',
  created_at: new Date().toLocaleDateString()
};
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  Register(event) {
    console.log(this.register);
    this.authService.register(this.register).subscribe(
      (success) => {
        console.log(success);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
