import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingScreenService } from 'src/app/services/loading-screen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit, OnDestroy {

  loading = false;
  loadingSubcription: Subscription;
  constructor(private loadingScreenService: LoadingScreenService) { }

  ngOnInit(): void {
    this.loadingSubcription = this.loadingScreenService.loadingStatus
      .subscribe( (value: boolean) => {
        this.loading = value;
      });
  }

  ngOnDestroy() {
    this.loadingSubcription.unsubscribe();
  }

}
