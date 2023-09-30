export interface User {
  id: string;
  name: string;
  role: string;
  adverts: Advert[];
  registeredTime: string;
}

export interface Advert {
  id: string;
  name: string;
  location: string;
  createdAt: string;
  isActive: boolean;
  imagesIds: string[];
  cost: number;
}
