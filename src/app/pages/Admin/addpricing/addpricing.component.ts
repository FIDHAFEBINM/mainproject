import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-addpricing',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addpricing.component.html',
  styleUrl: './addpricing.component.css'
})
export class AddpricingComponent implements OnInit{
  price=''
  prices:any=[]

  constructor(private mainserve:MainService){}

  ngOnInit(): void {
      this.viewpricing()
  }

  onSubmit(){
    const pricing={price:this.price}
    this.mainserve.addprice(pricing).subscribe((res:any)=>{
      this.price=''
      alert("added succesfully")
      this.viewpricing()
    })
  }

  viewpricing(){
    this.mainserve.viewprice().subscribe((res:any)=>{
      console.log(res)
      this.prices = res.sort((a: any, b: any) => a.price - b.price);
    })
  }

  deletePricing(id: string): void {
    if (confirm('Are you sure you want to delete this price?')) {
      this.mainserve.deleteprice(id).subscribe(
        (res: any) => {
          alert('Price deleted successfully');
          this.viewpricing(); // Refresh the pricing list
        },
        (error: any) => {
          console.error('Error deleting price:', error);
          alert('Failed to delete price');
        }
      );
    }
  }

}
