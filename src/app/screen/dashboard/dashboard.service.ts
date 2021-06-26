import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  headers: any;
  BASE_URL = environment.baseUrl;
  fileUploadUrl = '/user/file-upload';
  listFilesUrl = '/user/files';
  deleteFileUrl = '/user/file';
  fileDownloadUrl = '/user/download/file';

  constructor(private httpClient: HttpClient) { }

  uploadFile(formData: any) {
    return this.httpClient.post(this.BASE_URL + this.fileUploadUrl, formData);
  }

  getHttpHeader() {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Content-Type', 'application/json');
    return this.headers;
  }

  getFiles() {
    console.log('calling service...');
    return this.httpClient.get(this.BASE_URL + this.listFilesUrl);
  }

  deleteFile(file: string) {
    const param = new HttpParams().set('file_name',  file);
    console.log('sending file: ', file);
    return this.httpClient.delete(this.BASE_URL + this.deleteFileUrl, { params: param });
  }

  downloadFileByCode(verificationCode: number) {
    const param = new HttpParams().set('verification_code', verificationCode);
    return this.httpClient.get(this.BASE_URL + this.fileDownloadUrl, { params: param });
  }
}
