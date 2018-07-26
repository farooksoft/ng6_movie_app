import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {MovieDataService} from '../../services/movie-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frmGroup:FormGroup;
  constructor(private builder:FormBuilder, private router:Router, private svc:MovieDataService) {
    this.frmGroup= builder.group({
      "email":['',[Validators.required,Validators.email]],
      "password":['',Validators.required]
    });
   }

  ngOnInit() {
  }

  login(frm:NgForm){
    //console.log(frm);
    let userId=frm.controls.email.value;
    let pass=frm.controls.password.value;

    this.svc.login(userId,pass); //invoked service logic to check credentials

    if(this.svc.isAuthenticated==true){
      this.router.navigate(['movies']);
    }
    else
    {
      alert("Invalid userid or password");
    }
  }
}
