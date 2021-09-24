import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor(private $paisService: PaisService) {}

  ngOnInit(): void {}

  /**
   * sugerencias
termino:string   */
  public sugerencias(termino: string): void {
    console.log(termino);
  }

  /**
   * buscar
   */
  public buscar(termino: string): void {
    this.hayError = false;
    this.$paisService.buscarPorCapital(termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (error) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
