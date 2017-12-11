"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PipesComponent = (function () {
    function PipesComponent() {
        this.name = "QshORe";
        this.age = 23;
        this.today = new Date();
    }
    return PipesComponent;
}());
PipesComponent = __decorate([
    core_1.Component({
        selector: 'my-pipes',
        templateUrl: './pipes.component.html',
        styles: ['p{background-color:tomato; font-style:italic}']
    })
], PipesComponent);
exports.PipesComponent = PipesComponent;
/* tslint:disable:no-any no-magic-numbers prefer-function-over-method */
/*import { Component } from '@angular/core';*/
/*import { genData } from './data';*/
/*
@Component({
  selector: 'basic-demo',
  template: require('./basic-demo.html')
})
export class BasicDemoComponent {
  private data: any[] = genData(10);
  private colHeaders: string[] = ['ID', 'First Name', 'Last Name', 'Address',
    'Favorite food', 'Price', 'Is active'];
  private columns: any[] = [
    {
      data: 'id'
    },
    {
      data: 'name.first',
      renderer: 'text',
      readOnly: true
    },
    {
      data: 'name.last',
      readOnly: true
    },
    {
      data: 'address'
    },
    {
      data: 'product.description',
      source: 'product.options',
      optionField: 'description',
      type: 'autocomplete',
      strict: false,
      visibleRows: 4
    },
    {
      data: 'price',
      type: 'numeric',
      format: '$ 0,0.00'
    },
    {
      data: 'isActive',
      type: 'checkbox',
      checkedTemplate: 'Yes',
      uncheckedTemplate: 'No'
    }
  ];
  private colWidths: number[] = [null, null, null, null, null, null, 30];
  private options: any = {
    stretchH: 'all',
    columnSorting: true,
    contextMenu: [
      'row_above', 'row_below', 'remove_row'
    ]
  };

  private afterChange(e: any) {
    console.log(e);
  }

  private afterOnCellMouseDown(e: any) {
    console.log(e);
  }
}*/ 
//# sourceMappingURL=pipes.component.js.map