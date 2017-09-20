import { Component } from "@angular/core";
import { BarcodeScanner } from 'nativescript-barcodescanner';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    constructor(private barcodeScanner: BarcodeScanner){

    }
    public onScan() {
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13",
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            resultDisplayDuration: 500,
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only
        }).then((result) => {
                alert({
                    title: "You Scanned ",
                    message: "Format: " + result.format + ",\nContent: " + result.text,
                    okButtonText: "OK"
                });
            }, (errorMessage) => {
                console.log("Error when scanning " + errorMessage);
            }
        );
    }
}
