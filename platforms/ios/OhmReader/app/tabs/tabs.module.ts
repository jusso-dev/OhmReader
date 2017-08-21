import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { FeaturedComponent } from "./featured/featured.component";
import { HomeComponent } from "./home/home.component";
import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        NativeScriptModule,
        TabsRoutingModule
    ],
    declarations: [
        TabsComponent,
        HomeComponent,
        FeaturedComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
