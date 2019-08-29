import { CustomIconDirective } from './custom-icon.directive';
import { inject } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

describe('CustomIconDirective', () => {
  it('should create an instance', inject([MatIconRegistry, DomSanitizer],
    (s1: MatIconRegistry, s2: DomSanitizer) => {

    const directive = new CustomIconDirective(s1, s2);
    expect(directive).toBeTruthy();

  }));
});
