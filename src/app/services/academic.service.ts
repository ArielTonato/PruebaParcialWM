import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {
  private subjectsCollection = 'materia'; // Nombre de la colección en Firebase

  constructor(private firestore: AngularFirestore) {}

  // Obtener materias desde Firebase
  getSubjects(): Observable<any[]> {
    return this.firestore.collection(this.subjectsCollection).valueChanges();
  }
}
