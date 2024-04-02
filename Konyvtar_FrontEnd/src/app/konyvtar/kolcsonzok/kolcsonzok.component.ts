import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-kolcsonzok',
  templateUrl: './kolcsonzok.component.html',
  styleUrl: './kolcsonzok.component.css',
})
export class KolcsonzokComponent {
  customers$: Observable<any[]> | undefined;

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.customers$ = this.baseService.getCustomers();
  }
}
