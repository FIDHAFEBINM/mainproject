import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  subjects = [
    { name: 'Business', count: 2303 },
    { name: 'Computer Science', count: 1525 },
    { name: 'Data Science', count: 1064 },
    { name: 'Information Technology', count: 825 }
  ];

  additionalSubjects = [
    { name: 'Marketing', count: 456 },
    { name: 'Finance', count: 789 },
    { name: 'Artificial Intelligence', count: 123 },
    { name: 'Cybersecurity', count: 320 }
  ];

  languages = [
    { name: 'English', count: 7119 },
    { name: 'Spanish', count: 5556 },
    { name: 'French', count: 5546 },
    { name: 'Portuguese (Brazil)', count: 5221 }
  ];

  additionalLanguages = [
    { name: 'German', count: 4200 },
    { name: 'Chinese', count: 3800 },
    { name: 'Japanese', count: 2700 },
    { name: 'Korean', count: 1500 }
  ];

  displayedSubjects = this.subjects.slice(0, 4);
  displayedLanguages = this.languages.slice(0, 4);

  showAllSubjects = false;
  showAllLanguages = false;

  toggleShowMore(category: string) {
    if (category === 'subject') {
      if (!this.showAllSubjects) {
        // Add additional subjects
        this.displayedSubjects = [...this.subjects, ...this.additionalSubjects];
      } else {
        // Collapse back to original list
        this.displayedSubjects = this.subjects.slice(0, 4);
      }
      this.showAllSubjects = !this.showAllSubjects;
    } else if (category === 'language') {
      if (!this.showAllLanguages) {
        // Add additional languages
        this.displayedLanguages = [...this.languages, ...this.additionalLanguages];
      } else {
        // Collapse back to original list
        this.displayedLanguages = this.languages.slice(0, 4);
      }
      this.showAllLanguages = !this.showAllLanguages;
    }
  }

  onFilterChange(category: string, item: any) {
    console.log(`Filter changed for ${category}:`, item);
  }
}
