import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { WarehouseTableComponent } from './components/warehouse-table/warehouse-table.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'products', component: ProductTableComponent },
  { path: 'warehouses', component: WarehouseTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
