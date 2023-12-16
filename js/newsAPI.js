//For more information about the News API visit: https://newsapi.org/docs/get-started
/* Example response
"status": "ok",
"totalResults": 667,
-"articles": [
    -{
        -"source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "Cheyenne MacDonald",
        "title": "Beeper Mini team says a fix is ‘coming soon’ and promises to extend users’ free trials",
        "description": "The Beeper Mini team has apparently been working around the clock to resolve the outage affecting the new “iMessage on Android” app\r\n, and says a fix is “very close.” And once the fix rolls out, users’ seven-day free trials will be reset so they can start ove…",
        "url": "https://www.engadget.com/beeper-mini-team-says-a-fix-is-coming-soon-and-promises-to-extend-users-free-trials-171310651.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/qPB1PR_4F2sxnCN_UKlS9A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/3caa3a20-96b5-11ee-bfb7-fe583ad9fd08",
        "publishedAt": "2023-12-09T17:13:10Z",
        "content": "The Beeper Mini team has apparently been working around the clock to resolve the outage affecting the new iMessage on Android app\r\n, and says a fix is very close. And once the fix rolls out, users se… [+1948 chars]"
    },
    -{
        -"source": {
            "id": null,
            "name": "Android Central"
        },
        "author": "jerry.hildenbrand@futurenet.com (Jerry Hildenbrand)",
        "title": "Your loved ones need access to your phone once you've passed away",
        "description": "All the digital information you're keeping on your phone can be important to the people you've left behind.",
        "url": "https://www.androidcentral.com/phones/prepare-your-digital-information-for-the-inevitable",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/ZZiZyk5nPFNwMfmPMjLbha-1200-80.jpg",
        "publishedAt": "2023-12-09T16:00:49Z",
        "content": "There is one thing that's going to happen to us all, no matter how much we wish to avoid it; we're all going to die eventually. Everyone has their own set of thoughts and fears about death, but no ma… [+4629 chars]"
    }
]
*/


const apiKey = process.env.NEWS_API_KEY;
const sampleURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

const URL_BASE = "https://newsapi.org/v2/"
const URL_COUNTRY_PRE = "?country="
const URL_TOP_HEADLINES = "top-headlines"
const URL_EVERYTHING = "everything"
const URL_API_PRE = "&apiKey="


async function getNews(searchCriteria = "?q=News") {
    const newsURL = `${URL_BASE}${URL_EVERYTHING}${searchCriteria}${URL_API_PRE}${apiKey}`
    try {
        const response = await fetch(newsURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was an error!', error);
    }
}

async function getBreakingNews(country = "us"){
    const newsURL = `${URL_BASE}${URL_TOP_HEADLINES}${URL_COUNTRY_PRE}${country}${URL_API_PRE}${apiKey}`
    try{
        const res = await fetch(newsURL);
        const data = await res.json();
        return data;
    }catch(e){
        console.log(`Error fetching top news for ${country}.\n ${e}`)
    }
}

class SearchLink{
    constructor(title = "United States",searchText = "?q=United States"){
        this.title=title;
        this.searchText = searchText;
    }
}
class searchOption{
    constructor(headLink = new SearchLink, subLinks =[]){
        this.headLink=headLink;
        this.subLinks = subLinks;
    }
}


const pageSearchOptions = 
    [
        {
            "headLink" : {"title": "United States", "text": "?q=United States"},
            "subLinks" : [
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"}
            ]
        },
        {
            "headLink" : {"title": "United States", "text": "?q=United States"},
            "subLinks" : [
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"}
            ]
        },
        {
            "headLink" : {"title": "United States", "text": "?q=United States"},
            "subLinks" : [
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"}
            ]
        },
        {
            "headLink" : {"title": "United States", "text": "?q=United States"},
            "subLinks" : [
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"}
            ]
        },
        {
            "headLink" : {"title": "United States", "text": "?q=United States"},
            "subLinks" : [
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"},
                {"title": "Search", "text": "?q=United States"}
            ]
        }
    ]




const testArticleArray = [
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "Cheyenne MacDonald",
        "title": "Beeper Mini team says a fix is ‘coming soon’ and promises to extend users’ free trials",
        "description": "The Beeper Mini team has apparently been working around the clock to resolve the outage affecting the new “iMessage on Android” app\r\n, and says a fix is “very close.” And once the fix rolls out, users’ seven-day free trials will be reset so they can start ove…",
        "url": "https://www.engadget.com/beeper-mini-team-says-a-fix-is-coming-soon-and-promises-to-extend-users-free-trials-171310651.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/qPB1PR_4F2sxnCN_UKlS9A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/3caa3a20-96b5-11ee-bfb7-fe583ad9fd08",
        "publishedAt": "2023-12-09T17:13:10Z",
        "content": "The Beeper Mini team has apparently been working around the clock to resolve the outage affecting the new iMessage on Android app\r\n, and says a fix is very close. And once the fix rolls out, users se… [+1948 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Android Central"
        },
        "author": "jerry.hildenbrand@futurenet.com (Jerry Hildenbrand)",
        "title": "Your loved ones need access to your phone once you've passed away",
        "description": "All the digital information you're keeping on your phone can be important to the people you've left behind.",
        "url": "https://www.androidcentral.com/phones/prepare-your-digital-information-for-the-inevitable",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/ZZiZyk5nPFNwMfmPMjLbha-1200-80.jpg",
        "publishedAt": "2023-12-09T16:00:49Z",
        "content": "There is one thing that's going to happen to us all, no matter how much we wish to avoid it; we're all going to die eventually. Everyone has their own set of thoughts and fears about death, but no ma… [+4629 chars]"
    }
]

export {pageSearchOptions,testArticleArray,getBreakingNews,getNews}; 