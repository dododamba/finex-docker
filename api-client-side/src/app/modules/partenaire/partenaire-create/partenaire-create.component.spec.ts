import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PartenaireCreateComponent} from './partenaire-create.component';

describe('PartenaireCreateComponent', () => {
    let component: PartenaireCreateComponent;
    let fixture: ComponentFixture<PartenaireCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PartenaireCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PartenaireCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
