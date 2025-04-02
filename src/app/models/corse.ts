export interface Course {
    id: string;
    topic: string;
    about: string;
    video: string;
    price: { price: number };
    subcategory: { subcategory: string };
    rating: number;
    learners: number;
    previewimage: string;
  }
  