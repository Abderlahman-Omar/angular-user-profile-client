import { Routes } from '@angular/router';
import { AllUsers } from '../components/all-users/all-users';
import { SingleUser } from '../components/single-user/single-user';

export const routes: Routes = [
    {path:'',component:AllUsers},
    {path:'user/:id',component:SingleUser}
];
