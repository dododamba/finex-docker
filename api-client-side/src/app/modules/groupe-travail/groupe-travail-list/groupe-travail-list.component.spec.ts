import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupeTravailListComponent} from './groupe-travail-list.component';

describe('GroupeTravailListComponent', () => {
    let component: GroupeTravailListComponent;
    let fixture: ComponentFixture<GroupeTravailListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GroupeTravailListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GroupeTravailListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
