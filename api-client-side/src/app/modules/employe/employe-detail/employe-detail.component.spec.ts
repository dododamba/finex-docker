import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeDetailComponent} from './employe-detail.component';

describe('EmployeDetailComponent', () => {
    let component: EmployeDetailComponent;
    let fixture: ComponentFixture<EmployeDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
