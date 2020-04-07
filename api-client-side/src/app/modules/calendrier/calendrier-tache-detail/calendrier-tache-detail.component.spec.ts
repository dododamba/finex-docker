import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CalendrierTacheDetailComponent} from './calendrier-tache-detail.component';

describe('CalendrierTacheDetailComponent', () => {
    let component: CalendrierTacheDetailComponent;
    let fixture: ComponentFixture<CalendrierTacheDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalendrierTacheDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalendrierTacheDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
