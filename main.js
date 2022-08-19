const getImage = () => {
    const search = document.querySelector('.search').value
    const images = document.querySelector('.images')
    var vue = "vue"
    fetch(`https://api.unsplash.com/search/photos?query=${vue}&per_page=9&client_id=4QHUZm9zq2POaoqtmuwqSyYPHJWMKjarPn7cyD7PcKo`)
        .then(response => response.json())
        .then(data => data.results.forEach(db => {
            console.log(db);

            // card image
            const card = document.createElement('div')
            const img = document.createElement('img')
            const time = document.createElement('p')
            const title = document.createElement('h2')
            // child
            images.appendChild(card)
            card.appendChild(img)
            card.appendChild(title)
            card.appendChild(time)
            // class html elements
            card.className = 'card'
            // innerHTML
            img.src = db.links.download
            title.innerHTML = db.alt_description
            time.innerHTML = db.created_at
        }))
}
getImage()
// 