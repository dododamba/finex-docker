import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MonProfileUpdateComponent} from './mon-profile-update.component';

describe('MonProfileUpdateComponent', () => {
    let component: MonProfileUpdateComponent;
    let fixture: ComponentFixture<MonProfileUpdateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MonProfileUpdateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MonProfileUpdateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
