export interface Book {
  id: string;
  title: string;
  categories?: string[];
  image?: string;
  averageRating?: number;
}

export interface BookDetail {
  id: string;
  title: string;
  authors?: string[];
  categories?: string[];
  publishedDate?: string;
  description?: string;
  pageCount?: number;
  language?: string;
  image?: string;
  averageRating?: number;
  ratingsCount?: number;
}
