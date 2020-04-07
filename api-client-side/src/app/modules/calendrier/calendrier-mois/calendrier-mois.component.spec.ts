import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CalendrierMoisComponent} from './calendrier-mois.component';

describe('CalendrierMoisComponent', () => {
    let component: CalendrierMoisComponent;
    let fixture: ComponentFixture<CalendrierMoisComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalendrierMoisComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalendrierMoisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
