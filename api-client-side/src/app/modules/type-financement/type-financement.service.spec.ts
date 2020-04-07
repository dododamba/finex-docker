/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {TypeFinancementService} from './type-financement.service';

describe('Service: TypeFinancement', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TypeFinancementService]
        });
    });

    it('should ...', inject([TypeFinancementService], (service: TypeFinancementService) => {
        expect(service).toBeTruthy();
    }));
});
