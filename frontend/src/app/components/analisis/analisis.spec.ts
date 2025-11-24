import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Analisis } from './analisis';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JsonService } from '../../services/json.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';

describe('Analisis', () => {
  let component: Analisis;
  let fixture: ComponentFixture<Analisis>;
  let mockJsonService: jasmine.SpyObj<JsonService>;

  beforeEach(async () => {
    mockJsonService = jasmine.createSpyObj('JsonService', ['getRegionesYComunas']);

    mockJsonService.getRegionesYComunas.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [
        Analisis,
        HttpClientTestingModule,
        CommonModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: JsonService, useValue: mockJsonService },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Analisis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
