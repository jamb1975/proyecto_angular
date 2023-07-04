import { FtpService } from './../ftp-service';
import { ProgressBarComponent } from './../progress-bar/progress-bar.component';
import { DescargaService } from './../descarga-service';
import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styles: [
  ],
  providers: [NgbModalConfig, NgbModal]
})


export class DescargasComponent implements OnInit {
    isCompleted: Boolean = false;
    closeResult = '';
    constructor(private ftpService: FtpService, private modalService: NgbModal, config: NgbModalConfig) {
      config.backdrop = 'static';
      config.keyboard = false;
     }

  ngOnInit(): void {
    this.isCompleted = false;
  }

  open(content: any) {

    this.modalService.open(content);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }

  descargarAbaco(content: any):any{
    this.open(content);
    this.isCompleted = true;
    return this.ftpService.descargarAbaco()
       .subscribe(
        (response: any) => {
          if (response.type === HttpEventType.DownloadProgress) {


          }
          if (response.type ===  HttpEventType.Response) {

            this.downloadFile(response.body);
            this.isCompleted = false;
           this.getDismissReason('Cross click');
           this.modalService.dismissAll();
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
function content(content: any) {
  throw new Error('Function not implemented.');
}

