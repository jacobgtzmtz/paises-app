import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeHolder: string = '';

  public termino: string = '';
  public debouncer: Subject<string> = new Subject;

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  onKeyPress() {
    this.debouncer.next(this.termino);
  }
}
