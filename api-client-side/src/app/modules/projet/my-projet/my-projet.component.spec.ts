import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyProjetComponent} from './my-projet.component';

describe('MyProjetComponent', () => {
    let component: MyProjetComponent;
    let fixture: ComponentFixture<MyProjetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyProjetComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyProjetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
