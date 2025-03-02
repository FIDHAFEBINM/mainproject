import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../../register/register.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  currentPage: number = 1;
  itemsPerPage: number = 10;
  custid:string | null=null
    @ViewChild('registerModel') registerModel !: RegisterComponent;
  
  cards= [{
    name: 'John Doe',
    title: 'Architect and Engineer',
    description: 'Some example text some example text. John Doe is an architect and engineer.',
    imageUrl: '/image/doc.jpg',
    profileLink: '#',
    price:300
  }]

  constructor(private router:Router){}

  get paginatedCards() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.cards.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.cards.length / this.itemsPerPage);
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  BuyCourse() {
    if (this.custid == null) {
      if (this.registerModel) {
        this.registerModel.showModal = true;  // Show the modal
      }
    } else {
      alert("Buy successfully");
    }
  }
  

}
