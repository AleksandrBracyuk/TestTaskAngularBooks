import { Component, OnInit } from '@angular/core';
import { GenerateDataService } from './shared/generate-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private generateDataService: GenerateDataService) {}

  ngOnInit(): void {
    this.generateDataService.createTestData();
  }
}
