const games = [
    {
        title: "Вертолётик",
        description: "Стреляйте в вражеские корабли!",
        gameUrl: "games/test-game/helicopter.html"
    }
];

// Функция создания карточки
function createGameCard(game) {
    console.log('Создаем карточку для:', game.title); // для отладки
    return `
        <div class="game-card" onclick="window.location.href='${game.gameUrl}'">
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <p><strong>Нажмите чтобы играть!</strong></p>
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
