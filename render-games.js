javascript
function createGameCard(game) {
    return `
        <div class="game-card" onclick="window.location.href='${game.gameUrl}'">
            <h3>${game.title}</h3>
            <div class="game-images">
                <div>
                    <strong>Автор</strong>
                    <img src="${game.authorImage}" alt="${game.author}">
                </div>
                <div>
                    <strong>Скриншот</strong>
                    <img src="${game.screenshot}" alt="${game.title}">
                </div>
            </div>
            <p>Нажмите чтобы играть!</p>
        </div>
    `;
}

function renderGames() {
    const container = document.getElementById('games-container');
    container.innerHTML = games.map(createGameCard).join('');
}

// Запускаем когда страница загрузится
document.addEventListener('DOMContentLoaded', renderGames);
