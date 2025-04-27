import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CafeListComponent } from './cafe-list.component';
import { CafeService } from '../cafe.service';
import { of } from 'rxjs';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;

  const mockCafes = [
    {
      id: 1,
      nombre: 'Café Especial Uno',
      tipo: 'Café de Origen',
      region: 'Región 1',
      sabor: 'Sabor 1',
      altura: 1800,
      imagen: 'imagen1.png'
    },
    {
      id: 2,
      nombre: 'Café Especial Dos',
      tipo: 'Blend',
      region: 'Región 2',
      sabor: 'Sabor 2',
      altura: 1900,
      imagen: 'imagen2.png'
    },
    {
      id: 3,
      nombre: 'Café Especial Tres',
      tipo: 'Blend',
      region: 'Región 3',
      sabor: 'Sabor 3',
      altura: 1700,
      imagen: 'imagen3.png'
    }
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CafeListComponent],
      providers: [
        {
          provide: CafeService,
          useValue: {
            getCafes: () => of(mockCafes)
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table with three data rows plus one header row', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('table tbody tr');
    expect(rows.length).toBe(3);
  });
});
