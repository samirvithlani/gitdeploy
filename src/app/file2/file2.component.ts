import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileuploadService } from '../fileupload.service';
import { UploadfileService } from '../uploadfile.service';

@Component({
  selector: 'app-file2',
  templateUrl: './file2.component.html',
  styleUrls: ['./file2.component.css']
})
export class File2Component implements OnInit {

  constructor(private fileuploadservice:UploadfileService) { }

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  get f(){
    return this.myForm.controls;
  }
     
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  ngOnInit(): void {
  }

  submit(){
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource').value);
    formData.append('name',this.myForm.get('name').value)
   
    this.fileuploadservice.upload(formData).subscribe(res=>{

      console.log("done..")
    },err=>{

    })
  }

}
