import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { MasterContentComponent } from "./master-content/master-content.component";
import { ContentLoaderComponent } from "./master-content/content-loader/content-loader.component";

const APP_ROUTES: Routes = [
    {
        path: "",
        component: MasterContentComponent
    },{
        path: 'component/:id',
        component: ContentLoaderComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);