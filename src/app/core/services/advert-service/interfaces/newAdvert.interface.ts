export interface NewAdvert {
  name: string;
  description?: string;
  images?: any[];
  cost: number;
  phone: string;
  location: string;
  categoryId: string;
}
