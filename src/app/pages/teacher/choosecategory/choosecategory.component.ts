// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { MainService } from '../../../service/main.service';

// @Component({
//   selector: 'app-choosecategory',
//   standalone: true,
//   imports: [FormsModule,CommonModule,ReactiveFormsModule],
//   templateUrl: './choosecategory.component.html',
//   styleUrl: './choosecategory.component.css'
// }) 
// export class ChoosecategoryComponent {
//   // categoryForm !: FormGroup;
  
//   categoryForm!: FormGroup;
//   subcategories: any[] = [];  // All subcategories
//   filteredSubcategories: any[] = []; // Subcategories filtered by category
//   categories: any[] = []; // Unique categories

//   selectedVideoFile: File | null = null;
//   selectedImageFile: File | null = null;
//   imagePreview: string | ArrayBuffer | null = null;

//   constructor(private fb: FormBuilder, private mainserve: MainService) {}

//   ngOnInit(): void {
//     // Initialize form
//     this.categoryForm = this.fb.group({
//       category: ['', Validators.required],
//       subcategory: ['', Validators.required],
//       topic: ['', Validators.required],
//       about: ['', Validators.required],
      
//     });

//     this.loadCategories();
//   }

//   // Fetch categories and subcategories
//   loadCategories() {
//     this.mainserve.viewcategory().subscribe((res: any) => {
//       this.subcategories = res.map((item: any) => ({
//         _id: item._id,                 // Subcategory ID
//         subcategory: item.subcategory, // Subcategory Name
//         category: item.category._id,   // Category ID
//         categoryName: item.category.categoryName // Category Name
//       }));

//       // Extract unique categories
//       this.categories = this.subcategories
//         .map((item) => ({ _id: item.category, categoryName: item.categoryName }))
//         .filter((value, index, self) => self.findIndex(cat => cat._id === value._id) === index);
//     });
//   }

//   // Filter subcategories based on selected category
//   onCategoryChange() {
//     const selectedCategoryId = this.categoryForm.value.category;
//     this.filteredSubcategories = this.subcategories.filter(
//       (sub) => sub.category === selectedCategoryId
//     );

//     // Reset subcategory selection if the category changes
//     this.categoryForm.patchValue({ subcategory: '' });
//   }

//   // Handle file selection
//   onFileChange(event: any) {
//     const file = event.target.files[0];
//     if (file) {
//       this.selectedVideoFile = file;
//     }
//   }

//   // Handle image selection
//   onImageChange(event: any) {
//     const file = event.target.files[0];
//     if (file) {
//       this.selectedImageFile = file;

//       // Preview image
//       const reader = new FileReader();
//       reader.onload = () => {
//         this.imagePreview = reader.result;
//       };
//       reader.readAsDataURL(file);
//     }
//   }

//   // Submit form
//   onSubmit() {
//     if (this.categoryForm.valid) {
//       const formData = new FormData();
//       formData.append('category', this.categoryForm.value.category);
//       formData.append('subcategory', this.categoryForm.value.subcategory);
//       formData.append('topic', this.categoryForm.value.topic);
//       formData.append('about', this.categoryForm.value.about);

//       if (this.selectedVideoFile) {
//         formData.append('video', this.selectedVideoFile);
//       }

//       if (this.selectedImageFile) {
//         formData.append('previewimage', this.selectedImageFile);
//       }

//       this.mainserve.addcourse(formData).subscribe((res: any) => {
//         alert("Added successfully!");
//       });
//     }
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-choosecategory',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './choosecategory.component.html',
  styleUrls: ['./choosecategory.component.css']
})
export class ChoosecategoryComponent implements OnInit {
  categoryForm!: FormGroup;
  selectedVideoFile: File | null = null;
  selectedImageFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  subcategories: any[] = [];
  filteredSubcategories: any[] = [];
  categories: any[] = [];
  id:string=''
  prices:any[]=[]
  constructor(private fb: FormBuilder, private mainserve: MainService) {}

  ngOnInit(): void {
    // Initialize form
    this.categoryForm = this.fb.group({
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      topic: ['', Validators.required],
      about: ['', Validators.required],
      price:['',Validators.required]
      // video: ['', Validators.required],
      // previewImage: ['', Validators.required]
    });
    this.id = localStorage.getItem('loginId') || '';
    this.loadCategories();
    this.loadprice()
  }

  loadprice(){
    this.mainserve.viewprice().subscribe((res:any)=>{
      this.prices=res
    })
  }

  // Fetch categories and subcategories
  loadCategories() {
    this.mainserve.viewcategory().subscribe((res: any) => {
      this.subcategories = res.map((item: any) => ({
        _id: item._id,                 // Subcategory ID
        subcategory: item.subcategory, // Subcategory Name
        category: item.category._id,   // Category ID
        categoryName: item.category.categoryName // Category Name
      }));

      // Extract unique categories
      this.categories = this.subcategories
        .map((item) => ({ _id: item.category, categoryName: item.categoryName }))
        .filter((value, index, self) => self.findIndex(cat => cat._id === value._id) === index);
    });
  }

  // Filter subcategories based on selected category
  onCategoryChange() {
    const selectedCategoryId = this.categoryForm.value.category;
    this.filteredSubcategories = this.subcategories.filter(
      (sub) => sub.category === selectedCategoryId
    );

    // Reset subcategory selection if the category changes
    this.categoryForm.patchValue({ subcategory: '' });
  }

  // Handle file selection
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedVideoFile = file;
    }
  }

  // Handle image selection
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImageFile = file;

      // Preview image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Submit form
  onSubmit() {
    if (this.categoryForm.valid) {
      const formData = new FormData();
      formData.append('category', this.categoryForm.value.category);
      formData.append('subcategory', this.categoryForm.value.subcategory);
      formData.append('topic', this.categoryForm.value.topic);
      formData.append('about', this.categoryForm.value.about);
      formData.append('price',this.categoryForm.value.price)

      if (this.selectedVideoFile) {
        formData.append('video', this.selectedVideoFile);
      }

      if (this.selectedImageFile) {
        formData.append('previewimage', this.selectedImageFile);
      }

      this.mainserve.addcourse(formData,this.id).subscribe((res: any) => {
        alert("Added successfully!");
      })
    }
  }
}

