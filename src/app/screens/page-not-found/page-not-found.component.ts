import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  template: `
    <section class="page_not_found d-flex justify-content-center align-items-center py-5">
        <div class="text-center">
          <h2 class="fw-bold ">
            <p>Sorry for some reason,</p>
            <p>we can't find the page you are looking for.</p>
          </h2>
          <!-- <div>
            <p class="para-max1 font-normal py-6">
              Not sure what to do? The most popular things to do on
            </p>
            <ul class="d-flex justify-content-center">
            </ul>
          </div> -->
        </div>
    </section>
  `,
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
