# Math Genius 🧠

**Math Genius** — веб-игра с математическими головоломками, разработанная с использованием **Next.js**.

Игроку необходимо находить закономерности в числовых последовательностях и выбирать правильный ответ. Проект сочетает игровую механику с современным веб-сайтом, SEO-оптимизацией и адаптивным дизайном.

## 🌐 Live Demo

**Website:** https://mathpuzzle.fun/

## 📸 Preview

<img width="1449" height="919" alt="Снимок экрана от 2026-08-31 12-14-58" src="https://github.com/user-attachments/assets/17c62554-1fba-4c2b-9855-5e45da36c137" />

https://github.com/user-attachments/assets/0daf355f-cdd5-4b00-9ddd-042520c63726

https://github.com/user-attachments/assets/fe830755-3db5-4aa3-95ba-854b22ec6e59

## ✨ Features

* 🧩 Математические головоломки
* 🔢 Числовые последовательности
* 🎮 Интерактивный игровой процесс
* 📱 Адаптивный дизайн для смартфонов и планшетов
* 🖥️ Desktop-версия
* ⚡ Быстрая загрузка благодаря Next.js
* 🔍 SEO-оптимизация
* 📊 Интеграция веб-аналитики
* 🌐 Отдельная страница для игры
* 📱 Возможность играть непосредственно в браузере

## 🎮 Game

Игровая часть проекта создана в **Construct** и интегрирована в Next.js через iframe. Next.js отвечает за сайт и его страницы, а Construct — за игровую механику.

## 🛠 Technologies

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn
* RemixIcon

### Game

* Construct

### Analytics & SEO

* Google Analytics
* Google Search Console
* Sitemap
* Open Graph
* JSON-LD / structured data

### Deployment

* Vercel

## 🔍 SEO

Проект оптимизирован для поисковых систем.

Используются:

* title и meta description;
* canonical URL;
* Open Graph;
* favicon и web icons;
* sitemap.xml;
* robots.txt;
* структурированные данные;
* адаптивная версия сайта.

## 📊 Analytics

Для анализа посещаемости сайта используется **Google Analytics**.

Аналитика позволяет отслеживать:

* количество посетителей;
* новых пользователей;
* источники трафика;
* посещение страниц;
* взаимодействие пользователей с сайтом.

## 🚀 Getting Started

Клонируйте репозиторий:

```bash
git clone <repository-url>
```

Перейдите в директорию проекта:

```bash
cd mathpuzzle
```

Установите зависимости:

```bash
npm install
```

Запустите development-сервер:

```bash
npm run dev
```

Откройте:

```text
http://localhost:3000
```

## 📦 Production Build

Создание production-сборки:

```bash
npm run build
```

Запуск:

```bash
npm start
```

## 📁 Project Structure

Примерная структура проекта:

```text
mathpuzzle/
├── app/
│   ├── play/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Header/
│   └── Footer/
│
├── public/
│   ├── math/
│   │   └── index.html
│   ├── og-image.png
│   ├── favicon.ico
│   └── ...
│
├── package.json
├── next.config.*
├── tailwind.config.*
└── README.md
```

Фактическая структура может отличаться в зависимости от версии проекта.

## 💡 Project Concept

Основная идея проекта — превратить математические задачи на поиск закономерностей в короткую и доступную браузерную игру.

Игрок видит последовательность чисел:

```text
2 → 4 → 8 → 16 → ?
```

и должен определить закономерность и найти следующее число.

Сложность головоломок увеличивается по мере прохождения игры.

## 👨‍💻 Author

Developed with **Next.js, TypeScript, Tailwind CSS and Construct**.

---
