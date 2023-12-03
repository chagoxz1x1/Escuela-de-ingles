import {
  CollectionReference,
  Firestore,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
  DocumentReference,
} from '@angular/fire/firestore';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private dbPath = 'users';
  private firestore: Firestore = inject(Firestore);
  users$: Observable<any[]>;
  usersCollection: CollectionReference;

  constructor() {
    this.usersCollection = collection(this.firestore, this.dbPath);
    this.users$ = collectionData(this.usersCollection) as Observable<any[]>;
  }

  getAll(): Observable<any[]> {
    return this.users$;
  }

  create(user: any): any {
    addDoc(this.usersCollection, user)
      .then(() => user)
      .catch((err) => console.error(err));
  }
}
