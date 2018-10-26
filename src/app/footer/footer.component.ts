import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  quote: String[];
  quoteText: String;
  quoteAuthor: String;

  constructor(
    private commonService: CommonService
  ) {
  }

  ngOnInit(): void {
    this.getQuotes();
  }

  private getQuotes() {
    this.quote = this.commonService.generateRandom();
    if (this.quote != null) {
      this.quoteAuthor = this.quote['author'];
      this.quoteText = this.quote['text'];
    }
  }
}
