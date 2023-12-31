import { Component, computed, signal } from '@angular/core';
import { TimerListCardComponent } from '../../components/timer-list-card/timer-list-card.component';
import { SanitizeHtmlPipe } from '../../pipes/sanitize-html.pipe';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { CommonModule } from '@angular/common';
import { CommonLegendComponent } from '../../components/common-legend/common-legend.component';
import { StatisticsArrowComponent } from '../../components/statistics-arrow/statistics-arrow.component';
import { MenuIconComponent } from '../../components/menu-icon/menu-icon.component';
import { TitleBoldComponent } from '../../components/title-bold/title-bold.component';
import { UserDetailsComponent } from '../../components/user-details/user-details.component';

interface assignedDataType{images:number,title:string,work:string}

@Component({
  selector: 'app-analytical',
  standalone: true,
  imports: [
    TimerListCardComponent,
    SanitizeHtmlPipe,
    HighchartsChartModule,
    CommonModule,
    CommonLegendComponent,
    StatisticsArrowComponent,
    MenuIconComponent,
    TitleBoldComponent,
    UserDetailsComponent
  ],
  templateUrl: './analytical.component.html',
  styleUrl: './analytical.component.scss',
})
export class AnalyticalComponent {
  assignedData:assignedDataType[]=[{images:1,title:"Sunil Joshi",work:"Web Designer"},
  {images:2,title:"Sunil Joshi",work:"Web Designer"},
  {images:3,title:"Sunil Joshi",work:"Web Designer"},
  {images:4,title:"Sunil Joshi",work:"Web Designer"},
  {images:5,title:"Sunil Joshi",work:"Web Designer"},
  {images:2,title:"Sunil Joshi",work:"Web Designer"}];
  timerCardData = [
    {
      name: 'Exployess',
      count: 96,
      class: 'violet',
      svg: `<path
    fill="#ddbaff"
    d="M24,44L24,44c-8.216,0-15.137-6.14-16.116-14.297l-0.797-4.639C5.871,14.924,13.788,6,24,6h0 c10.212,0,18.129,8.924,16.912,19.063l-0.797,4.639C39.137,37.86,32.216,44,24,44z"
  />
  <path
    fill="#6c19ff"
    d="M37.701,10.916c-0.825-1.117-1.787-2.133-2.858-3.017C31.912,5.474,28.145,4.003,24,4.003 c-4.145,0-7.912,1.471-10.844,3.895c-0.554,0.458-1.084,0.951-1.58,1.485c-3.115,3.323-4.903,7.879-4.573,12.777 c3.362-1.449,5.88-4.482,6.615-8.158h20.764c0.735,3.677,3.253,6.709,6.615,8.158C41.278,17.982,40.019,14.053,37.701,10.916z"
  />
  <path
    fill="#ddbaff"
    d="M40,31H8c-1.657,0-3-1.343-3-3s1.343-3,3-3h32c1.657,0,3,1.343,3,3S41.657,31,40,31z"
  />
  <path
    fill="#2100c4"
    d="M37.701,13.913c-0.825-1.117-1.787-2.133-2.858-3.017C31.912,8.471,28.145,7,24,7 c-4.145,0-7.912,1.471-10.844,3.895c-0.554,0.458-1.084,0.951-1.58,1.485c-3.115,3.323-4.903,7.879-4.573,12.777 c3.362-1.449,5.88-4.482,6.615-8.158h20.764c0.735,3.677,3.253,6.709,6.615,8.158C41.278,20.979,40.019,17.05,37.701,13.913z"
  />`,
    },
    {
      name: 'Clients',
      count: 3600,
      class: 'orange',
      svg: `
      <path fill="#f5bc00" d="M44,41H4V10h40V41z"/><polygon fill="#eb7900" points="44,26 24,26 4,26 4,10 44,10"/>
      <path fill="#eb7900" d="M17,26h-6v3h6V26z"/><path fill="#eb7900" d="M37,26h-6v3h6V26z"/><rect width="14" height="3" x="17" y="7" fill="#f5bc00"/><path fill="#eb0000" d="M17,23h-6v3h6V23z"/><path fill="#eb0000" d="M37,23h-6v3h6V23z"/>`,
    },
    {
      name: 'Projects',
      count: 356,
      class: 'darkBlue',
      svg: `
      <path fill="#3dd9eb" d="M43,36H13V11h22c4.418,0,8,3.582,8,8V36z"/>
      <path fill="#7debf5" d="M21,36H5V19c0-4.418,3.582-8,8-8l0,0c4.418,0,8,3.582,8,8V36z"/><path fill="#6c19ff" d="M21,36h5v8h-5V36z"/><polygon fill="#eb0000" points="27,16 27,20 35,20 35,24 39,24 39,16"/><rect width="8" height="3" x="9" y="20" fill="#3dd9eb"/>
      `,
    },
    {
      name: 'Events',
      count: 696,
      class: 'red',
      svg: `
      <polygon fill="#f55376" points="37,6 11,6 11,30 24,36 37,42"/><polygon fill="#f55376" points="11,6 37,6 37,30 24,36 11,42"/><polygon fill="#eb0000" points="11,6 11,30 24,36 31.5,32.538 37,25 37,6"/><g><polygon fill="#fadb00" points="37,29.768 48,21 26,21"/><polygon fill="#fadb00" points="37,29.732 43.957,34 44,34 37,14 30,34 30.044,34"/><polygon fill="#f5bc00" points="39.45,21 34.55,21 32.685,26.329 36.974,29.748 37,29.732 37.026,29.748 41.315,26.329"/></g>
      `,
    },
    {
      name: 'Payroll',
      count: 96,
      class: 'green',
      svg: `
      <circle cx="20" cy="28" r="16" fill="#3ddab4"/><circle cx="31.584" cy="17.478" r="13.449" fill="#f5bc00"/><polygon fill="#3ddab4" points="4.07,44 19.909,44 10.922,35.549"/><path fill="#00b569" d="M20,12c-0.239,0-0.471,0.025-0.708,0.036c-0.739,1.665-1.157,3.504-1.157,5.443 c0,7.428,6.021,13.449,13.449,13.449c1.484,0,2.907-0.25,4.242-0.693C35.929,29.502,36,28.76,36,28C36,19.163,28.837,12,20,12z"/><polygon fill="#f5bc00" points="44.975,4.029 31.661,4.029 39.215,11.133"/>
      `,
    },
    {
      name: 'Reports',
      count: 59,
      class: 'light_blue',
      svg: `
      <path fill="#3dd9eb" d="M11,18c-3.313,0-6,2.686-6,6c0,3.313,2.687,6,6,6c3.314,0,6-2.687,6-6C17,20.687,14.314,18,11,18"/><path fill="#3dd9eb" d="M37,5c-3.313,0-6,2.687-6,6c0,3.313,2.687,6,6,6c3.314,0,6-2.687,6-6C43,7.687,40.314,5,37,5"/><path fill="#3dd9eb" d="M37,31c-3.313,0-6,2.686-6,6c0,3.313,2.687,6,6,6c3.314,0,6-2.687,6-6C43,33.687,40.314,31,37,31"/><path fill="#6c19ff" d="M31.819,14.028L25.073,22h-8.415C16.88,22.626,17,23.299,17,24c0,0.701-0.12,1.374-0.341,2h8.414 l6.746,7.973c0.688-1.175,1.765-2.095,3.053-2.584L28.62,24l6.251-7.389C33.583,16.123,32.507,15.202,31.819,14.028"/><path fill="#00b3d7" d="M16.658,22H11v4h5.659C16.88,25.375,17,24.701,17,24C17,23.299,16.88,22.626,16.658,22"/><path fill="#00b3d7" d="M35.474,9.708l-3.655,4.32c0.688,1.175,1.764,2.095,3.053,2.584l3.655-4.319L35.474,9.708"/><path fill="#00b3d7" d="M34.872,31.389c-1.288,0.489-2.365,1.409-3.053,2.584l3.655,4.319l3.053-2.584L34.872,31.389"/>
      `,
    },
  ];
  highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;
  pieChartOptions!: Highcharts.Options;
  areaChartMonthlyOptions!: Highcharts.Options;
  employeeChrtOptions!: Highcharts.Options;
  customerChrtOptions!: Highcharts.Options;
  data = signal<number[]>([1, 2, 3, 4]);
  ngOnInit() {
    this.initializeChart();
  }
  initializeChart() {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08'],
        labels: {
          style: {
            color: 'rgb(135 140 147)',
            fontSize: 'var(--fs16)',
          },
        },
        lineWidth: 0,
      },
      yAxis: {
        gridLineDashStyle: 'longdash' as Highcharts.ColorType,
        labels: {
          style: {
            color: 'rgb(135 140 147)',
            fontSize: 'var(--fs16)',
          },
        },
        title: {
          text: null,
        },
      } as Highcharts.YAxisOptions,
      credits: {
        enabled: false,
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          pointWidth: 13,
          showInLegend: false,
        },
        column: {
          borderRadius: '40%',
        },
      } as Highcharts.PlotOptions,
      series: [
        {
          name: 'John',
          data: [5, 3, 0, 7, 2, 2],
          color: 'rgba(93, 135, 255, 0.85)',
        },
        {
          name: 'Jane',
          data: [-2, -2, -3, -3, -1, -2],
          color: 'rgba(73, 190, 255, 0.85)',
        },
      ] as Highcharts.SeriesOptionsType[],
    };
    this.pieChartOptions = {
      chart: {
        renderTo: 'container',
        type: 'pie',
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          shadow: false,
          dataLabels: {
            enabled: false,
          },
        },
      },

      series: [
        {
          innerSize: '70%',
          data: [
            { name: 'Yellow Slice', y: 12, color: '#5d87ff' },
            { name: 'Red Slice', y: 10, color: '#ecf2ff' },
            { name: 'Blue Slice', y: 33, color: '#f9f9fd' },
          ],
        },
      ] as Highcharts.SeriesOptionsType[],
    };
    this.areaChartMonthlyOptions = {
      chart: {
        type: 'areaspline',
        margin: [0, 0, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        visible: false,
      },
      yAxis: {
        visible: false,
      },
      tooltip: {
        pointFormat:
          '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}',
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        areaspline: {
          marker: {
            enabled: false,
          },
        },
        series: {
          fillColor: {
            linearGradient: [40, 0, 80, 150],
            stops: [
              [0, 'rgba(97,195,254,1)'],
              [1, 'rgba(220,239,242,1)'],
            ],
          },
        },
      } as Highcharts.PlotOptions,
      series: [
        {
          groupPadding: 0,
          pointPadding: 0,
          name: 'USA',
          data: [5, 10, 4, 7, 1, 8, 2],
        },
      ] as Highcharts.SeriesOptionsType[],
    };
    this.employeeChrtOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: ['Apr', 'May', 'june', 'uly', 'Aug', 'Sept'],
        lineColor: 'transparent',
      },
      yAxis: {
        visible: false,
      },
      tooltip: {
        valueSuffix: ' (1000 MT)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
          zones: [
            {
              color: 'rgba(236, 242, 255, 0.85)',
              value: 10,
            },
          ],
        },
        series: {},
      } as Highcharts.PlotOptions,
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          data: [6, 5, 10, 8, 3, 5.5],
          color: 'var(--blue-color)',
        },
      ] as any,
    };
    this.customerChrtOptions = {
      chart: {
        type: 'column',
        spacingLeft: 0,
        spacingRight: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
      },
      title: {
        text: '',
      },
      xAxis: {
        visible: false,
      },
      yAxis: {
        visible: false,
      },
      tooltip: {
        valueSuffix: ' (1000 MT)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
          zones: [
            {
              color: 'rgba(236, 242, 255, 0.85)',
              value: 10,
            },
          ],
        },
        series: {},
      } as Highcharts.PlotOptions,
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          data: [6, 5, 10, 8, 3, 5.5],
          color: 'var(--blue-color)',
        },
      ] as any,
    };
  }
}
