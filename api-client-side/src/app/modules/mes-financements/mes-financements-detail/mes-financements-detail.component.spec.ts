import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MesFinancementsDetailComponent} from './mes-financements-detail.component';

describe('MesFinancementsDetailComponent', () => {
    let component: MesFinancementsDetailComponent;
    let fixture: ComponentFixture<MesFinancementsDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MesFinancementsDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MesFinancementsDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
