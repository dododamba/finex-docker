import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppLayoutComponent} from './@layout/app-layout/app-layout.component';
import {WebLayoutComponent} from './@layout/web-layout/web-layout.component';
import {HeaderComponent} from './@component/app/header/header.component';
import {FooterComponent} from './@component/app/footer/footer.component';
import {SidebarComponent} from './@component/app/sidebar/sidebar.component';
import {AuthGuard} from './core/auth-guard';
import {AuthService} from './services/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './core/auth-interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {FlatMenuDirective} from './directives/flat-menu.directive';
import {SharedModulesModule} from './shared-modules/shared-modules.module';
import {HeadedWebComponent} from './@component/web/headed-web/headed-web.component';
import {ProjetMaitredoeuvreComponent} from './projet/projet-maitredoeuvre/projet-maitredoeuvre.component';
import {ProjetCreateMaitredoeuvreComponent} from './projet/projet-create-maitredoeuvre/projet-create-maitredoeuvre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        AppLayoutComponent,
        WebLayoutComponent,
        HeaderComponent,
        FlatMenuDirective,
        FooterComponent,
        SidebarComponent,
        HeadedWebComponent,
        ProjetMaitredoeuvreComponent,
        ProjetCreateMaitredoeuvreComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModulesModule,
        Ng4LoadingSpinnerModule.forRoot(),
        AppRoutingModule
    ],
    providers: [AuthService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
