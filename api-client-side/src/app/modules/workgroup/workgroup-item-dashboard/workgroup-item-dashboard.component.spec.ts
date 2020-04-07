import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkgroupItemDashboardComponent} from './workgroup-item-dashboard.component';

describe('WorkgroupItemDashboardComponent', () => {
    let component: WorkgroupItemDashboardComponent;
    let fixture: ComponentFixture<WorkgroupItemDashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkgroupItemDashboardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkgroupItemDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
