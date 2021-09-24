import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent implements OnInit {
  public hayError: boolean = false;
  public termino: string = '';
  public paises: Country[] = [];

  constructor(private $paisService: PaisService) {}

  ngOnInit(): void {}

  /**
   * buscar
   * params: termino string
   * returns: void
   * */
  public buscar(termino: string): void {
    this.hayError = false;
    this.$paisService.buscarPorRegion(termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (error) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  /**
   * sugerencias
   */
  public sugerencias(termino: string): void {
    console.log(termino);
  }
}
