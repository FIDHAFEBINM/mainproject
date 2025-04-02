import { CommonModule } from '@angular/common';
import { Component, ViewChild,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../../register/register.component';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  currentPage: number = 1;
  itemsPerPage: number = 10;
  custid:string | null=null
    @ViewChild('registerModel') registerModel !: RegisterComponent;
  id=''
  
  cards:any= []

  constructor(private router:Router,private mainserve:MainService){}

  ngOnInit(): void {
    this.id = localStorage.getItem('loginId') || '';
    this.loadcart()
  }

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

  loadcart(){
    this.mainserve.viewcart(this.id).subscribe((res:any)=>{
      this.cards=res
    })
  }

  delete(card:string){
    this.mainserve.deletecart(card).subscribe((res:any)=>{
      alert("deleted succesfully")
    })
    this.loadcart()
  }
  

}
