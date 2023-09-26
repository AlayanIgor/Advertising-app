import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { MainComponent } from './layout/components/main/main.component';
import { TopSectionComponent } from './layout/components/header/components/top-section/top-section.component';
import { SearchSectionComponent } from './layout/components/header/components/search-section/search-section.component';
import { CategoriesComponent } from './layout/components/header/components/categories/categories.component';
import { CategoriesSidebarComponent } from './layout/components/header/components/categories/components/categories-sidebar/categories-sidebar.component';
import { CategoriesMainComponent } from './layout/components/header/components/categories/components/categories-main/categories-main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    TopSectionComponent,
    SearchSectionComponent,
    CategoriesComponent,
    CategoriesSidebarComponent,
    CategoriesMainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
