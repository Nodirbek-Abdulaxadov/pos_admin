import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserMultiFormatReader } from '@zxing/library';

@Component({
  selector: 'app-barcode-reader',
  templateUrl: './barcode-reader.component.html',
  styleUrls: ['./barcode-reader.component.css']
})
export class BarcodeReaderComponent implements OnInit, OnDestroy {

  codeReader:any = BrowserMultiFormatReader;
  videoInput:any = HTMLVideoElement;
  startScanButton:any = HTMLButtonElement;
  decodedData:any = HTMLElement;

  ngOnInit() {
    this.codeReader = new BrowserMultiFormatReader();
    this.videoInput = document.createElement('video');
    this.startScanButton = document.createElement('button');
    this.decodedData = document.createElement('div');
    document.body.appendChild(this.videoInput);
    document.body.appendChild(this.startScanButton);
    document.body.appendChild(this.decodedData);
    this.startScanButton.textContent = 'Start Scan';
    this.startScanButton.addEventListener('click', this.startScan.bind(this));
    this.codeReader.listVideoInputDevices().then((devices: string | any[]) => {
      if (devices && devices.length) {
        const device = devices[0];
        this.codeReader.decodeFromVideoDevice(device.deviceId, this.videoInput).then((result: any) => {
          this.handleDecodeResult(result);
        }).catch((err: any) => {
          console.error(err);
        });
      } else {
        console.error('No video input devices found');
      }
    }).catch((err: any) => {
      console.error(err);
    });
  }

  ngOnDestroy() {
    this.codeReader.stopDecodeFromVideoDevice();
    document.body.removeChild(this.videoInput);
    document.body.removeChild(this.startScanButton);
    document.body.removeChild(this.decodedData);
  }

  startScan() {
    this.codeReader.decodeFromVideoDevice(undefined, this.videoInput).then((result: any) => {
      this.handleDecodeResult(result);
    }).catch((err: any) => {
      console.error(err);
    });
  }

  handleDecodeResult(result: any) {
    this.decodedData.textContent = result.text;
  }

}
