import { Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  ads = [1, 2, 3, 4, 5, 6, 7, 8];

  allCategories = [
    {
      title: 'Животные',
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
    console.log(this.choosedCategory);
  }
}
