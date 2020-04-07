import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypeFinancementCreateComponent} from './type-financement-create.component';

describe('TypeFinancementCreateComponent', () => {
    let component: TypeFinancementCreateComponent;
    let fixture: ComponentFixture<TypeFinancementCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypeFinancementCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypeFinancementCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
