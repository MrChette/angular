import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Componente Hijo : ngOnInit');

    //? Emite valores de manera secuencial dependiendo del tiempo que le coloques
    this.interval$ = interval(1000).subscribe( value => console.log(`Tick : ${ value }`) );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Hijo : ngOnChanges');
    console.log({ changes });
  }

  ngOnDestroy(): void {
    console.log('Componente Hijo : ngOnDestroy');

    //? Necesario para matar el interval, sino se queda perpetuo y se crean mas si lo vuelves a llamar
    this.interval$?.unsubscribe();
  }

}
