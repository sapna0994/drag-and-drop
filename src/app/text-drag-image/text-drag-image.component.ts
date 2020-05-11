import { Component, OnInit } from '@angular/core';
import * as puppeteer from 'puppeteer';
@Component({
  selector: 'app-text-drag-image',
  templateUrl: './text-drag-image.component.html',
  styleUrls: ['./text-drag-image.component.scss']
})
export class TextDragImageComponent implements OnInit {
// tslint:disable-next-line: ban-types
  data: String = '';
  // page: any;
  // browser: any;
  // puppeteer = require('puppeteer');
  // fs = require('fs');
  constructor() { }
  ngOnInit() {
  }
  // async saveImage() {
  //   const browser = await puppeteer.launch({
  //       headless: false
  //   });
  //   const page = await browser.newPage();
  //   await page.setViewport({ width: 1200, height: 1200 });
  //   // tslint:disable-next-line: max-line-length
  //   await page.goto('https://www.google.com/search?q=.net+core&rlz=1C1GGRV_enUS785US785&oq=.net+core&aqs=chrome..69i57j69i60l3j69i65j69i60.999j0j7&sourceid=chrome&ie=UTF-8');
  //   // tslint:disable-next-line: prefer-const
  //   let viewSource = await page.goto('../../assets/img-text.jpg');
  //   // tslint:disable-next-line: only-arrow-functions
  //   this.fs.writeFile('../../assets/img-text.jpg', await viewSource.buffer(), function(err) {
  //     if (err) {
  //         return console.log(err);
  //     }
  //     console.log('The file was saved!');
  //   });
  // }
}
