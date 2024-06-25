export interface Photo {
  id: string;
  name: string;
  created: Date;
}

export interface Category {
  id: string;
  name: string;
  photos: string[];
}

export interface photosByCategory {
  categoryName: string;
  photoNames: string[];
}
