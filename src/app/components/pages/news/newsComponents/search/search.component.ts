import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { InstitucionesService } from 'src/app/services/instituciones.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  locations: any[] = [];
  instituciones: any[] = [];
  categories: any[] = [];

  constructor(private locationService: LocationService, private institucionesService: InstitucionesService, private categoryService: CategoryService) { };

  ngOnInit(): void {
    this.loadLocations();
    this.loadInstituciones();
    this.loadCategories();
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

}