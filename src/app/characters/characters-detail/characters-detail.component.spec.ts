import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideRoutes, Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

import { CharactersDetailComponent } from './characters-detail.component';

let config: Routes = [
  {
      path: '', component: CharactersDetailComponent
  }
];

describe('CharactersDetailComponent', () => {
  let component: CharactersDetailComponent;
  let fixture: ComponentFixture<CharactersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterModule ],
      declarations: [  ],
      providers: [  ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
