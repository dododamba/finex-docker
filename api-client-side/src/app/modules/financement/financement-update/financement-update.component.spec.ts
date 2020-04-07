import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FinancementUpdateComponent} from './financement-update.component';

describe('FinancementUpdateComponent', () => {
    let component: FinancementUpdateComponent;
    let fixture: ComponentFixture<FinancementUpdateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FinancementUpdateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FinancementUpdateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
