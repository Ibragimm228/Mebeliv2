# Мебельщик Тверь - Веб-сайт

Корпоративный сайт для мебельной компании "Мебельщик Тверь". Разработан с использованием Next.js, TypeScript и TailwindCSS.

## Технологический стек

- Next.js 15.2.4
- React 19
- TypeScript
- TailwindCSS
- Radix UI компоненты
- Shadcn/ui

## Требования для развертывания

- Node.js 18+ 
- Nginx
- PM2 (для управления процессами Node.js)
- Certbot (для SSL сертификатов)

## Установка и настройка

### 1. Подготовка сервера

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка необходимых пакетов
sudo apt install nginx certbot python3-certbot-nginx -y

# Установка Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs -y

# Установка PM2 глобально
sudo npm install -g pm2
```

### 2. Клонирование и установка проекта

```bash
# Создание директории для проекта
sudo mkdir -p /var/www/mebelhik.ru
sudo chown -R $USER:$USER /var/www/mebelhik.ru

# Клонирование репозитория
git clone [URL репозитория] /var/www/mebelhik.ru
cd /var/www/mebelhik.ru

# Установка зависимостей
npm install

# Сборка проекта
npm run build
```

### 3. Настройка Nginx

```bash
# Копирование конфигурации Nginx
sudo cp nginx.conf /etc/nginx/nginx.conf

# Проверка конфигурации
sudo nginx -t

# Получение SSL сертификата
sudo certbot certonly --nginx -d mebelhik.ru -d www.mebelhik.ru

# Перезапуск Nginx
sudo systemctl restart nginx
```

### 4. Настройка PM2

Создайте файл конфигурации PM2 (`ecosystem.config.js`):

```javascript
module.exports = {
  apps: [{
    name: 'mebelhik',
    script: 'yarn',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

Запустите приложение через PM2:

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## Структура проекта

```
├── app/                  # Основные страницы приложения
├── components/          # React компоненты
├── public/             # Статические файлы
└── styles/            # CSS стили
```

## Основные команды

```bash
# Разработка
npm run dev

# Сборка
npm run build

# Запуск production версии
npm start

# Проверка линтером
npm run lint
```

## Обновление сайта

Для обновления сайта выполните следующие команды:

```bash
cd /var/www/mebelhik.ru
git pull
npm install
npm run build
pm2 restart mebelhik
```

## SSL сертификаты

Сертификаты Let's Encrypt автоматически обновляются через certbot. Проверить статус можно командой:

```bash
sudo certbot certificates
```

## Мониторинг

Для мониторинга приложения используйте команды PM2:

```bash
# Статус приложения
pm2 status

# Логи
pm2 logs mebelhik

# Мониторинг ресурсов
pm2 monit
```

## Резервное копирование

Рекомендуется регулярно создавать резервные копии:

- База данных (если есть)
- Директория `/var/www/mebelhik.ru`
- Конфигурация Nginx
- SSL сертификаты (`/etc/letsencrypt`)

## Контакты

По вопросам поддержки и развертывания обращайтесь:
- Email: mebelshik69@mail.ru
- Телефон: +7 (915) 722-00-75

## Лицензия

Все права защищены © Мебельщик Тверь 