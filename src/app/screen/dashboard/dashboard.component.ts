import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fileToUpload: any;
  files: any;
  verfication_code: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  handleFileInput(event: any) {
    this.fileToUpload = event;
    console.log(this.fileToUpload);

    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
    }
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('file', this.fileToUpload);

    this.dashboardService.uploadFile(formData).subscribe(response => {
      console.log('file upload response: ', response)
      this.getFiles();
    });
  }

  getFiles() {
    this.dashboardService.getFiles().subscribe((response: any) => {
      this.files = response;
      console.log('files received: ', this.files)
    });
  }

  deleteFile(file: string) {
    this.dashboardService.deleteFile(file).subscribe((response: any) => {
      this.files = response;
      console.log('files received: ', this.files);
      this.getFiles();
    });
  }

  downloadFile() {
    console.log('verification code: ', this.verfication_code);
    this.dashboardService.downloadFileByCode(this.verfication_code).subscribe((response: any) => {
      if (response && response.status == 200) {
        window.open(response.data.download_url);
      }
    });
  }
  
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
