import { Injectable } from '@angular/core';
import { Category } from './inretfaces/category.interface';
import { CategoriesApiService } from './categories-api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories: Category[] = [
    {
      id: '30ee851a-5435-44a9-9ea9-3a9eae26b177',
      name: 'Транспорт',
    },
    {
      id: '48d5eac0-8989-4585-9e1d-f21b06518003',
      name: 'Работа',
    },
    {
      id: '69cb1740-3ba1-42f5-b998-da213c13693b',
      name: 'Для дома и дачи',
    },
    {
      id: '822658a6-2150-4015-93e2-b79911476caa',
      name: 'Услуги',
    },
    {
      id: '8609ef74-471a-4b84-b57d-977132b8caaf',
      name: 'Электроника',
    },
    {
      id: 'a8da0da9-82a5-47bd-a52b-627e2f2d34ac',
      name: 'Личные вещи',
    },
    {
      id: 'cd211521-2f2c-41cb-9214-1e5d1e484440',
      name: 'Хобби и отдых',
    },
    {
      id: 'e340ec63-b095-414e-b46e-5f23a635b949',
      name: 'Животные',
    },
    {
      id: 'e597d5d7-5ecd-4589-b66f-f92ddf2d4f23',
      name: 'Запчасти и аксессуары',
    },
    {
      id: 'eead3c69-dbc3-4159-82d2-556b40e7dd18',
      name: 'Бизнес и оборудование',
    },
    {
      id: 'f6d5fd33-d4f1-4744-8165-fa4a992c4b3d',
      name: 'Недвижимость',
    },
  ];

  constructor(private _categoriesApiService: CategoriesApiService) {}

  getCategoryById(id: string) {
    return this._categoriesApiService.getCategoryById(id);
  }
}
