# 🔄 Symbols-iterators

Проект для изучения и демонстрации работы с **Symbols** и **итераторами** в JavaScript.

## 🎯 Цель проекта

Показать примеры использования встроенных символов (`Symbol.iterator`, `Symbol.toStringTag` и др.) и создания пользовательских итераторов для работы с коллекциями данных.

## 🛠 Технологический стек

- **JavaScript (ES6+)** — язык программирования
- **Webpack** — сборщик модулей
- **Babel** — транспиляция современного JS
- **Jest** — тестирование (в `__tests__`)
- **HTML/CSS** — базовая разметка и стили

## 🚀 Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/your-username/symbols-iterators.git

# Перейти в папку проекта
cd symbols-iterators

# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev

# Собрать для продакшена
npm run build

# Запустить тесты
npm test
```

## 📝 Примеры использования

```javascript
// Пример пользовательского итератора
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

// Использование
for (const num of new Range(1, 5)) {
  console.log(num); // 1, 2, 3, 4, 5
}
```

## 📁 Структура проекта

```
symbols-iterators/
├── babel.config.json          # Конфигурация Babel
├── package.json               # Зависимости и скрипты
├── package-lock.json          # Lock-файл зависимостей
├── webpack.config.js          # Конфигурация Webpack
└── src/
    ├── index.html             # Главная HTML-страница
    ├── index.js               # Точка входа JS
    ├── css/
    │   └── style.css          # Стили
    └── js/
        ├── iterator.js        # Примеры итераторов и Symbols
        └── __tests__/         # Тесты (Jest)
```

## 📄 Лицензия

MIT