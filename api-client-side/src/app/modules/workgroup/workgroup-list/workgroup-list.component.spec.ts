import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkgroupListComponent} from './workgroup-list.component';

describe('WorkgroupListComponent', () => {
    let component: WorkgroupListComponent;
    let fixture: ComponentFixture<WorkgroupListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkgroupListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkgroupListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
