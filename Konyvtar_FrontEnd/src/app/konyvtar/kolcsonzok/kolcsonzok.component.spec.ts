import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolcsonzokComponent } from './kolcsonzok.component';

describe('KolcsonzokComponent', () => {
  let component: KolcsonzokComponent;
  let fixture: ComponentFixture<KolcsonzokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KolcsonzokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KolcsonzokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
