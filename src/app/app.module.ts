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
import { HttpClientModule } from '@angular/common/http';
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
    SignupComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
