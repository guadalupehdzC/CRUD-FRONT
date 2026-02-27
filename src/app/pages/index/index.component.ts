import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  alumnos = [
    {
      control: '2023001',
      nombre: 'Alejandro',
      carrera: 'Sistemas',
      semestre: 6,
      especialidad: 'Redes'
    },
    {
      control: '2023002',
      nombre: 'María',
      carrera: 'Administración',
      semestre: 4,
      especialidad: 'Finanzas'
    }
  ];

  eliminar(index: number) {
    this.alumnos.splice(index, 1);
  }

  editar(index: number) {
    alert('Aquí luego conectamos el modal de edición 😎');
  }

}