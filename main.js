const getImage = () => {
  const search = document.querySelector(".search").value;
  const images = document.querySelector(".images");
  fetch(
    `https://api.unsplash.com/search/photos?query=${search}&per_page=6&client_id=4QHUZm9zq2POaoqtmuwqSyYPHJWMKjarPn7cyD7PcKo`
  )
    .then((response) => response.json())
    .then((data) =>
      data.results.forEach((db) => {
        console.log(db);
        // card image
        const card = document.createElement("div");
        const img = document.createElement("img");
        const time = document.createElement("p");
        const title = document.createElement("h1");
        // child
        images.appendChild(card);
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(time);
        // class html elements
        card.className = "card";
        img.className = "lazyload";
        img.id = "img";
        // innerHTML
        if (db.alt_description === null) {
          db.alt_description = search;
        }

        // db.title

        img.src = db.links.download;
        title.innerHTML = db.alt_description.toUpperCase();
        time.innerHTML = db.created_at;
        img.loading = "lazy";
      })
    );
};

getImage();
