import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcategoryadmin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addcategoryadmin.component.html',
  styleUrl: './addcategoryadmin.component.css'
})
export class AddcategoryadminComponent {
  categories: { name: string, subcategories: string[] }[] = [];
  newCategory = '';
  selectedCategory = '';
  newSubcategory = '';

  addCategory() {
    if (this.newCategory.trim()) {
      this.categories.push({ name: this.newCategory, subcategories: [] });
      this.newCategory = '';  // Clear input
    }
  }

  addSubcategory() {
    if (this.selectedCategory && this.newSubcategory.trim()) {
      const category = this.categories.find(cat => cat.name === this.selectedCategory);
      if (category) {
        category.subcategories.push(this.newSubcategory);
        this.newSubcategory = '';  // Clear input
      }
    }
  }
}
