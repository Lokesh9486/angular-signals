import { Routes } from '@angular/router';
import { AnalyticalComponent } from './screens/analytical/analytical.component';
import { HomelayoutComponent } from './layout/homelayout/homelayout.component';
import { NotesComponent } from './screens/notes/notes.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { EmployeeComponent } from './screens/employee/employee.component';

export const routes: Routes = [
    {path:"",redirectTo:"analytical", pathMatch: 'full' },
    {path:"analytical",component:AnalyticalComponent},
    {path:"notes",component:NotesComponent},
    {path:"employee",component:EmployeeComponent},
    {path: '**', component: PageNotFoundComponent}
];
