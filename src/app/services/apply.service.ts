import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Application } from '../interfaces/application';

@Injectable()
export class ApplyService {

  constructor(
    private afDatabase: AngularFireDatabase
  ) { }

  createApplication(app: Application) {
    return this.afDatabase.list('/applications').push(app);
  }

  getApplications() {
    return this.afDatabase.list<Application>('/applications').snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getSingelApplication(key: string) {
    return this.afDatabase.object<Application>(`/applications/${key}`).valueChanges();
  }

}
