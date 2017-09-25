import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { RtTabBarModule } from './@ui-elements';
import { AppComponent } from './app.component';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import * as highcharts from 'highcharts';
import * as highchartsMore from 'highcharts/js/highcharts-more';
import * as brokenAxis from 'highcharts/js/modules/broken-axis';
import * as highmaps from 'highcharts/js/modules/map';

export function highchartsFactory() {
  // Initialize addons.
  highchartsMore(highcharts);
  brokenAxis(highcharts);
  highmaps(highcharts);

  return highcharts;
}
import {
  LoginComponent,
  DashboardComponent,
  NotFoundComponent,
} from './@components';
export declare let require: any;
import { AuthService, AuthGuard } from './@core';
import { AddRmpmComponent } from './@components/add-rmpm/add-rmpm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    AddRmpmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    RtTabBarModule,
    RoundProgressModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
