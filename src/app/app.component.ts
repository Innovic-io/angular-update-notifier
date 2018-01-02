import {Component, OnInit} from '@angular/core';
import { UpdateService } from './update.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  updateAvailable$: Observable<any>;
  updateEnabled$: Observable<boolean>;

  constructor(private readonly updateService: UpdateService) {}

  ngOnInit() {
    this.updateAvailable$ = this.updateService.isUpdateAvailable();
    this.updateEnabled$ = this.updateService.isUpdateEnabled();
  }

  reloadPage() {
    location.reload();
  }

  async checkForUpdate() {
    await this.updateService.checkForUpdates();
  }

  isErrored(error: Error) {
    console.log(error.message);
  }
}
