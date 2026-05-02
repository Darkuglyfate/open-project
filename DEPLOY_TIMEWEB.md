# Деплой ARTALYANS на Timeweb Node.js hosting

Проект подготовлен для запуска как обычное Next.js-приложение вне Vercel.

## Требования

- Node.js 20+ или 22+
- npm
- Домен `artalyans.com`, направленный на хостинг Timeweb

## Команды запуска

```bash
npm install
npm run build
npm run start
```

`npm run start` запускает production-сервер Next.js через `server.js`.

## Настройки в Timeweb

1. Создайте Node.js-приложение в панели Timeweb.
2. Загрузите файлы проекта в директорию приложения.
3. Укажите команду установки:

```bash
npm install
```

4. Укажите команду сборки:

```bash
npm run build
```

5. Укажите команду запуска:

```bash
npm run start
```

6. Если Timeweb просит порт, используйте переменную окружения `PORT`, которую выдаёт хостинг. `server.js` читает её автоматически.

## Проверка после запуска

Откройте:

- `https://artalyans.com/`
- `https://artalyans.com/robots.txt`
- `https://artalyans.com/sitemap.xml`

В исходном коде страницы должны остаться:

- meta `yandex-verification`
- Яндекс Метрика `mc.yandex.ru` / `ym(108978468, ...)`
- SEO meta, canonical, Open Graph и JSON-LD

## Важно

- Vercel-специфичных функций в проекте нет.
- Изображения используются локально из `public/images` и `public/images/assets`.
- `robots.txt` и `sitemap.xml` лежат в `public` и отдаются Next.js как статические файлы.
