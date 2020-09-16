import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private service: DataService) { }
  myForm: FormGroup
  emailMsg: string;

  chekMinAge(control: FormControl): ValidationErrors {

    console.log("check min age called..")
    var age = control.value;
    console.log(age)
    if (age < 18) {

      return { ageValid: true };
    }


    return null;
  }

  checkEmail(control: FormControl): ValidationErrors {
    if (control.parent != undefined) {

      var value = control.value;
      var email = control.parent.get('sEmail').value;

      console.log(value, "--", email)

      this.service.emailCheck(email).subscribe(res => {

        console.log(res);
        if (res == 1) {

          console.log("inside if")
          this.emailMsg = "email already taken.."
          return { emailvalid: true }

        }
        else {

          this.emailMsg = "email avaialable"
        }



      })

    }

    return null;
  }
  comparePassword(control: FormControl): ValidationErrors {

    if (control.parent != undefined) {

      var value = control.value;
      var password1 = control.parent.get('sPassword').value;
      console.log(value, password1)
      if (value != password1) {

        return { notMatch: true }
      }


    }

    return null;
  }
  ngOnInit(): void {

    this.myForm = new FormGroup(
      {
        sName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
        sEmail: new FormControl('', [this.checkEmail.bind(this)]),
        sPassword: new FormControl(''),
        sCpassword: new FormControl('', [this.comparePassword]),
        sAge: new FormControl('', [this.chekMinAge]),
        sIncome: new FormControl('', [Validators.minLength(5)]),
        phone: new FormControl('', Validators.pattern("[789]{1}[0-9]{9}"))

      }
    )

  }
  submit() {


  }

}
