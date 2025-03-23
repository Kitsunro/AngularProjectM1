import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { NavigationErrorComponent } from './navigation-error-component/navigation-error-component.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    // Pour la page d'accueil
    // On y accèdera avec l'URL : http://localhost:4200/home
    // ou simplement http://localhost:4200
    {path: '', component: AssignmentsComponent, canActivate: [AuthGuard]},
    {path: 'home', component: AssignmentsComponent, canActivate: [AuthGuard]},
    // Pour l'ajout d'assignments
    // On y accèdera avec l'URL : http://localhost:4200/add
    {path: 'add', component: AddAssignmentComponent, canActivate: [AuthGuard]},
 // Pour le détail d'un assignment
    // On y accèdera avec l'URL : http://localhost:4200/assignment/1 ou
    // http://localhost:4200/assignment/2 ou ... avec 1 
    // qui représente l'id de l'assignment
    {path: 'assignments/:id', component: AssignmentDetailComponent, canActivate: [AuthGuard]},
    // Pour la modification d'un assignment existant
    {path: 'assignments/:id/edit', component: EditAssignmentComponent, canActivate: [AuthGuard]},
    // Pour la page de login
    {path: 'login', component: LoginComponent},
    // Pour l'erreur 404
    // On y accèdera avec n'importe quelle URL qui ne correspond pas
    // à une route définie
    {path: '**', component: NavigationErrorComponent}
];
