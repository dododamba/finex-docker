import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MonProfileDetailComponent} from './mon-profile-detail.component';

describe('MonProfileDetailComponent', () => {
    let component: MonProfileDetailComponent;
    let fixture: ComponentFixture<MonProfileDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MonProfileDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MonProfileDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
