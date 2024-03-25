import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-kolcsonzesek',
  templateUrl: './kolcsonzesek.component.html',
  styleUrls: ['./kolcsonzesek.component.scss'],
})
export class KolcsonzesekComponent implements OnInit {
  kolcsonzesek: any[] = [];
  newKolcsonzes: any = {};

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.getKolcsonzesek();
  }

  getKolcsonzesek(): void {
    this.baseService.getKolcsonzesek().subscribe((data) => {
      this.kolcsonzesek = data;
    });
  }

  addKolcsonzes(): void {
    this.baseService.createKolcsonzes(this.newKolcsonzes).subscribe(() => {
      this.getKolcsonzesek();
      this.newKolcsonzes = {};
    });
  }

  updateKolcsonzes(kolcsonzes: any): void {
    this.baseService
      .updateKolcsonzes(kolcsonzes.id, kolcsonzes)
      .subscribe(() => {
        this.getKolcsonzesek();
      });
  }

  deleteKolcsonzes(kolcsonzesId: number): void {
    this.baseService.deleteKolcsonzes(kolcsonzesId).subscribe(() => {
      this.getKolcsonzesek();
    });
  }
}
