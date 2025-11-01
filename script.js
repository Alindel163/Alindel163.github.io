javascript
// Данные об играх
const games = [
    {
        title: "Вертолётик",
        description: "Стреляйте в вражеские корабли!",
        gameUrl: "games/test-game/helicopter.html"
    }
];

// Функция создания карточки
function createGameCard(game) {
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
    const container = document.getElementById('games-container');
    container.innerHTML = games.map(createGameCard).join('');
}

// Запускаем когда страница загрузится
document.addEventListener('DOMContentLoaded', function() {
    renderGames();
    console.log('Игры загружены! Количество:', games.length);
});
