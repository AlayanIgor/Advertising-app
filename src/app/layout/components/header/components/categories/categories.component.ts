import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories = [
    {
      title: 'Транспорт',
      childrens: [
        {
          label: 'Автомобили',
        },
        {
          label: 'Мотоциклы и мототехника',
          childrens: [
            { label: 'Вездеходы' },
            { label: 'Картинг' },
            { label: 'Квадроциклы и багги' },
            { label: 'Мопеды и скутеры' },
            { label: 'Мотоциклы' },
            { label: 'Снегоходы' },
          ],
        },
        {
          label: 'Грузовики и спецтехника',
          childrens: [
            { label: 'Автобусы' },
            { label: 'Автодома' },
            { label: 'Автокраны' },
            { label: 'Бульдозеры' },
            { label: 'Грузовики' },
            { label: 'Коммунальная техника' },
            { label: 'Легкий коммерческий транспорт' },
            { label: 'Навесное оборудование' },
            { label: 'Погрузчики' },
            { label: 'Прицепы' },
            { label: 'Сельхозтехника' },
            { label: 'Строительная техника' },
            { label: 'Техника для лесозаготовки' },
            { label: 'Тягачи' },
            { label: 'Экскаваторы' },
            { label: 'Другое' },
          ],
        },
        {
          label: 'Водный транспорт',
          childrens: [
            { label: 'Вёсельные лодки' },
            { label: 'Гидроциклы' },
            { label: 'Катера и яхты' },
            { label: 'Моторные лодки и моторы' },
          ],
        },
        {
          label: 'Мотоциклы и мототехника',
          childrens: [
            { label: 'Запчасти' },
            { label: 'Шины, диски колеса' },
            { label: 'Аудио- и видеотехника' },
            { label: 'Аксессуары' },
            { label: 'Тюнинг' },
            { label: 'Багажники и фаркопы' },
            { label: 'Инструменты' },
            { label: 'Прицепы' },
            { label: 'Экипировка' },
            { label: 'Масла и автохимия' },
            { label: 'Противоугонные устройства' },
            { label: 'GPS-навигаторы' },
          ],
        },
      ],
    },
    {
      title: 'Недвижимость',
      childrens: [
        {
          label: 'Автомобили',
        },
        {
          label: 'Мотоциклы и мототехника',
          childrens: [
            { label: 'Вездеходы' },
            { label: 'Картинг' },
            { label: 'Квадроциклы и багги' },
            { label: 'Мопеды и скутеры' },
            { label: 'Мотоциклы' },
            { label: 'Снегоходы' },
          ],
        },
        {
          label: 'Грузовики и спецтехника',
          childrens: [
            { label: 'Автобусы' },
            { label: 'Автодома' },
            { label: 'Автокраны' },
            { label: 'Бульдозеры' },
            { label: 'Грузовики' },
            { label: 'Коммунальная техника' },
            { label: 'Легкий коммерческий транспорт' },
            { label: 'Навесное оборудование' },
            { label: 'Погрузчики' },
            { label: 'Прицепы' },
            { label: 'Сельхозтехника' },
            { label: 'Строительная техника' },
            { label: 'Техника для лесозаготовки' },
            { label: 'Тягачи' },
            { label: 'Экскаваторы' },
            { label: 'Другое' },
          ],
        },
        {
          label: 'Водный транспорт',
          childrens: [
            { label: 'Вёсельные лодки' },
            { label: 'Гидроциклы' },
            { label: 'Катера и яхты' },
            { label: 'Моторные лодки и моторы' },
          ],
        },
        {
          label: 'Мотоциклы и мототехника',
          childrens: [
            { label: 'Запчасти' },
            { label: 'Шины, диски колеса' },
            { label: 'Аудио- и видеотехника' },
            { label: 'Аксессуары' },
            { label: 'Тюнинг' },
            { label: 'Багажники и фаркопы' },
            { label: 'Инструменты' },
            { label: 'Прицепы' },
            { label: 'Экипировка' },
            { label: 'Масла и автохимия' },
            { label: 'Противоугонные устройства' },
            { label: 'GPS-навигаторы' },
          ],
        },
      ],
    },
    {
      title: 'Работа',
      childrens: [
        {
          label: 'Автомобили',
        },
        {
          label: 'Мотоциклы и мототехника',
          childrens: [
            { label: 'Вездеходы' },
            { label: 'Картинг' },
            { label: 'Квадроциклы и багги' },
            { label: 'Мопеды и скутеры' },
            { label: 'Мотоциклы' },
            { label: 'Снегоходы' },
          ],
        },
        {
          label: 'Грузовики и спецтехника',
          childrens: [
            { label: 'Автобусы' },
            { label: 'Автодома' },
            { label: 'Автокраны' },
            { label: 'Бульдозеры' },
            { label: 'Грузовики' },
            { label: 'Коммунальная техника' },
            { label: 'Легкий коммерческий транспорт' },
            { label: 'Навесное оборудование' },
            { label: 'Погрузчики' },
            { label: 'Прицепы' },
            { label: 'Сельхозтехника' },
            { label: 'Строительная техника' },
            { label: 'Техника для лесозаготовки' },
            { label: 'Тягачи' },
            { label: 'Экскаваторы' },
            { label: 'Другое' },
          ],
        },
        {
          label: 'Водный транспорт',
          childrens: [
            { label: 'Вёсельные лодки' },
            { label: 'Гидроциклы' },
            { label: 'Катера и яхты' },
            { label: 'Моторные лодки и моторы' },
          ],
        },
        {
          label: 'Мотоциклы и мототехника',
          childrens: [
            { label: 'Запчасти' },
            { label: 'Шины, диски колеса' },
            { label: 'Аудио- и видеотехника' },
            { label: 'Аксессуары' },
            { label: 'Тюнинг' },
            { label: 'Багажники и фаркопы' },
            { label: 'Инструменты' },
            { label: 'Прицепы' },
            { label: 'Экипировка' },
            { label: 'Масла и автохимия' },
            { label: 'Противоугонные устройства' },
            { label: 'GPS-навигаторы' },
          ],
        },
      ],
    },
  ];

  selectedCategory!: string;

  selectedChildCategory!: string;

  currentCategory: any = this.categories[0];

  selectCategory(category: any) {
    this.selectedCategory = category.title;
    this.currentCategory = category;
  }
}
