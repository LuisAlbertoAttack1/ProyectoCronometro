import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  //decorador de un componente
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
   /*Creamos variables con un valor 
      - > el valor empieza en 0 y es number o igualmente lo puedes colocar 
          como any
   */
  public segundo : number = 0;
  //se le coloco un decorador de @Input y @Output
  @Input() public inicio: number = 0;
  @Output() public multiplo10 = new EventEmitter();
  // Creamos 3 metodos para este proyecto
  ngOnInit(): void {
/**
 * Como otros lenguajes, typescript también tiene un 
 * constructor de clase, en este caso el constructor
 *  se ejecuta antes que el ngOnInit().
 */
      // segungo va a hacer igual a la variable de inicio
    this.segundo = this.inicio;

    setInterval(this.actualizarSegundo.bind(this), 1000);  
  }
//se utiliza comúnmente para establecer un retardo en funciones que son ejecutadas
  private actualizarSegundo(): void {
    this.segundo++;
    //Segundo va a ir aumentado
    if (this.segundo % 10 === 0) {
      this.emitirMultiplo10();

    }
  }
//este proyecto se va a manejar con una clase padre y una clase hijo
  private emitirMultiplo10(): void {
    this.multiplo10.emit(this.segundo);
    
  }


}
