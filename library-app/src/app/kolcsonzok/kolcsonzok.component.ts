import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-kolcsonzok',
  templateUrl: './kolcsonzok.component.html',
  styleUrls: ['./kolcsonzok.component.scss'],
})
export class KolcsonzokComponent implements OnInit {
  kolcsonzok: any[] = [];

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.getKolcsonzok();
  }

  getKolcsonzok(): void {
    this.baseService.getKolcsonzok().subscribe((data) => {
      this.kolcsonzok = data;
    });
  }

  toggleKolcsonzesek(kolcsonzo: any): void {
    kolcsonzo.showKolcsonzesek = !kolcsonzo.showKolcsonzesek;
  }
}
