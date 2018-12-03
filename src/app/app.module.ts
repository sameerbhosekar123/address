import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {
  MatButtonModule, MatGridListModule, MatDividerModule, MatFormFieldModule,
  MatSelectModule, MatInputModule, MatCardModule, MatIconModule
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddressListComponent } from './address-list/address-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatGridListModule, MatDividerModule, MatFormFieldModule,
  MatSelectModule, MatInputModule, MatCardModule, MatIconModule,MatAutocompleteModule,MatTableModule,MatPaginatorModule,
  MatDialogModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
