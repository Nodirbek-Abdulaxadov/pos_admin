import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './root/header/header.component';
import { SidebarComponent } from './root/sidebar/sidebar.component';
import { ToolsComponent } from './root/tools/tools.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WarehouseTableComponent } from './components/warehouse-table/warehouse-table.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ToolsComponent,
    WarehouseTableComponent,
    ProductTableComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
