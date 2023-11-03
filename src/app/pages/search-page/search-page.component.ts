import { AfterViewInit, Component, DoCheck } from '@angular/core';
import { AdvertService } from 'src/app/core/services/advert-service/advert.service';
import { Advert } from 'src/app/core/services/advert-service/interfaces/advert.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements AfterViewInit, DoCheck {
  ads: Advert[] = [];
  searchValue: string = this._advertService.searchValue;
  numberOfAdverts!: number;
  nothingFinded = 1;

  constructor(private _advertService: AdvertService) {}

  ngAfterViewInit(): void {
    this._advertService.searchAdverts$.subscribe((adverts: any) => {
      this.ads = adverts;
      this.ads.sort(function (a, b) {
        return Date.parse(a.createdAt) - Date.parse(b.createdAt);
      });
      this.numberOfAdverts = adverts.length;
      this.nothingFinded = adverts.length;
    });

    this._advertService.valueOfSearch$.subscribe((value: any) => {
      this.searchValue = value;
    });
  }

  ngDoCheck(): void {
    if (!this.ads.length) {
    }
    this._advertService.searchAdverts$.subscribe((adverts: any) => {
      this.ads = adverts;
      this.numberOfAdverts = adverts.length;
      this.nothingFinded = adverts.length;
    });
  }

  allCategories = [
    {
      title: 'Животныe',
      hide: true,
      childrens: [
        { label: 'Товары для животных' },
        { label: 'Птицы' },
        { label: 'Аквариум' },
      ],
    },
    {
      title: 'Хобби и отдых',
      hide: true,
      childrens: [
        { label: 'Коллекционирование' },
        { label: 'Книги и журналы' },
        { label: 'Спорт и отдых' },
      ],
    },
    {
      title: 'Для дома и дачи',
      hide: true,
      childrens: [
        { label: 'Мебель и интерьер' },
        { label: 'Посуда и товары для кухни' },
        { label: 'Растения' },
      ],
    },
    {
      title: 'Личные вещи',
      hide: true,
      childrens: [
        { label: 'Товары для детей и игрушки' },
        { label: 'Детская одежда и обувь' },
        { label: 'Одежда,обувь,аксессуары' },
        { label: 'Часы и украшения' },
        { label: 'Красота и здоровье' },
      ],
    },
    {
      title: 'Услуги',
      hide: true,
      childrens: [
        { label: 'Уход за животными' },
        { label: 'Праздники, мероприятия' },
        { label: 'Красота,здоровье' },
      ],
    },
    {
      title: 'Недвижимость',
      hide: true,
      childrens: [
        { label: 'Купить жилье' },
        { label: 'Снять посуточно' },
        { label: 'Снять долгосрочно' },
      ],
    },
    {
      title: 'Электроника',
      hide: true,
      childrens: [
        { label: 'Аудио и видео' },
        { label: 'Игры, приставки и программы' },
        { label: 'Товары для компьютера' },
      ],
    },
  ];

  choosedCategory!: string;
  selectedCategory(selectedCategory: string) {
    this.choosedCategory = selectedCategory;
  }

  sortingAdverts(sortedBy: string) {
    if (sortedBy === 'Новизне') {
      this.ads.sort(function (a, b) {
        return Date.parse(a.createdAt) - Date.parse(b.createdAt);
      });
    }
    if (sortedBy === 'Дешевле') {
      this.ads.sort(function (a, b) {
        return a.cost - b.cost;
      });
    }
    if (sortedBy === 'Дороже') {
      this.ads.sort(function (a, b) {
        return b.cost - a.cost;
      });
    }
  }
}
