import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-pessoas',
  templateUrl: './calculadora-pessoas.component.html',
  styleUrls: ['./calculadora-pessoas.component.css']
})
export class CalculadoraPessoasComponent {

  criancas: number = 0;
  membros: number = 0;
  visitantes: number = 0;

  constructor() {
  }
  adicionarMembros(numero: number) {
    this.membros+=numero;
  }
  zerarMembros() {
    this.membros = 0;
  }
  adicionarVisitantes(numero: number) {
    this.visitantes+=numero;
  }
  zerarVisitantes() {
    this.visitantes = 0;
  }
  adicionarCriancas(numero: number) {
    this.criancas+=numero;
  }
  zerarCriancas() {
    this.criancas = 0;
  }
  totalPessoas(): number{
    return this.criancas + this.membros + this.visitantes;
  }
  dataAtual(): string {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toLocaleDateString();
  }

  protected readonly Date = Date;
}
