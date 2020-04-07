import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TachesDetailComponent} from './taches-detail.component';

describe('TachesDetailComponent', () => {
    let component: TachesDetailComponent;
    let fixture: ComponentFixture<TachesDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TachesDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TachesDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
