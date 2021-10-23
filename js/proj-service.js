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
    gProjects.push(createProject('pacman', 'pacman', 'pacman Game', 'Try to win without getting Killed by the Ghosts - The game pacman like the original game with secret doors and dangerous ghosts Try It And See The Code',
        'https://eligranat.github.io/Game-Mines-Weeper/', 'https://github.com/EliGranat/Game-Mines-Weeper', ['JavaScript 76.7%', 'CSS 14.4%', 'HTML 8.9%'], '2021-09-07'))

    gProjects.push(createProject('Minesweeper', 'Minesweeper', 'Minesweeper Game', 'Try to win without getting Killed by bombs ',
        'https://eligranat.github.io/Pacman_Game/', 'https://github.com/EliGranat/Pacman_Game', ['JavaScript 84.9%', 'CSS 11.3%', 'HTML 3.8%'], '2021-09-03'))

    gProjects.push(createProject('TouchTheNumbers', 'TouchTheNumbers', 'Touch The Numbers Game', 'catch the num the faster you cen',
        'https://eligranat.github.io/Board_Touch_Nums/', 'https://github.com/EliGranat/Board_Touch_Nums', ['JavaScript 46.9%', 'CSS 37.2%', 'HTML 15.9%'], '2021-09-03'))

    gProjects.push(createProject('book-shop', 'Book Shop', ' the best books', 'My shop to buy books',
        'https://eligranat.github.io/myBookShop/', 'https://github.com/EliGranat/myBookShop', ['JavaScript 47.2%', 'CSS 36.8%', 'HTML 16.0%'], '2021-09-03'))

    gProjects.push(createProject('Ball_Game', 'Ball  Game', ' Ball_Game', 'catch the food the faster you cen without be killed',
        'https://eligranat.github.io/Ball_Game/', 'https://github.com/EliGranat/Ball_Game', ['JavaScript 77.1%', 'CSS 13.3%', 'HTML 9.6%'], '2021-09-03'))

    gProjects.push(createProject('Blogin', 'Blogin', ' Blog Life Style', 'work with designer',
        'https://eligranat.github.io/myBlogLifeStyle/', 'https://github.com/EliGranat/myBlogLifeStyle', ['JavaScript 1%', 'CSS 61.4%', 'HTML 37.6%'], '2021-10-24'))

    gProjects.push(createProject('Portfolio', 'Portfolio', 'Portfolio', 'Show My Works',
        'https://eligranat.github.io/portfolio/', 'https://github.com/EliGranat/portfolio', ['JavaScript 16.8%', 'CSS 49.9%', 'HTML 33.3%'], '2021-10-24'))


}

function gettProjects() {
    return gProjects
}

function gettProject(idx) {
    return gProjects[idx]
}