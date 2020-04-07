import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypeFinancementListComponent} from './type-financement-list.component';

describe('TypeFinancementListComponent', () => {
    let component: TypeFinancementListComponent;
    let fixture: ComponentFixture<TypeFinancementListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypeFinancementListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypeFinancementListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
