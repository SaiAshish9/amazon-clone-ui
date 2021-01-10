import { MfooterComponent } from './home/mfooter/mfooter.component';
import { MobileImageCardComponent } from './home/mobile-image-card/mobile-image-card.component';
import { IsloggedinDirective } from './isloggedin.directive';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { HomeEbooksComponent } from './home/home-ebooks/home-ebooks.component';
import { CategoriesBottomComponent } from './home/categories-bottom/categories-bottom.component';
import { HomeProductsSliderComponent } from './home/home-products-slider/home-products-slider.component';
import { HomeDiscoverComponent } from './home/home-discover/home-discover.component';
import { SearchComponent } from './home/search/search.component';
import { HomeTagComponent } from './home/home-tag/home-tag.component';
import { HomeCategoriesComponent } from './home/categories/categories.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './menubar/menubar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material.module';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HeaderInterceptor } from "./services/HttpInterceptorBasicAuthService"
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenubarComponent,
    NavbarComponent,
    HomeCategoriesComponent,
    HomeTagComponent,
    HomeDiscoverComponent,
    SearchComponent,
    CategoriesBottomComponent,
    HomeEbooksComponent,
    HomeProductsSliderComponent,
    BackToTopComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    IsloggedinDirective,
    MobileImageCardComponent,
    MfooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NzCarouselModule,
    NbThemeModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NzPopoverModule,
    NzButtonModule
  ],
  providers: [CookieService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
