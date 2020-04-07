import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TachesUpdateComponent} from './taches-update.component';

describe('TachesUpdateComponent', () => {
    let component: TachesUpdateComponent;
    let fixture: ComponentFixture<TachesUpdateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TachesUpdateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TachesUpdateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
