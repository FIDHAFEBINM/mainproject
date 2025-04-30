import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-addcategoryadmin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addcategoryadmin.component.html',
  styleUrl: './addcategoryadmin.component.css'
})
export class AddcategoryadminComponent implements OnInit{
  categories:any = [];
  newCategory = '';
  selectedCategory = '';
  newSubcategory = '';
  category:any=[]
  subcategory:any=[]
  subcategories:any = []; // Store subcategories for each category
  editingCategoryId: string | null = null; 
  editingSubcategoryId: string | null = null; // Track the subcategory being edited



  constructor(private mainserve:MainService){}

  ngOnInit(): void {
    this.loadcategory(); // Load categories on component initialization
    // this.loadSubcategories()
    this.loadsubcategory()
  }
  addCategory() {
    if (this.newCategory.trim()) {
      const categoryName = { categoryName: this.newCategory }; // Prepare the data to send to the backend
  
      this.mainserve.addcategory(categoryName).subscribe(
        (res: any) => {
          alert('Category added successfully!');
          this.loadcategory(); // Reload categories after adding
          this.newCategory = ''; // Clear input
        },
        (error: any) => {
          console.error('Error adding category:', error);
          alert('Failed to add category. Please try again.');
        }
      );
    } else {
      alert('Category name cannot be empty.');
    }
  }

  editCategory(categoryId: string): void {
    this.editingCategoryId = categoryId;
  }

  cancelEdit(): void {
    this.editingCategoryId = null;
    this.loadcategory(); // Reload categories to reset changes
  }

  updateCategory(category: any): void {
    const updatedCategory = { categoryName: category.categoryName };

    this.mainserve.updatecategory(updatedCategory,category._id).subscribe(
      (res: any) => {
        alert('Category updated successfully!');
        this.editingCategoryId = null; // Exit edit mode
        this.loadcategory(); // Reload categories to reflect changes
      },
      (error: any) => {
        console.error('Error updating category:', error);
        alert('Failed to update category. Please try again.');
      }
    );
  }

  deleteCategory(categoryId: string): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.mainserve.deletecategory(categoryId).subscribe(
        (res: any) => {
          alert('Category deleted successfully!');
          this.loadcategory(); // Reload categories after deletion
        },
        (error: any) => {
          console.error('Error deleting category:', error);
          alert('Failed to delete category. Please try again.');
        }
      );
    }
  }



  editSubcategory(subcategoryId: string): void {
    this.editingSubcategoryId = subcategoryId;
  }

  // Cancel Edit Subcategory
  cancelEditSubcategory(): void {
    this.editingSubcategoryId = null;
    this.loadsubcategory(); // Reload subcategories to reset changes
  }

  updateSubcategory(subcategory: any): void {
    const updatedSubcategory = { subcategory: subcategory.subcategory };

    this.mainserve.updatesubcategory(updatedSubcategory, subcategory._id).subscribe(
      (res: any) => {
        alert('Subcategory updated successfully!');
        this.editingSubcategoryId = null; // Exit edit mode
        this.loadsubcategory(); // Reload subcategories to reflect changes
      },
      (error: any) => {
        console.error('Error updating subcategory:', error);
        alert('Failed to update subcategory. Please try again.');
      }
    );
  }

  deleteSubcategory(subcategoryId: string): void {
    if (confirm('Are you sure you want to delete this subcategory?')) {
      this.mainserve.deletesubcategory(subcategoryId).subscribe(
        (res: any) => {
          alert('Subcategory deleted successfully!');
          this.loadsubcategory(); // Reload subcategories after deletion
        },
        (error: any) => {
          console.error('Error deleting subcategory:', error);
          alert('Failed to delete subcategory. Please try again.');
        }
      );
    }
  }




    
  // loadSubcategories(id:string): void {
  //   this.mainserve.viewsubcategory(id).subscribe(
  //     (res: any) => {
  //       console.log('Subcategories API Response:', res); // Debugging log
  //       this.subcategory = res; // Assign the response to the subcategories array
  //     },
  //     (error: any) => {
  //       console.error('Error fetching subcategories:', error);
  //       alert('Failed to load subcategories.');
  //     }
  //   );
  // }


  loadsubcategory() {
    this.mainserve.viewcategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.subcategories = {}; // Reset
  
        // Load subcategories for each category
        this.categories.forEach((cat: any) => {
          this.mainserve.viewsubcategory(cat._id).subscribe(
            (subRes: any) => {
              this.subcategories[cat._id] = subRes;
            },
            (error: any) => {
              console.error(`Error loading subcategories for ${cat._id}:`, error);
            }
          );
        });
      },
      (error: any) => {
        console.error('Error loading categories:', error);
        alert('Failed to load categories.');
      }
    );
  }
  
  

loadcategory() {
  this.mainserve.viewcategories().subscribe(
    (res: any) => {
      console.log('Categories API Response:', res); // Debugging log
      this.categories = res; // Assign the response to the categories array
    },
    (error: any) => {
      console.error('Error loading categories:', error);
      alert('Failed to load categories.');
    }
  );
}

addSubcategory() {
  if (this.selectedCategory.trim() && this.newSubcategory.trim()) {
    const subcategoryData = {
      category: this.selectedCategory, // Ensure this is the category ID
      subcategory: this.newSubcategory // Ensure this is the subcategory name
    };

    this.mainserve.addsubcategory(subcategoryData).subscribe(
      (res: any) => {
        alert('Subcategory added successfully!');
        this.loadcategory(); // Reload categories after adding the subcategory
        this.newSubcategory = ''; // Clear input
      },
      (error: any) => {
        console.error('Error adding subcategory:', error);
        alert('Failed to add subcategory. Please try again.');
      }
    );
    this.loadsubcategory()
  } else {
    alert('Please select a category and enter a subcategory name.');
  }
}
}
