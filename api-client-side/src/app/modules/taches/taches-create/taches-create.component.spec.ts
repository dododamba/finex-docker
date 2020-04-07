import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TachesCreateComponent} from './taches-create.component';

describe('TachesCreateComponent', () => {
    let component: TachesCreateComponent;
    let fixture: ComponentFixture<TachesCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TachesCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TachesCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
