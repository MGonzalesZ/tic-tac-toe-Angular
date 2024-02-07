import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posiciones = [
    ['?', '?', '?'],
    ['?', '?', '?'],
    ['?', '?', '?'],
  ];

  jugador = 'O';

  num_jug = 0;

  pintar(fila: number, columna: number) {
    if (this.libre(fila, columna)) {
      this.posiciones[fila][columna] = this.jugador;
      this.num_jug++;
      this.verificar_ganador(this.jugador);
      if (this.lleno()) {
        alert('El juego terminó en un empate');
        this.reiniciar();
      }
      this.cambiar_jugador();
    }
  }

  libre(fila: number, columna: number): boolean {
    if (this.posiciones[fila][columna] == '?') return true;
    else return false;
  }

  cambiar_jugador() {
    if (this.jugador == 'O') this.jugador = 'X';
    else this.jugador = 'O';
  }

  verificar_ganador(jugador: string) {
    if (
      this.posiciones[0][0] == jugador &&
      this.posiciones[0][1] == jugador &&
      this.posiciones[0][2] == jugador
    ) {
      alert(`Ganó el jugador ${jugador}`);
      this.reiniciar();
    }

    if (
      this.posiciones[1][0] == jugador &&
      this.posiciones[1][1] == jugador &&
      this.posiciones[1][2] == jugador
    ) {
      alert(`Ganó el jugador ${jugador}`);
      this.reiniciar();
    }

    if (
      this.posiciones[2][0] == jugador &&
      this.posiciones[2][1] == jugador &&
      this.posiciones[2][2] == jugador
    ) {
      alert(`Ganó el jugador ${jugador}`);
      this.reiniciar();
    }

    if (
      this.posiciones[0][0] == jugador &&
      this.posiciones[1][0] == jugador &&
      this.posiciones[2][0] == jugador
    ) {
      alert(`Ganó el jugador ${jugador}`);
      this.reiniciar();
    }

    if (
      this.posiciones[0][1] == jugador &&
      this.posiciones[1][1] == jugador &&
      this.posiciones[2][1] == jugador
    ) {
      alert(`Ganó el jugador ${jugador}`);
      this.reiniciar();
    }

    if (
      this.posiciones[0][2] == jugador &&
      this.posiciones[1][2] == jugador &&
      this.posiciones[2][2] == jugador
    ) {
      alert(`Ganó el jugador ${jugador}`);
      this.reiniciar();
    }

    if (
      this.posiciones[0][0] == jugador &&
      this.posiciones[1][1] == jugador &&
      this.posiciones[2][2] == jugador
    ) {
      alert(`Ganó el jugador ${jugador}`);
      this.reiniciar();
    }

    if (
      this.posiciones[0][2] == jugador &&
      this.posiciones[1][1] == jugador &&
      this.posiciones[2][0] == jugador
    ) {
      alert(`Ganó el jugador ${jugador}`);
      this.reiniciar();
    }
  }

  reiniciar() {
    for (let fila = 0; fila < this.posiciones.length; fila++) {
      for (let columna = 0; columna < this.posiciones.length; columna++) {
        this.posiciones[fila][columna] = '?';
      }
    }
    this.num_jug = 0;
  }

  lleno(): boolean {
    let bandera = true;
    for (let fila = 0; fila < this.posiciones.length; fila++) {
      for (let columna = 0; columna < this.posiciones.length; columna++) {
        if (this.posiciones[fila][columna] == '?') {
          bandera = false;
        }
      }
    }
    return bandera;
  }
}
