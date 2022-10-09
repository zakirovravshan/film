const elList = document.querySelector('.list')
const elSelect = document.querySelector('.js-select')
const elSelec = document.querySelector('.js-selec')
const elBtn = document.querySelector('.btn')

function Dom(array, node) {
    array.forEach((film) => {
        var newItem = document.createElement('li')
        var elTitle = document.createElement('h3')
        var elImg = document.createElement('img')
        var elText = document.createElement('p')

        var elGenre = document.createElement('span')
        var elDetails = document.createElement('details')
        var elSumary = document.createElement('summary')

        elTitle.textContent = film.title
        elImg.src = film.poster
        elText.textContent = film.overview
        elGenre.textContent = film.genres
        elSumary.textContent = 'About film...'

        node.appendChild(newItem)
        newItem.appendChild(elTitle)
        newItem.appendChild(elImg)
        newItem.appendChild(elDetails)
        elDetails.appendChild(elSumary)
        elDetails.appendChild(elText)

        newItem.appendChild(elGenre)



    })
}
Dom(films, elList)

const optionList = new Set()

films.forEach((film) => {
    film.genres.forEach((genre) => {
        optionList.add(genre)
    })
    console.log(optionList)


})

optionList.forEach((item) => {
    var newOption = document.createElement('option')
    newOption.value = item
    newOption.textContent = item

    elSelect.appendChild(newOption)
})

elSelect.addEventListener('change', function () {
    let filtredArr = []
    elList.innerHTML = '';
    let selVal = elSelect.value
    films.forEach((el) => {
        if (el.genres.includes(selVal)) {
            filtredArr.push(el)
        }
    })
    Dom(filtredArr, elList)
})

elSelec.addEventListener('change', function () {
    let newArr = []
    elList.innerHTML = ''
    let selVal = elSelec.value

    if (selVal == 'A to Z') {
        newArr = films.sort((a, b) => {
             return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
    }
    if (selVal == 'Z to A') {
        newArr = films.sort((a, b) => {
             return b.title.charCodeAt(0) - a.title.charCodeAt(0)
        })
    }
    Dom(newArr , elList)
})




let theme = false;
elBtn.addEventListener('click', function () {
    theme = !theme
    // console.log(theme)
	window.localStorage.setItem('theme', theme ? 'dark' : 'light');
	changeTheme();
});

function changeTheme() {
	if (window.localStorage.getItem('theme') == 'dark') {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
    
}
changeTheme();

