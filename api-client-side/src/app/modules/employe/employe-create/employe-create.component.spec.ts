import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeCreateComponent} from './employe-create.component';

describe('EmployeCreateComponent', () => {
    let component: EmployeCreateComponent;
    let fixture: ComponentFixture<EmployeCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
