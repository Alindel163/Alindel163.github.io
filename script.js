const games = [
    {
        title: "Вертолётик. Шаблон для творческих проектов №1",
        description: "Стреляйте в вражеские вертолёты!",
        control: "<br>перемещение: стрелки, <br>стрельба: кнопка мыши, <br>прицеливание: двигайте мышь<br>",
        gameUrl: "games/test-game/helicopter.html",
        image: "games/test-game/logo-helicopter.jpg",
        author: "Александров П.В. преподаватель центра"
    }
];

// Функция создания карточки
function createGameCard(game) {
    console.log('Создаем карточку для:', game.title); // для отладки
    return `
        <div class="game-card" onclick="window.location.href='${game.gameUrl}'">
            <img src="${game.image}" alt="${game.title}" class="game-image">
            <div class="game-content">
                <h3>${game.title}</h3>
                <h3>${game.control}</h3>
                <p>${game.description}</p>
                <p>${game.author}</p>
                <p><strong>Нажмите чтобы играть!</strong></p>
            </div>
        </div>
    `;
}

// Функция отрисовки всех карточек
function renderGames() {
    console.log('Начинаем рендер...'); // для отладки
    const container = document.getElementById('games-container');
    
    if (!container) {
        console.error('Не найден контейнер games-container!');
        return;
    }
    
    console.log('Контейнер найден, игр:', games.length);
    container.innerHTML = games.map(createGameCard).join('');
    console.log('Рендер завершен!');
}

// Запускаем когда страница загрузится
console.log('Скрипт загружен!'); // для отладки
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен!');
    renderGames();
});
