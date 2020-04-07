import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjetCreateComponent} from './projet-create.component';

describe('ProjetCreateComponent', () => {
    let component: ProjetCreateComponent;
    let fixture: ComponentFixture<ProjetCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProjetCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjetCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
