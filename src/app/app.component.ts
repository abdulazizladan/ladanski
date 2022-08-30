import { Component, OnInit } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ladanski';

  constructor(public contactDialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  openContactDialog() {
    this.contactDialog.open(ContactComponent)
  }
}
