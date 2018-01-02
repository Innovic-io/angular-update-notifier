import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UpdateService {

  private updateEnabled$ = new BehaviorSubject<boolean>(false);

  constructor(private swUpdate: SwUpdate) {
    this.updateEnabled$.next(this.swUpdate.isEnabled);
  }

  isUpdateEnabled() {
    return this.updateEnabled$;
  }

  isUpdateAvailable() {
    return this.swUpdate.available;
  }

  async checkForUpdates() {
    await this.swUpdate.checkForUpdate();
  }
}
