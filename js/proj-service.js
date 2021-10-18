var gProjects = []

function createProject(id, name, title, desc, url, urlCode, labels, publishedAt = Date.now()) {
    return {
        id,
        name,
        title,
        desc,
        url,
        urlCode,
        publishedAt,
        labels,

    }
}
createProjects()
console.log(gProjects);

function createProjects() {
    gProjects.push(createProject('pacman', 'pacman', 'pacman Game', 'Try TO Win without be killed',
        'https://eligranat.github.io/Game-Mines-Weeper/', 'https://github.com/EliGranat/Game-Mines-Weeper', ['JavaScript 76.7%', 'CSS 14.4%', 'HTML 8.9%'], new Date('2021-09-07')))

    gProjects.push(createProject('Minesweeper', 'Minesweeper', 'Minesweeper Game', 'Try TO Win without be killed',
        'https://eligranat.github.io/Pacman_Game/', 'https://github.com/EliGranat/Pacman_Game', ['JavaScript 84.9%', 'CSS 11.3%', 'HTML 3.8%'], new Date('2021-09-03')))

    gProjects.push(createProject('TouchTheNumbers', 'TouchTheNumbers', 'Touch The Numbers Game', 'catch the num the faster you cen',
        'https://eligranat.github.io/Board_Touch_Nums/', 'https://github.com/EliGranat/Board_Touch_Nums', ['JavaScript 46.9%', 'CSS 37.2%', 'HTML 15.9%'], new Date('2021-09-03')))

    gProjects.push(createProject('book-shop', 'Book Shop', ' the best books', 'My shop to buy books',
        'https://eligranat.github.io/myBookShop/', 'https://github.com/EliGranat/myBookShop', ['JavaScript 47.2%', 'CSS 36.8%', 'HTML 16.0%'], new Date('2021-09-03')))

    gProjects.push(createProject('Ball_Game', 'Ball  Game', ' Ball_Game', 'catch the food the faster you cen without be killed',
        'https://eligranat.github.io/Ball_Game/', 'https://github.com/EliGranat/Ball_Game', ['JavaScript 77.1%', 'CSS 13.3%', 'HTML 9.6%'], new Date('2021-09-03')))



    gProjects.push(createProject('book-shop', 'Book Shop', ' the best books', 'My shop to buy books',
        'https://eligranat.github.io/myBookShop/', 'https://github.com/EliGranat/myBookShop', ['JavaScript 47.2%', 'CSS 36.8%', 'HTML 16.0%'], new Date('2021-09-03')))





}

function gettProjects() {
    return gProjects
}