export interface CurrentAdvert {
  id: string;
  user: User;
  name: string;
  description: string;
  isActive: boolean;
  imagesIds: string[];
  cost: number;
  email: any;
  phone: string;
  location: string;
  created: string;
  category: Category;
}

export interface User {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  parentId: string;
  name: string;
}
