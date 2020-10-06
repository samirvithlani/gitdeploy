import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadfileService } from '../uploadfile.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  constructor(private uploadService:UploadfileService) { }

  selectedFiles:FileList;
  currentFile:File;
  progress =0;
  message ="";
  fileInfo:Observable<any>;

  selectFile(event){

    console.log('fun called...')
    console.log(event)
    console.log(event.target.files)

    this.selectedFiles = event.target.files;
  }

  upload(){


      this.currentFile = this.selectedFiles.item(0);
      this.uploadService.upload(this.currentFile).subscribe((res)=>{

        if(res.type === HttpEventType.UploadProgress){

          this.progress = Math.round(100 * res.loaded /res.total)
          this.fileInfo = this.uploadService.getFiles();
        }
        else if(res instanceof HttpResponse){

          this.message = res.body.message;
          
        }

      },(err)=>{

          this.progress =0;
          this.message = "could not upload file..."
          this.currentFile = undefined;

      })


  }

  ngOnInit(): void {
    this.fileInfo = this.uploadService.getFiles();
  }

}
