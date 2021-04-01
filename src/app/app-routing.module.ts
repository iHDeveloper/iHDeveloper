import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageAwardsComponent } from "./page-awards/page-awards.component";
import { PageHomeComponent } from "./page-home/page-home.component";

const routes: Routes = [
    { path: 'about', component: PageHomeComponent },
    { path: 'awards', component: PageAwardsComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/about' },
    { path: '', pathMatch: 'full', redirectTo: '/about' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
