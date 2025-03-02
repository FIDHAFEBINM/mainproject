import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-displayreview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './displayreview.component.html',
  styleUrl: './displayreview.component.css'
})
export class DisplayreviewComponent {
  reviews = [
    { name: 'John Doe', rating: 4.5, comment: 'Great course! Very helpful.' },
    { name: 'Jane Smith', rating: 3, comment: 'Good, but could be better.' },
    { name: 'Mike Johnson', rating: 5, comment: 'Absolutely loved it!' },
    { name: 'John Doe', rating: 4.5, comment: 'Great course! Very helpful.' },
    { name: 'Jane Smith', rating: 3, comment: 'Good, but could be better.' },
    { name: 'Mike Johnson', rating: 5, comment: 'Absolutely loved it!' }
  ];

  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.ceil(rating)).fill(0);
  }
}

