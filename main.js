// fetch(
//   `https://api.unsplash.com/search/photos?query=${search}&per_page=6&client_id=4QHUZm9zq2POaoqtmuwqSyYPHJWMKjarPn7cyD7PcKo`
// )
let searchText = ''
const input = document.querySelector(".search")
let searchstatus = false
const images = document.querySelector(".images");
const btn = document.querySelector('.submit')
async function getApi() {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?query=images&per_page=6&client_id=4QHUZm9zq2POaoqtmuwqSyYPHJWMKjarPn7cyD7PcKo`,
    {
      method: "get",
      headers: {
        accept: "application/json",
      },
    }
  );
  const response = await data.json();
  console.log(response);
  displayImages(response);
}
getApi();
const displayImages = (response) => {
  response.results.forEach((db) => {
    const photo = document.createElement("div");
    photo.className = 'card'
    images.appendChild(photo);
    photo.innerHTML = `
        <img src=${db.links.download} alt="rasm">
    `;
    console.log(db);
  });
};

async function searchPhoto(query) {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=6&client_id=4QHUZm9zq2POaoqtmuwqSyYPHJWMKjarPn7cyD7PcKo`,
    {
      method: "get",
      headers: {
        accept: "application/json",
      },
    }
  );
  const response = await data.json();
  displayImages(response);
}

// input.addEventListiner("input", (e) => {
//   e.preventDefault();
//   searchText =  e.target.value
// });

input.addEventListener('input',(e)=>{
    e.preventDefault()
    searchText = e.target.value
})


btn.addEventListener('click',()=>{
  if(input.value == ''){
    alert('Qidiruvga yozing')
  }else{
    searchstatus = true
    searchPhoto(searchText)
    clear()
  }
})
function clear() {
  document.querySelector('.images').innerHTML = ''
}