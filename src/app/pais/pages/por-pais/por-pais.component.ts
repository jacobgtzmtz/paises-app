import { Component } from '@angular/core';
import { Country } from '../../models/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor(private $paisService: PaisService) {}

  public buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.$paisService.buscarPais(termino).subscribe(
      (paises) => {
        this.paises = paises;
        console.log(paises);
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  /**
   * sugerencias
   * event: string
   */
  public sugerencias(termino: any) {
    this.hayError = false;
    //TODO: Crear sugerencias
  }
}
