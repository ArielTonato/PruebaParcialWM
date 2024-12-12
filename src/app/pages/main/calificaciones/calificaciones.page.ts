import { Component, OnInit } from '@angular/core';
import { AcademicService } from 'src/app/services/academic.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss']
})
export class CalificacionesPage implements OnInit {
  subjects: any[] = []; // Almacena las materias desde Firebase
  selectedSubject: any = null; // Materia seleccionada

  constructor(private academicService: AcademicService) {}

  ngOnInit() {
    this.loadSubjects();
  }

  // Cargar materias desde Firebase
  loadSubjects() {
    this.academicService.getSubjects().subscribe({
      next: (data) => {
        this.subjects = data;
      },
      error: (err) => {
        console.error('Error al cargar materias:', err);
      }
    });
  }

  // Manejar selección de materia
  onSubjectChange() {
    // No es necesario realizar una lógica adicional ya que la materia seleccionada está en `selectedSubject`
  }
}
