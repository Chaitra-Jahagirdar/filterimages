const accessKey = "V33vqJsYGuPICHLNuOVj1592R6C8pW2vzivcGyfR5WQ"

const formel = document.querySelector("form");
const inputel = document.getElementById("search-img")
const imagetemplate = document.querySelector(".default-display")
const morebtn = document.querySelector('#show-more-btn')

let inputdata = "";
let page = 1;
let total_pages = 0;
console.log("hi")

async function searchImages(){
    console.log("hello");
    inputdata = inputel.value;
    if(inputdata == ""){
        alert("please type in the search bar");
        morebtn.style.display = "none"
    }
    console.log("hello");
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    total_pages = data.total_pages
    console.log(data.total_pages);

    if(page === 1){
        imagetemplate.innerHTML = "";
      
    }


    results.map((result) =>
    {
        console.log("hello77")
        const imagewrapper = document.createElement("div");
        imagewrapper.classList.add("img-default");
        const image = document.createElement("img");
        console.log(result.urls)
        image.src = result.urls.small;


        imagewrapper.appendChild(image);
        imagetemplate.appendChild(imagewrapper);
    })

    page++;

    if(page <= total_pages)
    {
        morebtn.style.display = "block"
    }
    else
    {
        morebtn.style.display = "none"
    }


}

formel.addEventListener("submit",(event) =>
{
    event.preventDefault();
    page =1;
    searchImages();
})

morebtn.addEventListener("click",() =>
    {

      
        searchImages();
    })

    function displaydate(){
        const currentdate = new Date();
        alert(currentdate);
      
    }