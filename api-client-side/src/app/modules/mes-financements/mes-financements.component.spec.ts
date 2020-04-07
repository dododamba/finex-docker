import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MesFinancementsComponent} from './mes-financements.component';

describe('MesFinancementsComponent', () => {
    let component: MesFinancementsComponent;
    let fixture: ComponentFixture<MesFinancementsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MesFinancementsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MesFinancementsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
