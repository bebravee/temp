# Ветеринарная компания

Приложение для управления ветеринарной клиникой, разработанное с использованием React.js с использованием SWC, TypeScript и Vite. В проекте для маршрутизации используется `@tanstack/router`.

## Содержание

- [Установка](#установка)
  - [Предварительные требования](#предварительные-требования)
  - [Установка](#установка)
- [Использование](#использование)
  - [Режим разработки](#режим-разработки)
  - [Сборка для продакшена](#сборка-для-продакшена)
- [Структура проекта](#структура-проекта)
- [Используемые технологии](#используемые-технологии)
- [Вклад](#вклад)
- [Лицензия](#лицензия)

## Установка

### Предварительные требования

- Node.js версии 16.x или выше
- pnpm для управления пакетами

### Установка

1. Склонируйте репозиторий:

   ```bash
   git clone https://github.com/your-username/veterinary-company.git
   cd veterinary-company
   ```

2. Установите зависимости с помощью pnpm:
   ```bash
   pnpm install
   ```

## Использование

### Режим разработки

Для запуска приложения в режиме разработки выполните следующую команду:

```bash
pnpm dev
```

Приложение будет доступно по адресу `http://localhost:3000` с поддержкой live-перезагрузки.

### Сборка для продакшена

Для сборки приложения для продакшена выполните следующую команду:

```bash
pnpm build
```

Собранный проект будет доступен в папке `dist/`.

## Структура проекта

```
veterinary-company/
│
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── assets
│   │   ├── facebook.png
│   │   ├── icons
│   │   │   ├── arrow-black.svg
│   │   │   ├── arrow-right.svg
│   │   │   ├── check.svg
│   │   │   ├── chevron-down.svg
│   │   │   ├── edit.svg
│   │   │   ├── filter.svg
│   │   │   └── search.svg
│   │   ├── images
│   │   │   ├── assistant-1.png
│   │   │   ├── assistant-2.png
│   │   │   ├── assistant-3.png
│   │   │   ├── assistant-4.png
│   │   │   ├── assistant-5.png
│   │   │   ├── assistant-6.png
│   │   │   ├── dog-1.png
│   │   │   ├── google.png
│   │   │   ├── paw.png
│   │   │   ├── paws.png
│   │   │   ├── pet-care-categories
│   │   │   │   ├── cats.png
│   │   │   │   ├── dogs.png
│   │   │   │   ├── fishes.png
│   │   │   │   ├── hamsters.png
│   │   │   │   ├── other-pets.png
│   │   │   │   ├── parrots.png
│   │   │   │   └── pets.png
│   │   │   └── pet.png
│   │   ├── insta.png
│   │   ├── logo.png
│   │   ├── react.svg
│   │   └── tiktok.png
│   ├── components
│   │   ├── about
│   │   │   ├── AssistantCard.tsx
│   │   │   └── Search.tsx
│   │   ├── Button.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Footer.tsx
```
