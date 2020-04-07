import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MesFinancementsListComponent} from './mes-financements-list.component';

describe('MesFinancementsListComponent', () => {
    let component: MesFinancementsListComponent;
    let fixture: ComponentFixture<MesFinancementsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MesFinancementsListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MesFinancementsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
