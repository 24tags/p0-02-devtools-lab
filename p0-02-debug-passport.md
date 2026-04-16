# P0-02 Debug Passport

## Terminal
- Папка проекта: p0-02-devtools-lab
- Какие команды использовал: mkdir - создать папку, cd - перейти в папку, ni - создать файл.

## Elements
- Селектор заголовка: селектор по тегу заголовка - h1 или селектор по классу - .profile-card__title
- Селектор кнопки: селектор по тегу - button или селектор по классу - .button
- Какой элемент центрирует layout: элемент: <main class="page"> через display: grid и place-items: center. place-items выравнивает элементы сразу по двум направлениям.

## Styles / Computed
- Откуда берется синий фон кнопки: свойство background: #2563eb; у .button
- Какой padding у карточки: padding: 24px; со всех 4 сторон.
- Какая итоговая ширина карточки: width: 420px на вкладке Computed.
Итоговая ширина карточки на моем экране была 420px; максимум у нее 420px, но на узком экране будет меньше. Потому что в lab у карточки была логика min(100%, 420px), а не просто фиксированные 420px.

## Console
- Ошибка 1: app.js:3 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
- В какой строке: 3
- Как исправил: указал правильный элемент для поиска на странице вместо wrong указал cta

- Ошибка 2: app.js:4 Uncaught ReferenceError: userName is not defined
- В какой строке: 4
- Как исправил: объявили переменную const userName = 'frontend learner';

## Network
- index.html:
Status: 304
Type: document
Size: 0.2 kB
Time: 12 ms
- styles.css:
Status: 304
Type: stylesheet
Size: 0.2 kB
Time: 12 ms
- app.js:
Status: 304
Type: script
Size: 0.2 kB
Time: 16 ms

## Вывод
- Для чего нужен Elements: видеть HTML-элементы страницы, их структуру, вложенность и быстро находить нужный элемент для проверки и отладки.
- Для чего нужен Console: видеть ошибки JavaScript, сообщения и результаты отладки кода.
- Для чего нужен Network: видеть сетевые запросы: какие файлы и данные загружаются, с каким статусом, размером и временем.