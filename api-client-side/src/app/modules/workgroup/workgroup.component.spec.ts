import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkgroupComponent} from './workgroup.component';

describe('WorkgroupComponent', () => {
    let component: WorkgroupComponent;
    let fixture: ComponentFixture<WorkgroupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkgroupComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkgroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
