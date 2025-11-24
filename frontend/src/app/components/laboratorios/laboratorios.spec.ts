import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Laboratorios } from './laboratorios';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JsonService } from '../../services/json.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';

describe('Laboratorios', () => {
  let component: Laboratorios;
  let fixture: ComponentFixture<Laboratorios>;
  let mockJsonService: jasmine.SpyObj<JsonService>;

  beforeEach(async () => {
    mockJsonService = jasmine.createSpyObj('JsonService', ['getRegionesYComunas']);

    mockJsonService.getRegionesYComunas.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [
        Laboratorios,
        HttpClientTestingModule,
        CommonModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: JsonService, useValue: mockJsonService },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Laboratorios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
