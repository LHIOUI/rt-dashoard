import { NgModule, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@Component({
  selector: 'rt-gauge-chart',
  template: `
              <div class="col-sm-6">
                <div class="stat-box">
                    <div class="box-title">
                        {{chartTitle}}
                    </div>
                    <div class="box-body">
                        <div class="pie-container">
                            <round-progress [current]="currentValue" [max]="maxValue" [color]="filledColor" [background]="backgroundColor" [radius]="125"
                                [stroke]="20" [rounded]="true" [clockwise]="true" [responsive]="true" [duration]="800" [animation]="'easeInOutQuart'"
                                [animationDelay]="0"></round-progress>
                            <div class="pie-label">
                                <div class="pie-label-percent">
                                    {{(currentValue * 100 / maxValue).toFixed(0)}}%
                                </div>
                                <div class="pie-label-text">{{gaugeLabel}}</div>
                            </div>
                        </div>

                        <div class="stat-info">
                            Initial amount : <span class="info-value">{{maxValue}}</span>
                        </div>

                        <div class="stat-info">
                            Remaining amout : <span class="info-value">{{currentValue}}</span>
                        </div>
                    </div>
                </div>
              </div>
          `,
})
export class RoundedGaugeChart {
  //filled color of gauge
  @Input() filledColor: string = '#FE1200';
  //gauge background color
  @Input() backgroundColor: string = '#eaeaea';
  //gauge current value
  @Input() currentValue: number = 10;
  //gauge max value
  @Input() maxValue: number = 100;
  //gauge text label
  @Input() gaugeLabel: string = 'Complete';
  //gauge title label
  @Input() chartTitle: string = '';
}

@NgModule({
  imports: [CommonModule, RoundProgressModule],
  declarations: [RoundedGaugeChart],
  exports: [RoundedGaugeChart],
})
export class RoundedGaugeChartModule {}
