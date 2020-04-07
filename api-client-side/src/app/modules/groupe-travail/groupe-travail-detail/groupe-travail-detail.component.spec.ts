import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupeTravailDetailComponent} from './groupe-travail-detail.component';

describe('GroupeTravailDetailComponent', () => {
    let component: GroupeTravailDetailComponent;
    let fixture: ComponentFixture<GroupeTravailDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GroupeTravailDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GroupeTravailDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
