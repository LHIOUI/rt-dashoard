import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'rt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  options: Object;
  marketDataOptions: Object;
  countryEnvOptions: Object;
  responsive = true;
  constructor(private router: Router) {
    this.options = {
      chart: {
        type: 'column',
        style: { height: 'auto', width: '100%' },
      },
      title: {
        text: 'Efficiency Optimization by Branch',
      },
      xAxis: {
        categories: ['Seattle HQ', 'San Francisco', 'Tokyo'],
      },
      yAxis: [
        {
          min: 0,
          title: {
            text: 'Employees',
          },
        },
        {
          title: {
            text: 'Profit (millions)',
          },
          opposite: true,
        },
      ],
      legend: {
        shadow: false,
      },
      tooltip: {
        shared: true,
      },
      plotOptions: {
        column: {
          grouping: false,
          shadow: false,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Employees',
          color: 'rgba(165,170,217,1)',
          data: [150, 73, 20],
          pointPadding: 0.3,
          pointPlacement: -0.2,
        },
        {
          name: 'Employees Optimized',
          color: 'rgba(126,86,134,.9)',
          data: [140, 90, 40],
          pointPadding: 0.4,
          pointPlacement: -0.2,
        },
        {
          name: 'Profit',
          color: 'rgba(248,161,63,1)',
          data: [183.6, 178.8, 198.5],
          tooltip: {
            valuePrefix: '$',
            valueSuffix: ' M',
          },
          pointPadding: 0.3,
          pointPlacement: 0.2,
          yAxis: 1,
        },
        {
          name: 'Profit Optimized',
          color: 'rgba(186,60,61,.9)',
          data: [203.6, 198.8, 208.5],
          tooltip: {
            valuePrefix: '$',
            valueSuffix: ' M',
          },
          pointPadding: 0.4,
          pointPlacement: 0.2,
          yAxis: 1,
        },
      ],
    };
    this.marketDataOptions = {
      chart: {
        type: 'line',
        style: { height: 'auto', width: '100%' },
      },
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016',
      },

      subtitle: {
        text: 'Source: thesolarfoundation.com',
      },

      yAxis: {
        title: {
          text: 'Number of Employees',
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },

      plotOptions: {
        series: {
          pointStart: 2010,
        },
      },

      series: [
        {
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
        {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        },
        {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    };
    this.countryEnvOptions = {
      chart: {
        type: 'solidgauge',
        marginTop: 50,
        style: { height: 'auto', width: '100%' },
      },

      title: {
        text: 'Activity',
        style: {
          fontSize: '24px',
        },
      },

      tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
          fontSize: '16px',
        },
        pointFormat:
          '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function(labelWidth) {
          return {
            x: 200 - labelWidth / 2,
            y: 180,
          };
        },
      },

      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [
          {
            // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: '#EEE',
            borderWidth: 0,
          },
        ],
      },

      yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: [],
      },

      plotOptions: {
        solidgauge: {
          dataLabels: {
            enabled: false,
          },
          linecap: 'round',
          stickyTracking: false,
          rounded: true,
        },
      },

      series: [
        {
          name: 'Move',
          data: [
            {
              color: 'red',
              radius: '112%',
              innerRadius: '88%',
              y: 80,
            },
          ],
        },
      ],
    };
  }

  ngOnInit() {}
  onSettings(event) {
    this.router.navigate(['/add-rmpm']);
    event.preventDefault();
  }
}
