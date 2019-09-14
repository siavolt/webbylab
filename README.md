1. Зайти в директорию проекта
2. Подтянуть зависимости командой **npm i**

Для запуска сервера выполнить команду **npm start**  
Для запуска в дебаг режиме - **npm test**  
Порт: 3000  

---API---
- url: /api/movie/  
method: GET  
Возвращает список всех фильмов либо ищет по названию фильма и/или имени актера (параметры поиска передавать в url в таком формате: ?title=Casablanca&stars=Paul Newman)

- url: /api/movie/:id  
method: GET  
Ищет фильм по переданному id  

- url: /api/movie/:id  
method: POST  
data: title, releaseYear, format, stars  
Добавляет новый фильм в базу.  

- url: /api/movie/:id  
method: DELETE  
Удаляет фильм по id  

