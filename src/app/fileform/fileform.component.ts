import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadfileService } from '../uploadfile.service';

@Component({
  selector: 'app-fileform',
  templateUrl: './fileform.component.html',
  styleUrls: ['./fileform.component.css']
})
export class FileformComponent implements OnInit {


  constructor(private uploadserve: UploadfileService) { }

  myForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    file: new FormControl('',Validators.required),
    fileSource: new FormControl('')
  })

  get f() {

    return this.myForm.controls;
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {

      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      })
    }

  }
  submit() {


    const formData = new FormData();

    formData.append('file', this.myForm.get('fileSource').value)
    formData.append('name', this.myForm.get('name').value)

    this.uploadserve.upload(formData).subscribe(res => {

      console.log('done..')
    }, err => {

      console.log('error..')
    })

  }

  ngOnInit(): void {
  }

}
