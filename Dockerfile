# Используем Node.js для запуска Angular
FROM node:18

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json в контейнер
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование всех файлов приложения
COPY . .

# Открытие порта 4200
EXPOSE 4200

# Запуск Angular приложения в режиме разработки
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
