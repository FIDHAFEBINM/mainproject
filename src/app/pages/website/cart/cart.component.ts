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
  isRegistered: boolean = true;
    @ViewChild('registerModel') registerModel !: RegisterComponent;
  id=''
  
  cards:any= []
  purchasedCourses: any = []; // Purchased courses


  constructor(private router:Router,private mainserve:MainService){}

  ngOnInit(): void {
    this.id = localStorage.getItem('loginId') || '';
    this.isRegistered = !!localStorage.getItem('token'); // Example: Check if a token exists

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

  BuyCourse(courseId:string): void {
    console.log('BuyCourse method called');
    if (this.isRegistered) {
      console.log('User is registered, navigating to /buy-course');
      this.router.navigate(['/buy-course',courseId]);
    } else {
      console.log('User is not registered, opening registration modal');
      this.registerModel.open();
    }
  }

  


  // loadcart(){
  //   this.mainserve.viewcart(this.id).subscribe((res:any)=>{
  //     this.cards=res
  //   })
  // }


  delete(card:string){
    this.mainserve.deletecart(card).subscribe((res:any)=>{
      alert("deleted succesfully")
    })
    this.loadcart()
  }

  deletes(card: string) {
    this.mainserve.deletecart(card).subscribe((res: any) => {
      console.log('Deleted:', card);
      this.cards = this.cards.filter((c: any) => c._id !== card); // remove from UI directly

    });
    this.loadcart()
  }
  

  loadcart() {
    // Fetch cart items
    this.mainserve.viewcart(this.id).subscribe((cartRes: any) => {
      this.cards = cartRes;
      console.log('Cart Items:', this.cards); // Debug log
  
      // Fetch purchased courses
      this.mainserve.getcoursebyuserid(this.id).subscribe((purchasedRes: any) => {
        this.purchasedCourses = purchasedRes;
        console.log('Purchased Courses:', this.purchasedCourses); // Debug log
  
        const itemsToDelete: string[] = [];
  
        // Identify purchased courses in the cart
        this.cards = this.cards.filter((card: any) => {
          const isPurchased = this.purchasedCourses.some(
            (purchased: any) => purchased.courseId._id === card.course._id // Compare course IDs
          );
          if (isPurchased) {
            console.log('Marking purchased course for deletion:', card); // Debug log
            itemsToDelete.push(card._id);
          }
          return !isPurchased;
        });
  
        // Delete purchased courses from the cart
        this.deletePurchasedItems(itemsToDelete);
      });
    });
  }
  

  deletePurchasedItems(itemIds: string[]) {
    if (itemIds.length === 0) return;
  
    let completed = 0;
  
    itemIds.forEach((itemId) => {
      this.mainserve.deletecart(itemId).subscribe({
        next: () => {
          completed++;
          console.log(`Deleted item: ${itemId}`); // Debug log
          if (completed === itemIds.length) {
            console.log('All purchased items deleted from cart');
            this.loadcart(); // Reload the cart after all deletions are complete
          }
        },
        error: (err) => console.error('Failed to delete item:', itemId, err)
      });
    });
  }
  
  
  

}
