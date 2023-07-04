import { FtpService } from './ftp-service';
import { Injectable } from "@angular/core";
import { HttpEventType } from '@angular/common/http';

@Injectable()
export class DescargaService {

  constructor(private ftpService: FtpService){}
  descargarAbaco(){

        return this.ftpService.descargarAbaco()

                .subscribe(
                  (response: any) => {
                    if (response.type === HttpEventType.DownloadProgress) {
                      console.log("download progress");

                    }
                    if (response.type ===  HttpEventType.Response) {
                      console.log("donwload completed");
                      this.downloadFile(response.body);
                      
                    }


                   }
                 );


  }

  downloadFile(data: any) {
    let blob = new Blob([data], {type: 'application/zip'});
    const a  = document.createElement('a');
    let url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'abaco.zip';
    a.click();
    URL.revokeObjectURL(url);

  }

}
