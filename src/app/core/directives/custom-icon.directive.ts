/**
 * A custom directive that loads all custom icons inside assets/images folder.
 * The directive doesn't have any html because it only loads the icons to the existing mat-icon directive.
 * Frontend doesn't have an access to the server's file system. The developer must include all files manually
 * @param none void
 * @return void
 * @example <mat-icon svgIcon="finger-print"></mat-icon>
 */
import { Directive } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appCustomIcon]'
})
export class CustomIconDirective {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    ) {

    this.matIconRegistry.addSvgIcon(`airplane-flight`,
    this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.custom_icon_path}/airplane-flight.svg`)
    );

    this.matIconRegistry.addSvgIcon(`finger-print`,
    this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.custom_icon_path}/finger-print.svg`)
    );

    this.matIconRegistry.addSvgIcon(`home`,
    this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.custom_icon_path}/home.svg`)
    );

    this.matIconRegistry.addSvgIcon(`savings`,
    this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.custom_icon_path}/save.svg`)
    );

    this.matIconRegistry.addSvgIcon(`message`,
    this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.custom_icon_path}/message.svg`)
    );

    
  }

}
