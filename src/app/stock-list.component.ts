import { Component } from '@angular/core';

@Component({
  selector: 'stocks',
  templateUrl: '/stock-list.component.html',
  styleUrls: ['/stock-list.component.css']
})

export class StockListComponent{
  title = "stocks";
  stocks = [
    {
      name: "Apple",
      ticker: "APPL",
      price: "124.60",
      img: "https://img.clipartxtras.com/d8e7811cde5b663d5720c3492087e45f_fileapple-logo-blacksvg-wikimedia-commons-apple-logo-clipart_2000-2000.png"
    },
    {
      name: "Microsoft",
      ticker: "MSFT",
      price: "118.30",
      img: "https://itshowcasecontent.blob.core.windows.net/imagesnew/OpenGraphImg.jpg"
    },
    {
      name: "Google",
      ticker: "GOOG",
      price: "143.12",
      img: "https://www.nbr.co.nz/sites/default/files/styles/article_full_300w/public/blog_post_img/Google-Logo.jpg?itok=-iiT5Z9i"
    },
    {
      name: "Apple",
      ticker: "APPL",
      price: "124.60",
      img: "https://img.clipartxtras.com/d8e7811cde5b663d5720c3492087e45f_fileapple-logo-blacksvg-wikimedia-commons-apple-logo-clipart_2000-2000.png"
    }
  ]
}
