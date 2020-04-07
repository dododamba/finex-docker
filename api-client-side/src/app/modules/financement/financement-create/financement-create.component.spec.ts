import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FinancementCreateComponent} from './financement-create.component';

describe('FinancementCreateComponent', () => {
    let component: FinancementCreateComponent;
    let fixture: ComponentFixture<FinancementCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FinancementCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FinancementCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
