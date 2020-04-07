import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FinancementDetailComponent} from './financement-detail.component';

describe('FinancementDetailComponent', () => {
    let component: FinancementDetailComponent;
    let fixture: ComponentFixture<FinancementDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FinancementDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FinancementDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
