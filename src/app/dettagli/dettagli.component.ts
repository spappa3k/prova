import { Component, Input} from '@angular/core';
import { tipo } from '../models/models';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrl: './dettagli.component.css'
})
export class DettagliComponent {

@Input()
Individuo?:tipo;
}
