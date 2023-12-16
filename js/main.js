import { getBreakingNewsDemo, getNewsDemo,getBreakingNews, getNews, testArticleArray,pageSearchOptions} from "./newsAPI";

const searchButton = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");

window.addEventListener("load", showMeSomeNews);
searchButton.addEventListener("click", searchNews);
searchBox.addEventListener("keypress", (btn) => {
    if (btn.key === "Enter") {
        searchNews();
    }
})


let breakingNews = {}
let worldNews = {};
let searchResults = {};
let filteredNews = {};

function populateSearchOptions(searchArray) {
    const searchOptRow = document.getElementById("searchOptRow");

    //Use a "For each or For of to populate items"

    for(let searchItem of searchArray){
        const searchCol = document.createElement("div");
        searchCol.setAttribute("class", "col");

        let searchVariable = searchItem.headLink.text;
        const searchCatHead = document.createElement("h4");
        searchCatHead.textContent = searchItem.headLink.title
        searchCatHead.setAttribute("class", "filterHeading");
        searchCatHead.addEventListener("click",async()=>{
            filteredNews = await getNewsDemo(searchVariable);
            clearNewsList("searchResults");
            clearPageNumbers("searchPagify");
            document.getElementById("searchHeader").classList.add("d-none");
            generateCarousel(filteredNews.articles,6);
            populateWorldNews(filteredNews.articles,0);
            document.getElementById("newsTitle").textContent=searchItem.headLink.title;
            window.location.href = "#topStories";
        });


        const searchUl = document.createElement("ul");
        searchUl.setAttribute("class", "filterSub");

        for (let subSearchItem of searchItem.subLinks) {
            let searchVariable = subSearchItem.text;
            const searchLi = document.createElement("li");
            searchLi.textContent = subSearchItem.title;
            //Add event listener for each item
            searchLi.addEventListener("click",async()=>{
                filteredNews = await getNewsDemo(searchVariable);
                clearNewsList("searchResults");
                clearPageNumbers("searchPagify");
                document.getElementById("searchHeader").classList.add("d-none");
                generateCarousel(filteredNews.articles,6);
                populateWorldNews(filteredNews.articles,0);
                document.getElementById("newsTitle").textContent=subSearchItem.text;
                window.location.href = "#topStories";
            });
            searchUl.appendChild(searchLi);

        }
        searchCol.appendChild(searchCatHead);
        searchCol.appendChild(searchUl)
        searchOptRow.appendChild(searchCol);

    }
}

function populateSearchResults(newsArticles = [], pageNumber = 0) {
    const resultsList = document.getElementById("searchResults");
    const pageList = document.getElementById("searchPagify");

    for (let i = (pageNumber * 10); i < newsArticles.length; i++) {

        const newsRow = document.createElement("div");
        const anchor = document.createElement("a");
        const cardDiv = document.createElement("div");
        const rowDiv = document.createElement("div");
        const picCol = document.createElement("div");
        const textCol = document.createElement("div");
        const cardTitle = document.createElement("h5");
        const cardHead = document.createElement("div");
        const cardText = document.createElement("p");
        const cardPic = document.createElement("img");

        let storyTitle = newsArticles[i].title;
        let storySub = newsArticles[i].author;
        let storyDetails = newsArticles[i].description;

        cardDiv.setAttribute("class", "col card");
        anchor.href = newsArticles[i].url;
        rowDiv.setAttribute("class", "row");
        picCol.setAttribute("class", "col-md-4 my-auto text-center");
        cardPic.setAttribute("class", "img-fluid rounded align-items-center");
        cardPic.src = newsArticles[i].urlToImage
        textCol.setAttribute("class", "col-8 card-body");
        cardTitle.setAttribute("class", "card-title text-truncate");
        cardTitle.textContent = storyTitle;
        cardHead.setAttribute("class", "card-header");
        cardHead.textContent = storySub;
        cardText.setAttribute("class", "card-text d-sm-none d-md-block text-truncate");
        cardText.textContent = storyDetails;

        //Append items
        picCol.appendChild(cardPic);

        textCol.appendChild(cardTitle);
        textCol.appendChild(cardHead);
        textCol.appendChild(cardText);

        rowDiv.appendChild(picCol);
        rowDiv.appendChild(textCol);
        anchor.appendChild(rowDiv)

        cardDiv.appendChild(anchor);
        newsRow.appendChild(cardDiv);
        resultsList.appendChild(newsRow);

        if (i > (pageNumber * 10) + 10) break;
    }
    clearPageNumbers("searchPagify");
    for (i = 0; i < newsArticles.length; i += 10) {
        let pageNumber = i / 10;
        const pageEl = document.createElement("span")
        const spacerEl = document.createElement("span");
        pageEl.textContent = ` ${(i / 10) + 1} `;
        pageEl.setAttribute("class", "pageNumber")
        spacerEl.textContent = " | ";

        if (i > 0) pageList.appendChild(spacerEl);
        pageList.appendChild(pageEl);
        pageList.lastElementChild.addEventListener("click", () => {
            clearNewsList("searchResults");
            populateSearchResults(newsArticles, pageNumber);
            window.location.href = "#searchHeader"
        });


    }
}

function populateWorldNews(newsArticles = [], pageNumber = 0) {
    //Reference:
    // <div class="col-sm-6 card">
    //     <div class="row">
    //         <div class="col-md-4 my-auto text-center">
    //             <img class="img-fluid rounded align-items-center" src="./img/test-image.jpg" alt="story">
    //         </div>
    //         <div class="col-8 card-body">
    //             <h5 class="card-title">Story title</h5>
    //             <div class="card-header">Sub title</div>
    //             <p class="card-text  d-sm-none d-md-block">Story details</p>
    //         </div>
    //     </div>
    // </div>


    const storyList = document.getElementById("storyList");
    const pageList = document.getElementById("worldPagify");
    let newsRow = document.createElement("div");

    // clearNewsList("storyList");
    
    for (let i = (pageNumber * 10); i < newsArticles.length; i++) {

        if ((i % 2) === 0) {
            newsRow = null;
            newsRow = document.createElement("div");
            newsRow.setAttribute("class", "row");
        }
        const anchor = document.createElement("a");
        const cardDiv = document.createElement("div");
        const rowDiv = document.createElement("div");
        const picCol = document.createElement("div");
        const textCol = document.createElement("div");
        const cardTitle = document.createElement("h5");
        const cardHead = document.createElement("div");
        const cardText = document.createElement("p");
        const cardPic = document.createElement("img");

        let storyTitle = newsArticles[i].title;
        let storySub = newsArticles[i].author;
        let storyDetails = newsArticles[i].description;

        cardDiv.setAttribute("class", "col-sm-6 card");
        anchor.href = newsArticles[i].url;
        rowDiv.setAttribute("class", "row");
        picCol.setAttribute("class", "col-md-4 my-auto text-center");
        cardPic.setAttribute("class", "img-fluid rounded align-items-center");
        cardPic.src = newsArticles[i].urlToImage
        textCol.setAttribute("class", "col-8 card-body");
        cardTitle.setAttribute("class", "card-title text-truncate");
        cardTitle.textContent = storyTitle;
        cardHead.setAttribute("class", "card-header");
        cardHead.textContent = storySub;
        cardText.setAttribute("class", "card-text d-sm-none d-md-block text-truncate");
        cardText.textContent = storyDetails;

        //Append items
        picCol.appendChild(cardPic);

        textCol.appendChild(cardTitle);
        textCol.appendChild(cardHead);
        textCol.appendChild(cardText);

        rowDiv.appendChild(picCol);
        rowDiv.appendChild(textCol);
        anchor.appendChild(rowDiv)

        cardDiv.appendChild(anchor);
        newsRow.appendChild(cardDiv);

        if ((i % 2) === 1) {
            storyList.appendChild(newsRow);
        }
        if (i > (pageNumber * 10) + 10) break;
    }
    clearPageNumbers("worldPagify");
    for (i = 0; i < newsArticles.length; i += 10) {
        let pageNumber = i / 10;
        const pageEl = document.createElement("span")
        const spacerEl = document.createElement("span");
        pageEl.textContent = ` ${(i / 10) + 1} `;
        pageEl.setAttribute("class", "pageNumber")
        spacerEl.textContent = " | ";

        if (i > 0) pageList.appendChild(spacerEl);
        pageList.appendChild(pageEl);
        pageList.lastElementChild.addEventListener("click", () => {
            clearNewsList("storyList");
            populateWorldNews(worldNews.articles, pageNumber);
            window.location.href = "#storyHeader";
        });


    }
}
function clearPageNumbers(itemId) {
    const pageList = document.getElementById(itemId);
    while (pageList.firstElementChild) {
        pageList.removeChild(pageList.firstElementChild);
    }

}
function clearNewsList(itemId) {
    const storyList = document.getElementById(itemId);
    while (storyList.firstElementChild) {
        storyList.removeChild(storyList.firstElementChild);
    }
}

function clearCarousel(listId = "#cList", innerId = "#cInner"){
    const list = document.querySelector(listId);
    const inner = document.querySelector(innerId);

    while (list.firstElementChild){
        list.removeChild(list.firstElementChild);
    }
    while (inner.firstElementChild){
        inner.removeChild(inner.firstElementChild);
    }


}
function generateCarousel(newsArticles = [], numToShow = 5, carouselId = "#newsCarousel", listId = "#cList", innerId = "#cInner") {

    //For reference constructing
    //<li data-bs-target="#carouselId" data-bs-slide-to="0" class="active"></li>
    /* 
    <div class="carousel-item active" data-bs-interval="3000">
    <img src="image-source" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
    <h5>Title</h5>
    </div>
    </div>
    */
    clearCarousel(listId,innerId);

    const list = document.querySelector(listId);
    const inner = document.querySelector(innerId);
    for (let i = 0; i < newsArticles.length; i++) {
        if (i > 5) break;

        let isActive = "active";
        if (i > 0) isActive = "";

        let slideInterval = 3000;
        const listItem = document.createElement("li");
        const carouselDiv = document.createElement("div");
        const img = document.createElement("img");
        const captionDiv = document.createElement("div");
        const anchor = document.createElement("a");

        listItem.setAttribute("data-bs-target", carouselId);
        listItem.setAttribute("data-bs-slide-to", `${i}`);
        listItem.setAttribute("class", isActive);

        carouselDiv.setAttribute("class", `carousel-item ${isActive}`);
        carouselDiv.setAttribute("data-bs-interval", `${slideInterval}`);

        img.src = newsArticles[i].urlToImage
        img.setAttribute("class", "d-block img-fluid");
        img.setAttribute("alt", "...")

        captionDiv.setAttribute("class", "carousel-caption");
        let newsTitle = `${newsArticles[i].title}\n${newsArticles[i].source.name}`
        captionDiv.innerText = newsTitle;

        anchor.href = newsArticles[i].url;

        anchor.appendChild(img);
        anchor.appendChild(captionDiv);
        carouselDiv.appendChild(anchor);

        list.appendChild(listItem);
        inner.appendChild(carouselDiv);

    }
}




async function showMeSomeNews() {

    // breakingNews = await getBreakingNews();
    // worldNews = await getNews("?q=World News");

    //DEMO purposes
    breakingNews = await getBreakingNewsDemo();
    worldNews = await getNewsDemo("?q=World News");


    console.log(worldNews);
    generateCarousel(breakingNews.articles, 5);
    populateWorldNews(worldNews.articles, 1);
    populateSearchOptions(pageSearchOptions);
}

async function searchNews() {
    const searchCriteria = `?q=${searchBox.value}`;
    if (!searchCriteria) return;

    searchResults = await getNewsDemo(searchCriteria);
    clearNewsList("searchResults");
    populateSearchResults(searchResults.articles);
    window.location.href = "#searchHeader";
    document.getElementById("searchHeader").classList.remove("d-none");

}

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');

        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);


        newsDiv.appendChild(articleDiv);
    }
}