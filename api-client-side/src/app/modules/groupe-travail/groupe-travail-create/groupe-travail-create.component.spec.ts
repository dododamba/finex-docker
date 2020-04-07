import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupeTravailCreateComponent} from './groupe-travail-create.component';

describe('GroupeTravailCreateComponent', () => {
    let component: GroupeTravailCreateComponent;
    let fixture: ComponentFixture<GroupeTravailCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GroupeTravailCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GroupeTravailCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
