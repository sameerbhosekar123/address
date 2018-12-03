import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';

export interface PeriodElement{
  id:number;
  first_name:string;
  last_name:string;
  address1:string;
  city:string;
  country:string;
  phone_number:string;
};

const ELEMENT_DATA:PeriodElement[] = [
  {id: 101, first_name: 'Dummy Mathew', last_name: 'Dummy Gurero',address1: '03 Rom House', city: 'California',country:'United States',phone_number:'4442424242'},
  {id: 102, first_name: 'Dummy Mathew', last_name: 'Dummy Gurero',address1: '04 Rom House', city: 'California1',country:'United States',phone_number:'4442424242'}
];

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  id:number;
  first_name:string;
  last_name:string;
  address1:string;
  city:string;
  country:string;
  phone_number:string;

  displayedColumns = ['id','first_name','last_name','address1','city','country','phone_number'];
  dataSource = new MatTableDataSource<PeriodElement>(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor() { }

  ngOnInit() {
  }

}
