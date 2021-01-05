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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenubarComponent,
    NavbarComponent,
    HomeCategoriesComponent,
    HomeTagComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
