import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { InstitucionesService } from 'src/app/services/instituciones.service';
import { LocationService } from 'src/app/services/location.service';
import { OpportunitiesService } from 'src/app/services/opportunities.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  locations: any[] = [];
  instituciones: any[] = [];
  categories: any[] = [];
  opportunities: any[] = [];

  filters = {
    nombre: '',
    idRegion: '',
    idCategoria: '',
    idInstitucion: ''
  };


  constructor(private locationService: LocationService, private institucionesService: InstitucionesService,
     private categoryService: CategoryService, private oportunidadesService: OpportunitiesService) { };

  ngOnInit(): void {
    this.loadLocations();
    this.loadInstituciones();
    this.loadCategories();
    this.loadOpportunities();
  }

  loadLocations(): void {
    this.locationService.getLocations().subscribe({
      next: (response: any) => {
        console.log('Ubicaciones: ', response);
        this.locations = response;
      },
      error: (error: { message: string; }) => {
        console.error('Error al cargar las regiones: ', error);
      }
    });
  }

  loadInstituciones(): void {
    this.institucionesService.getInstituciones().subscribe({
      next: (response: any) => {
        console.log('Instituciones: ', response);
        this.instituciones = response;
      },
      error: (error: { message: string; }) => {
        console.error('Error al cargar las instituciones: ', error);
      }
    });
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (response: any) => {
        console.log('Categorias: ', response);
        this.categories = response;
      },
      error: (error: { message: string; }) => {
        console.error('Error al cargar las categorias: ', error);
      }
    });
  }

  loadOpportunities(): void {
    this.oportunidadesService.getOpportunities().subscribe({
      next: (response: any) => {
        console.log('Oportunidades: ', response);
        this.opportunities = response;
      },
      error: (error: { message: string; }) => {
        console.error('Error al cargar las oportunidades: ', error);
        
      }
    });
  }

  //Metodo para filtrar oportunidades
  onFilter(): void {
    alert('si lo trajo' + this.filters.nombre + "\n" + this.filters.idRegion);
    this.oportunidadesService.filtrarOportunidades(this.filters).subscribe({
      next: (response: any) => {
        console.log('Oportunidades filtradas: ', response);
        this.opportunities = response;
      },
      error: (error: { message: string; }) => {
        console.error('Error al cargar las oportunidades filtradas: ', error);
      }
    });

  }


  resetFilters(): void {
    this.filters = {
      nombre: '',
      idRegion: '',
      idCategoria: '',
      idInstitucion: ''
    }

}
}