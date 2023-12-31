import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  standalone: true,
  imports: [],
  template: `
    <div class="six-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
      </svg>
    </div>
  `,
  styles: `
  .six-icon{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 35px;
                    height: 35px;
                    color: #5d87ff;
                    background-color: #ecf2ff!important;
                    border-radius: 5px;
                    svg{
                      width: 65%;
                      height: 65%;
                      fill: transparent !important;
                      color: #5d87ff;
                      stroke: currentColor;
                      stroke-width: 2px;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      background-color: transparent;
                  }
                }
`,
})
export class MenuIconComponent {}
