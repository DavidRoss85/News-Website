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

//DEMO functions just for display purposes. Does not access the News API
async function getBreakingNewsDemo(country = "us"){
    return demoBreakingNewsArray;
}
async function getNewsDemo(searchCriteria = "?q=News"){
    return demoWorldNewsArray;
}


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

// class SearchLink{
//     constructor(title = "United States",searchText = "?q=United States"){
//         this.title=title;
//         this.searchText = searchText;
//     }
// }
// class searchOption{
//     constructor(headLink = new SearchLink, subLinks =[]){
//         this.headLink=headLink;
//         this.subLinks = subLinks;
//     }
// }


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

const demoBreakingNewsArray = {
    "status": "ok",
    "totalResults": 36,
    "articles": [
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": null,
            "title": "Chargers vs. Raiders highlights: Las Vegas gets overwhelming 63-21 win - FOX Sports",
            "description": "Week 15 of the NFL season starts with the Chargers battling the Raiders on Thursday Night Football. Here are the top moments!",
            "url": "https://www.foxsports.com/stories/nfl/chargers-vs-raiders-live-updates-top-moments-from-thursday-night-football",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/12/1408/814/12.11.23_NFL-Top-Plays_TNF_16x9.jpg?ve=1&tl=1",
            "publishedAt": "2023-12-15T04:35:58Z",
            "content": "Week 15 of the NFL\r\n season began with the Las Vegas Raiders (6-8) dismantling the Los Angeles Chargers (5-9) at Allegiant Stadium on Thursday Night Football, and we've got you covered with all the h… [+4642 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Canada",
            "title": "Guyana, Venezuela agree to not use force or escalate tensions in Esequibo dispute - Reuters Canada",
            "description": null,
            "url": "https://www.reuters.com/world/americas/venezuela-guyana-presidents-meet-amid-territorial-dispute-2023-12-14/",
            "urlToImage": null,
            "publishedAt": "2023-12-15T03:59:00Z",
            "content": null
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Paul Gutierrez",
            "title": "Aidan O'Connell's two TD passes start Raiders onslaught - ESPN",
            "description": "O'Connell threw first-quarter TD passes to Tre Tucker and Jakobi Meyers to start the rout, as the Raiders have already set their season high for points.",
            "url": "https://www.espn.com/nfl/story/_/id/39115975/aidan-oconnell-touchdown-passes-raiders-tre-tucker-jakobi-meyers",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1215%2Fr1266551_1296x729_16%2D9.jpg",
            "publishedAt": "2023-12-15T03:29:00Z",
            "content": "LAS VEGAS -- Break up the Las Vegas Raiders' offense.\r\nFour days after getting shut out in a 3-0 defeat to the Minnesota Vikings, the Raiders scored a trio of first-quarter touchdowns to take a 21-0 … [+3177 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Rebel fire and China's ire: Inside Myanmar's anti-junta offensive - Reuters",
            "description": null,
            "url": "https://www.reuters.com/world/asia-pacific/rebel-fire-chinas-ire-inside-myanmars-anti-junta-offensive-2023-12-15/",
            "urlToImage": null,
            "publishedAt": "2023-12-15T03:06:00Z",
            "content": null
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "RAF CASERT, SAMUEL PETREQUIN",
            "title": "EU leaders fail to agree on a $55 billion aid package for Ukraine - The Associated Press",
            "description": "The European Union has failed to agree on a $54 billion package in financial aid that Ukraine desperately needs to stay afloat, even as the bloc decided to open accession negotiations with the war-torn country. The aid was vetoed Thursday by Hungarian Prime M…",
            "url": "https://apnews.com/article/eu-ukraine-hungary-russsia-war-aid-6a3a5828483121f19193f76b373ca692",
            "urlToImage": "https://dims.apnews.com/dims4/default/723b91b/2147483647/strip/true/crop/8146x4582+0+424/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0a%2F30%2Fc2815a806220357412fa8a5d3084%2Fe38357f945d7438c9257a202eaf10988",
            "publishedAt": "2023-12-15T03:00:00Z",
            "content": "BRUSSELS (AP) The European Union failed to agree Thursday on a 50 billion-euro ($54 billion) package in financial aid that Ukraine desperately needs to stay afloat, even as the bloc decided to open a… [+5891 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Kentucky Supreme Court upholds congressional boundaries passed by GOP-led legislature - POLITICO",
            "description": "The court rejected Democratic claims that the majority party’s mapmaking amounted to gerrymandering in violation of the state’s constitution.",
            "url": "https://www.politico.com/news/2023/12/14/kentucky-supreme-court-congressional-map-00131881",
            "urlToImage": "https://static.politico.com/e6/fc/9be477674bc5b37f629a4b1c0d08/charter-schools-kentucky-29075.jpg",
            "publishedAt": "2023-12-15T02:13:22Z",
            "content": "The justices referred to redistricting as an inherently political process assigned to the legislature.\r\nAn expectation that apportionment will be free of partisan considerations would thus not only b… [+3056 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Tania Chen",
            "title": "PBOC Offers Record $112 Billion of Cash as Economy Struggles - Bloomberg",
            "description": "China extended its support for the economy with the largest injection of medium-term policy loans ever, as the nation’s growth recovery remained fragile amid a housing slump and weak demand.",
            "url": "https://www.bloomberg.com/news/articles/2023-12-15/china-expands-cash-coffers-with-13th-consecutive-loan-injection",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZyoJCprMKig/v1/1200x800.jpg",
            "publishedAt": "2023-12-15T01:41:15Z",
            "content": "China extended its support for the economy with the largest injection of medium-term policy loans ever, as the nations growth recovery remained fragile amid a housing slump and weak demand.\r\nThe Peop… [+299 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Michael Williams, Kevin Liptak",
            "title": "Biden urges Israelis to protect civilian lives as national security adviser meets with Netanyahu amid developing rift - CNN",
            "description": "President Joe Biden on Thursday said he wants the Israeli military to focus on saving civilian lives as it conducts its campaign to eliminate Hamas and faces mounting pressure over its military operations in Gaza.",
            "url": "https://www.cnn.com/2023/12/14/politics/jake-sullivan-israel-trip/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/pmandusnsa.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-12-15T01:32:00Z",
            "content": "President Joe Biden on Thursday said he wants the Israeli military to focus on saving civilian lives as it conducts its campaign to eliminate Hamas and faces mounting pressure over its military opera… [+6584 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Elizabeth Napolitano",
            "title": "Coca-Cola recalls 2,000 Diet Coke, Sprite, Fanta Orange soda packs - CBS News",
            "description": "Coca-Cola's recall impacts 12-pack cans of soda distributed in Alabama, Mississippi and Florida, the FDA said in a filing.",
            "url": "https://www.cbsnews.com/news/coca-cola-recall-diet-coke-sprite-fanta-orange-2000-cases/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2015/07/29/bb1524ab-60f2-4f08-9225-3ec7639365a1/thumbnail/1200x630/a8b316132debf1d12d245413d959d513/gettyimages-177194572.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0",
            "publishedAt": "2023-12-15T01:05:00Z",
            "content": "Coca-Cola is recalling 2,000 cases of Diet Coke, Sprite and Fanta Orange soda cans because they may contain \"foreign material.\"\r\nThe recall comprises 12-packs of 12-ounce cans, including 1,557 packs … [+987 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Adam Sabes",
            "title": "Supreme Court allows Illinois semiautomatic weapons ban to stay in place - Fox News",
            "description": "The Supreme Court in a Thursday ruling has allowed an Illinois law banning high-powered semiautomatic weapons and magazines to remain in place.",
            "url": "https://www.foxnews.com/politics/supreme-court-allows-illinois-semiautomatic-weapons-ban-stay-place",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/illinois-assault-weapons-ban.jpg",
            "publishedAt": "2023-12-15T00:34:00Z",
            "content": "The Supreme Court has allowed an Illinois law banning high-powered semiautomatic weapons to remain in place.\r\nIn a Thursday order with no noted dissents or explanation of its decision, the Supreme Co… [+1501 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MLB.com"
            },
            "author": "Adam Berry",
            "title": "Glasnow traded to Dodgers, contingent upon extension agreement (sources) - MLB.com",
            "description": "After igniting the Hot Stove with the record-breaking signing of Shohei Ohtani, the Dodgers are on the verge of landing one of the best starting pitchers available this offseason: Tyler Glasnow.\nAnd like Ohtani, Glasnow likely won’t be going anywhere anytime …",
            "url": "https://www.mlb.com/news/tyler-glasnow-manuel-margot-traded-to-dodgers",
            "urlToImage": "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/pz8ejgyvb8wh3oece7j4.jpg",
            "publishedAt": "2023-12-15T00:25:01Z",
            "content": "After igniting the Hot Stove with the record-breaking signing of Shohei Ohtani, the Dodgers are on the verge of landing one of the best starting pitchers available this offseason: Tyler Glasnow.\r\nAnd… [+4761 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "James Powel",
            "title": "Dog respiratory illness cases confirmed in Nevada, Pennsylvania. See map of impacted states. - USA TODAY",
            "description": "Louisiana State University's vet school added Nevada and Pennsylvania to the list of states with a canine respiratory illness of unknown cause.",
            "url": "https://www.usatoday.com/story/news/nation/2023/12/14/dog-respiratory-illness-cases-nevada-pennsylvania/71924897007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/30/USAT/71755043007-usatsi-17079454.jpg?crop=2799,1575,x0,y0&width=2799&height=1575&format=pjpg&auto=webp",
            "publishedAt": "2023-12-15T00:11:18Z",
            "content": null
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": null,
            "title": "Michigan court rejects challenges to Trump's spot on 2024 primary ballot - The Associated Press",
            "description": "The Michigan Court of Appeals won’t stop former President Donald Trump from appearing on the state’s 2024 Republican primary ballot. The court turned aside challenges from critics who argue that Trump's role in the 2021 attack on the U.S. Capitol disqualifies…",
            "url": "https://apnews.com/article/michigan-trump-primary-election-insurrection-clause-40037de5f27efe20b688a0c93aa6781b",
            "urlToImage": "https://dims.apnews.com/dims4/default/15b6916/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcc%2Fe5%2Fbd217c72a88b5d685441ac35c50e%2Fbe91cba939d341ff8f971aa5b3e1ea59",
            "publishedAt": "2023-12-15T00:06:00Z",
            "content": "LANSING, Mich. (AP) The Michigan Court of Appeals said Thursday it wont stop former President Donald Trump from appearing on the states 2024 Republican primary ballot, turning aside challenges from c… [+1398 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Best Exclusive PC Games of 2023 - GameSpot",
            "description": "It’s been an incredible year for PC gaming, so we here at GameSpot have collected our favorites from 2023.Video Notes:  All of the games that made our list o...",
            "url": "https://www.youtube.com/watch?v=cAtX8Di4Gww",
            "urlToImage": "https://i.ytimg.com/vi/cAtX8Di4Gww/maxresdefault.jpg",
            "publishedAt": "2023-12-14T23:27:20Z",
            "content": null
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Vulnerable House Republicans weigh risks of Biden impeachment probe - POLITICO",
            "description": "Democrats eager to highlight GOP votes as they take on competitive districts.",
            "url": "https://www.politico.com/news/2023/12/14/new-york-house-republicans-biden-impeachment-00131889",
            "urlToImage": "https://static.politico.com/d9/d0/5b8d8cce43d48399b003dc9981ec/https-delivery-gettyimages.com/downloads/1708683771",
            "publishedAt": "2023-12-14T23:09:08Z",
            "content": "The 221-212 party-line vote Wednesday in the narrowly divided chamber to further the impeachment process underscored how little wiggle room Republicans have to allow their more vulnerable members, pa… [+5394 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Terry Eliasen, Exec. Weather Producer",
            "title": "Massive solar flare erupts from sun, may bring northern lights to New England - CBS Boston",
            "description": "The solar flare is likely the most powerful since 2017.",
            "url": "https://www.cbsnews.com/boston/news/solar-flare-eruption-class-northern-lights/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/12/14/0805a1fe-815a-4a06-870f-a75c6800ec36/thumbnail/1200x630/d9149914f0b3c5998eeb431d6cb52517/solar-flare-sun.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0",
            "publishedAt": "2023-12-14T22:07:00Z",
            "content": "BOSTON - Just after noon Thursday, a massive solar flare erupted on the surface of the sun. This flare was classified as an X2.8. \r\nWhat is an X class solar flare?\r\nFlares are classified by their str… [+2381 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Elizabeth Howell",
            "title": "See the Geminid meteor shower 2023 light up the sky in these amazing photos - Space.com",
            "description": "The meteor shower continues through the weekend.",
            "url": "https://www.space.com/geminid-meteor-shower-amazing-photos-december-2023",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/zKLrUNfBzpvnTjvEJSNj84-1200-80.jpg",
            "publishedAt": "2023-12-14T21:59:00Z",
            "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "Jose Najarro, The Motley Fool",
            "title": "Intel Announced New AI Chips -- Should AMD Stock Investors Worry? - Yahoo Finance",
            "description": "Intel's new server CPUs will add competitive pressure to Advanced Micro Devices.",
            "url": "https://www.fool.com/investing/2023/12/14/intel-announced-new-ai-chips-should-amd-stock-inve/?source=eptyholnk0000202&utm_source=yahoo-host-full&utm_medium=feed&utm_campaign=article",
            "urlToImage": "https://media.zenfs.com/en/motleyfool.com/69bf698704f23fd308ad7b986d4d6e92",
            "publishedAt": "2023-12-14T21:57:40Z",
            "content": "intel cube in front of intel headquarters with logo on front_Intel\r\nIn today's video, I discuss recent updates impacting Intel (NASDAQ: INTC) and Advanced Micro Devices (NASDAQ: AMD). Check out the s… [+1619 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Nicolas Vega",
            "title": "These are Netflix's 10 most popular shows of 2023—'Wednesday' was No. 4 - CNBC",
            "description": "The streamer this week released its first ever \"What We Watched\" engagement report.",
            "url": "https://www.cnbc.com/2023/12/14/netflixs-10-most-popular-shows-of-2023wednesday-was-no-4.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107049036-1650474270227-gettyimages-1240099721-220419b6_netflix_campus_gv_b-gr_07.jpeg?v=1702587315&w=1920&h=1080",
            "publishedAt": "2023-12-14T21:30:28Z",
            "content": "Even Jenna Ortega couldn't take down \"The Night Agent.\"\r\nThe conspiracy thriller topped \"Wednesday\" as the most popular show on Netflix, according to data released by the streamer in its first ever \"… [+2325 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Adam Shaw",
            "title": "Jayapal tells fellow Dems not to 'out-Republican the Republicans' on immigration amid funding talks - Fox News",
            "description": "The head of the House Progressive Caucus on Thursday told her fellow Democrats that they should not try to \"out-Republican the Republicans\" on immigration and border security.",
            "url": "https://www.foxnews.com/politics/jayapal-tells-fellow-dems-not-out-republican-republicans-immigration-funding-talks",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/jayapal-border.jpg",
            "publishedAt": "2023-12-14T21:08:00Z",
            "content": "Rep. Pramila Jayapal, D-Wash., on Thursday scolded fellow members of her party for trying to \"out-Republican the Republicans\" on immigration, as Democrats and the Biden administration tried to find c… [+3543 chars]"
        }
    ]
}

const demoWorldNewsArray = {
    "status": "ok",
    "totalResults": 45757,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "James Whitbrook",
            "title": "The Marvels Drama, Fallout TV Show Reveals, and More Top Pop Culture News of the Week",
            "description": "It’s been a wild week in the world of sci-fi, fantasy, superheroes, and more genre fare. The return of Doctor Who for its 60th anniversary, burning Mandalorian questions, and our epic first looks at Fallout and Furiosa all made the list of our most read stori…",
            "url": "https://gizmodo.com/top-entertainment-news-fallout-doctor-who-marvel-alien-1851065738",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/7ad4a85d6aa22e76d0ba5d6e534a2e59.jpg",
            "publishedAt": "2023-12-02T15:00:00Z",
            "content": "Its been a wild week in the world of sci-fi, fantasy, superheroes, and more genre fare. The return of Doctor Who for its 60th anniversary, burning Mandalorian questions, and our epic first looks at F… [+3679 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "World Mullet Championships: Army doctor wins in Australia",
            "description": "Army GP Alastair Bush wins the international category at the World Mullet Championships in Australia.",
            "url": "https://www.bbc.co.uk/news/uk-england-dorset-67613617",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9CEB/production/_131917104_mediaitem131917102.jpg",
            "publishedAt": "2023-12-05T06:13:01Z",
            "content": "A British Army doctor has won the title of best international mullet at the World Mullet Championships.\r\nDr Alastair Bush, from Bovington Camp, Dorset, said he was \"super proud\" to have won the troph… [+1033 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Storms unearth East Runton World War Two pillbox",
            "description": "The pillbox has been buried nearly roof-deep on a beach since the cliff it was on collapsed.",
            "url": "https://www.bbc.co.uk/news/uk-england-norfolk-67630594",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E7CF/production/_131934395_3ad34e36-86f4-40c5-9deb-27293f21e443.jpg",
            "publishedAt": "2023-12-09T01:28:42Z",
            "content": "Winter storms have unearthed a World War Two pillbox on a sandy beach and revealed its interior.\r\nThe bunker-like structure was buried nearly roof-deep at East Runton, Norfolk, after a cliff collapse… [+3123 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Week in pictures: 2-8 December 2023",
            "description": "A selection of striking images from around the world, taken over the past seven days.",
            "url": "https://www.bbc.co.uk/news/in-pictures-67658628",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1E05/production/_131958670_gettyimages-1838665071.jpg",
            "publishedAt": "2023-12-09T01:29:32Z",
            "content": "A selection of powerful news photographs taken around the world this week."
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Engadget",
            "title": "OpenAI will pay to train its models on Business Insider and Politico articles",
            "description": "OpenAI will pay German publisher Axel Springer to use its news articles to train its AI models and show real-time information from Axel Springer's brands, which include Business Insider and Politico in the US and Bild and Welt in Europe, in ChatGPT’s response…",
            "url": "https://www.engadget.com/openai-will-pay-to-train-its-models-on-business-insider-and-politico-articles-200327559.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/tRZCp4Q5pnO3NMmR3HoPYg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/2aca8420-99f0-11ee-adff-b4f5d7605415",
            "publishedAt": "2023-12-13T20:03:27Z",
            "content": "OpenAI will pay German publisher Axel Springer to use its news articles to train its AI models and show real-time information from Axel Springer's brands, which include Business Insider and Politico … [+2130 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "James Whitbrook",
            "title": "Witcher Author Andrzej Sapkowski Is Very Glad Netflix Pays His Rent",
            "description": "The Polish author behind The Witcher series is well known for his unflinching honesty about the legacy his work now has—especially in a world where Netflix has transformed that work into a streaming sensation. But how does he feel now the streamer is spinning…",
            "url": "https://gizmodo.com/witcher-novel-2025-andrzej-sapkowski-netflix-response-1851039811",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/e3b5752d5153e77e12f1777d52dd6a3d.jpg",
            "publishedAt": "2023-11-21T23:20:00Z",
            "content": "The Polish author behind The Witcher series is well known for his unflinching honesty about the legacy his work now hasespecially in a world where Netflix has transformed that work into a streaming s… [+1193 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "India vs Australia: A billion heartbreaks as India lose the ICC 2023 World Cup final",
            "description": "Cricket fans have taken to social media to express grief after Australia lifted the Cup on Sunday.",
            "url": "https://www.bbc.co.uk/news/world-asia-india-67471098",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/09B6/production/_131768420_gettyimages-1802424394.jpg",
            "publishedAt": "2023-11-20T05:26:19Z",
            "content": "Millions of Indians are nursing broken hearts after the national cricket team lost to Australia in the World Cup final on Sunday.\r\nAustralia, who have now lifted the World Cup six times, won by six w… [+2810 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Jon Rahm confirms he is joining LIV Golf and leaves PGA Tour",
            "description": "Masters champion and world number three Jon Rahm confirms he is making a shock move to join LIV Golf.",
            "url": "https://www.bbc.co.uk/sport/golf/67450710",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg",
            "publishedAt": "2023-12-07T23:46:03Z",
            "content": "Masters champion Jon Rahm has become arguably LIV Golf's most significant signing in a deal worth up to £400m.\r\nThe world number three's decision to leave the PGA Tour for the Saudi-funded circuit is… [+280 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Germain Lussier",
            "title": "Avatar 3 Won't Have This Hilarious Rumored Title",
            "description": "On the internet, most news gets forgotten very quickly. Anything that sticks around for more than a few days does so with good reason, usually because it’s so incredibly weird. In the world of movies, an example of that is the rumored Avatar sequel titles tha…",
            "url": "https://gizmodo.com/avatar-3-title-the-seed-bearer-james-cameron-disney-fox-1851081897",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/e3f2f4cd706bf109e79ee9d49edb5ada.jpg",
            "publishedAt": "2023-12-07T22:00:00Z",
            "content": "On the internet, most news gets forgotten very quickly. Anything that sticks around for more than a few days does so with good reason, usually because its so incredibly weird. In the world of movies,… [+1931 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "David Nield",
            "title": "4 Tips to Spot Misinformation on the Web",
            "description": "Don't believe everything you read on social media.",
            "url": "https://www.wired.com/story/4-tips-spot-misinformation/",
            "urlToImage": "https://media.wired.com/photos/655e27bb1f23968d5cd7e23d/191:100/w_1280,c_limit/polygraph-seismograph-sec-GettyImages-502061751-(1).jpg",
            "publishedAt": "2023-11-26T12:00:00Z",
            "content": "We've already discussed how the Israel-Hamas war is the latest conflict where people are poring over social media and news channels looking for updates on what, exactly, is happening. After all, whet… [+2060 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Bedouin family desperate for news on teenagers held hostage in Gaza",
            "description": "Two Bedouin teenagers are among the last of the young hostages yet to be released by Hamas.",
            "url": "https://www.bbc.co.uk/news/world-middle-east-67573069",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/79D4/production/_131888113_bedouinhostagescomposite.jpg",
            "publishedAt": "2023-11-30T14:22:18Z",
            "content": "Each evening, Naeema Zyadna waits for the phone to ring. Since the Israel-Hamas temporary truce deal began last week, she's been expecting word that her children who were taken hostage by Hamas - 16-… [+5628 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "News of OpenAI workers' big bluff is the latest crack in Sam Altman's facade",
            "description": "Business Insider's report on OpenAI employees' true intentions amid the Sam Altman ouster reveals how things have shifted in the world of AI.",
            "url": "https://www.businessinsider.com/news-today-december-7-openai-chatgpt-sam-altman-ouster-impact-2023-12",
            "urlToImage": "https://i.insider.com/6570f8510ec98e92f74cf84a?width=1200&format=jpeg",
            "publishedAt": "2023-12-07T13:50:37Z",
            "content": "JACK GUEZ/AFP via Getty Images\r\n<ul>\n<li>This post originally appeared in the Insider Today newsletter.</li>\n<li>You can sign up for Insider's daily newsletter here.</li>\n</ul>Hello and happy first n… [+7982 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Rahul Dravid: The man behind India’s dream run in 2023 World Cup cricket",
            "description": "From a legendary batter to the head coach of the Indian cricket team, Rahul Dravid has done it all.",
            "url": "https://www.bbc.co.uk/news/world-asia-india-67447215",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1542C/production/_131748078_gettyimages-977007398-594x594.jpg",
            "publishedAt": "2023-11-18T00:33:02Z",
            "content": "In 2003, Rahul Dravid and his teammates walked into the New Wanderers Stadium in Johannesburg to take on mighty Australia in the Cricket World Cup final.\r\nExpectations were high as India had reached … [+5653 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Cheryl Eddy",
            "title": "Hideo Kojima Documentary Connecting Worlds Will Stream Exclusively on Disney+",
            "description": "Hideo Kojima’s in the news for his appearance last night at the Game Awards where he announced he’s working on a spooky Xbox game, OD, alongside Oscar-winning horror director Jordan Peele. Now, fans wishing to know more about the popular game designer (Metal …",
            "url": "https://gizmodo.com/hideo-kojima-documentary-disney-plus-guillermo-del-toro-1851085745",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/5a50bd23a26281b74138783da5f9c99a.jpg",
            "publishedAt": "2023-12-08T21:25:00Z",
            "content": "Hideo Kojimas in the news for his appearance last night at the Game Awards where he announced hes working on a spooky Xbox game, OD, alongside Oscar-winning horror directorJordan Peele. Now, fans wis… [+1314 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Your pictures on the theme of 'tiny creatures'",
            "description": "A selection of striking images from our readers around the world.",
            "url": "https://www.bbc.co.uk/news/in-pictures-67495402",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E984/production/_131808795_11.jpg",
            "publishedAt": "2023-11-26T01:48:13Z",
            "content": "We asked our readers to send in their best pictures on the theme of \"tiny creatures\". Here is a selection of the photographs we received from around the world.\r\nImage source, Sean Iceton\r\nImage capti… [+2554 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Katherine Tangalakis-Lippert",
            "title": "The business world is shaken after the death of 'financial genius' Charlie Munger",
            "description": "After news of Charlie Munger's death broke, personalities in the business and finance industries were quick to share their condolences.",
            "url": "https://www.businessinsider.com/charlie-munger-death-business-finance-reactions-2023-11",
            "urlToImage": "https://i.insider.com/65667349c58b6f84123b2d84?width=1200&format=jpeg",
            "publishedAt": "2023-11-29T00:15:22Z",
            "content": "Johannes Eisele/AFP via Getty Images\r\n<ul><li>Charlie Munger, Warren Buffett's right-hand man at Berkshire Hathaway, died on Tuesday at age 99.</li><li>Personalities across business and finance indus… [+2654 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Quiz of the week: Which David Bowie songs went under the hammer?",
            "description": "How closely have you been paying attention to what's been going on over the past seven days?",
            "url": "https://www.bbc.co.uk/news/world-67581215",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0DC9/production/_131892530_bowie-index2-getty.jpg",
            "publishedAt": "2023-11-30T22:51:05Z",
            "content": "It's the weekly news quiz - how closely have you been paying attention to what's been going on in the world over the past seven days? \r\nSome mobile users may be experiencing difficulties. If you cann… [+266 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Quiz of the week: Who was given the cold shoulder by the Grammys?",
            "description": "How closely have you been paying attention to what's been going on over the past seven days?",
            "url": "https://www.bbc.co.uk/news/world-67442573",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7DEA/production/_131743223_mediaitem131743222.jpg",
            "publishedAt": "2023-11-17T00:04:21Z",
            "content": "It's the weekly news quiz - how closely have you been paying attention to what's been going on in the world over the past seven days? \r\nSome mobile users may be experiencing difficulties. If you cann… [+266 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "James Whitbrook",
            "title": "Good Omens Will Return For a Third and Final Season",
            "description": "The end is nigh, and Good Omens is preparing for it again. Having evolved from a limited series exploring the story of Neil Gaiman and Terry Pratchett’s beloved novel into its own magical continuation of ideas from the pair left unpublished, now Good Omens is…",
            "url": "https://gizmodo.com/good-omens-season-3-cancelled-amazon-neil-gaiman-1851099234",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/0ba6ed1ac1b77827f3a3fcdddcbb2cf7.jpg",
            "publishedAt": "2023-12-14T16:00:00Z",
            "content": "The end is nigh, and Good Omens is preparing for it again. Having evolved from a limited series exploring the story of Neil Gaiman and Terry Pratchetts beloved novel into its own magical continuation… [+1507 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "COP28: UN climate talks take aim at planet-warming food",
            "description": "World leaders agree to tackle the huge carbon footprint of the food we produce and eat.",
            "url": "https://www.bbc.co.uk/news/science-environment-67594303",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/33AE/production/_131903231_whatsappimage2023-12-01at11.08.53.jpg",
            "publishedAt": "2023-12-01T18:41:38Z",
            "content": "Media caption, Watch: King Charles speaks at COP28\r\nWorld leaders have for the first time promised to tackle the huge responsibility that food and agriculture have in climate change.\r\nMore than 130 c… [+3905 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Your pictures on the theme of autumn colours",
            "description": "A selection of striking images from our readers around the world.",
            "url": "https://www.bbc.co.uk/news/in-pictures-67640992",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/123E4/production/_131942747_28.jpg",
            "publishedAt": "2023-12-10T02:59:06Z",
            "content": "We asked our readers to send in their best pictures on the theme of \"autumn colours\". Here is a selection of the photographs we received from around the world.\r\nImage caption, Cris Katch: \"Halloween … [+4949 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Blog.google"
            },
            "author": "Christian HeiseHead of News Partnerships, Central and Eastern Europe",
            "title": "Partnering with news publishers to drive innovation and fight misinformation",
            "description": "An overview of Google’s work to support news publishers in Central and Eastern Europe in 2023.",
            "url": "https://blog.google/around-the-globe/google-europe/google-news-publishers-innovation-misinformation/",
            "urlToImage": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Authoritative_news_Y7osk7d.width-1300.jpg",
            "publishedAt": "2023-12-14T09:00:00Z",
            "content": "2023 was a year like no other. Publishers across Central and Eastern Europe (CEE) found new ways to deploy the latest technology for growth while journalists continued to help their readers make sens… [+3256 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Mia Sato",
            "title": "DealBook Summit 2023: Elon Musk, Bob Iger, and more",
            "description": "Live coverage of this year’s event featuring Vice President Kamala Harris, Disney CEO Bob Iger, FTC Chair Lina Khan, Warner Bros. Discovery CEO David Zaslav, and Tesla CEO Elon Musk, among others.",
            "url": "https://www.theverge.com/2023/11/29/23980877/new-york-times-dealbook-summit-elon-musk-bob-iger-david-zaslav",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/wW2zI39ydY5ptMMdvjwcwrzhapc=/0x0:7324x4883/1200x628/filters:focal(3652x2539:3653x2540)/cdn.vox-cdn.com/uploads/chorus_asset/file/25119833/1445788868.jpg",
            "publishedAt": "2023-11-29T15:40:00Z",
            "content": "Every year, The New York Times DealBook Summit features a roster of major speakers sitting for interviews with Andrew Ross Sorkin. Last year, the conference gave us that disastrous Sam Bankman-Fried … [+723 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Cheryl Eddy",
            "title": "Saltburn's Emerald Fennell Dreams of Making an Erotic Jurassic Park",
            "description": "Where can the Jurassic Park franchise go after the disappointing Jurassic World Dominion? How about down an unexpectedly sexy path? If Oscar winner Emerald Fennell (Saltburn, Promising Young Woman) has her druthers, that maybe could happen—if only in our coll…",
            "url": "https://gizmodo.com/emerald-fennell-saltburn-pitches-erotic-jurassic-park-1851049241",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ffc37666b12d931e0d3a222c40d4f20c.jpg",
            "publishedAt": "2023-11-27T19:45:00Z",
            "content": "Where can the Jurassic Park franchise go after the disappointing Jurassic World Dominion? How about down an unexpectedly sexy path? If Oscar winner Emerald Fennell (Saltburn, Promising Young Woman) h… [+1718 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Germain Lussier",
            "title": "Ryan Reynolds Releases New, Totally Real Deadpool 3 Set Photos",
            "description": "A day after asking the world to stop with the Deadpool 3 set photos, Ryan Reynolds made a surprising next move. Reynolds not only released some new Deadpool 3 set photos, but he made sure the photos were filled with yet-to-be-revealed cameos. Read more...",
            "url": "https://gizmodo.com/deadpool-3-set-photos-spoilers-ryan-reynolds-marvel-lea-1851081010",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/059e5546323a8d474f8faab65dcc1b9d.jpg",
            "publishedAt": "2023-12-07T19:00:00Z",
            "content": "A day after asking the world to stop with the Deadpool 3 set photos, Ryan Reynolds made a surprising next move. Reynolds not only released some new Deadpool 3 set photos, but he made sure the photos … [+1628 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Quiz of the week: Why will this woman make gaming history?",
            "description": "How closely have you been paying attention to what's been going on over the past seven days?",
            "url": "https://www.bbc.co.uk/news/world-67651093",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14DBB/production/_131953458_mediaitem131953457.jpg",
            "publishedAt": "2023-12-07T16:55:45Z",
            "content": "It's the weekly news quiz - how closely have you been paying attention to what's been going on in the world over the past seven days? \r\nSome mobile users may be experiencing difficulties. If you cann… [+266 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Quiz of the week: How did Wham ruin Christmas for 7,000 people in one go?",
            "description": "How closely have you been paying attention to what's been going on over the past seven days?",
            "url": "https://www.bbc.co.uk/news/world-67715869",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16319/production/_132050909_mediaitem132050908.jpg",
            "publishedAt": "2023-12-15T00:26:17Z",
            "content": "It's the weekly news quiz - how closely have you been paying attention to what's been going on in the world over the past seven days? \r\nSome mobile users may be experiencing difficulties. If you cann… [+365 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "VentureBeat"
            },
            "author": "Dean Takahashi",
            "title": "World of Goo 2 sequel coming after 15 years",
            "description": "World of Goo was a big hit on the PC and Wii platforms 15 years ago. Now it's finally getting a sequel, World of Goo 2.",
            "url": "https://venturebeat.com/games/world-of-goo-2-sequel-coming-after-15-years/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2023/12/world-2.jpg?w=1200&strip=all",
            "publishedAt": "2023-12-08T01:14:00Z",
            "content": "Do you want to get the latest gaming industry news straight to your inbox? Sign up for our daily and weekly newsletters here. \r\nWorld of Goo was a big hit on the PC and Wii platforms 15 years ago. No… [+684 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Sam Shedden",
            "title": "Channel 1 news: The new AI-generated newscast coming soon",
            "description": "Channel 1 news, a new artificial intelligence (AI)-generated news show, has released its first demo episode – and none of […]\nThe post Channel 1 news: The new AI-generated newscast coming soon appeared first on ReadWrite.",
            "url": "https://readwrite.com/channel-1-news-the-new-ai-generated-newscast-coming-soon/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2023/12/image-1.png",
            "publishedAt": "2023-12-13T10:05:30Z",
            "content": "Channel 1 news, a new artificial intelligence (AI)-generated news show, has released its first demo episode – and none of the anchors are human.\r\nThe full 21-minute video episode comes from the Ameri… [+2718 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "James Whitbrook",
            "title": "Aardman Says Its Future Is Fine After Clay Shortage Worries",
            "description": "After a weekend report that one of the most famous stop-motion animation houses in the world—Aardman, the team behind Chicken Run, Wallace and Gromit, Shaun the Sheep, and more—was on the verge of running out of the unique clay they use to craft their creatio…",
            "url": "https://gizmodo.com/aardman-clay-shortage-update-wallace-gromit-chicken-run-1851035687",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/181a45ab59232601a41b090d2ebdabb0.jpg",
            "publishedAt": "2023-11-20T16:00:00Z",
            "content": "After a weekend report that one of the most famous stop-motion animation houses in the worldAardman, the team behind Chicken Run, Wallace and Gromit, Shaun the Sheep, and morewas on the verge of runn… [+2099 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Justin Carter",
            "title": "Fallout's First Trailer Welcomes You to a Familiar Post-Apocalypse",
            "description": "Interplay’s (and later Bethesda’s) Fallout games have always held a special place in the hearts of players. Waits between mainline installments have only grown longer, and there may be plenty of other post-apocalyptic worlds, but folks love the RPG series for…",
            "url": "https://gizmodo.com/fallout-tv-show-prime-video-bethesda-2024-1851066136",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/35fea8787bfa989d21143ce713a3d58f.jpg",
            "publishedAt": "2023-12-02T16:25:00Z",
            "content": "Interplays (and later Bethesdas) Fallout games have always held a special place in the hearts of players. Waits between mainline installments have only grown longer, and there may be plenty of other … [+1989 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Germain Lussier",
            "title": "Dave Filoni Just Got a Bigger, More Important Star Wars Job",
            "description": "It sure seems like there’s gonna be a second season of Ahsoka since its creator, Dave Filoni, just got a big promotion. Filoni is now the chief creative officer of Lucasfilm, which means that he’ll play a much bigger role in the direction Star Wars stories ta…",
            "url": "https://gizmodo.com/dave-filoni-star-wars-job-ahsoka-mandalorian-boba-fett-1851039227",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/88fd0bfc8ac29a0b071e1b94dd5a1b6e.jpg",
            "publishedAt": "2023-11-21T18:15:00Z",
            "content": "It sure seems like theres gonna be a second season of Ahsokasince its creator, Dave Filoni, just got a big promotion. Filoni is now the chief creative officer of Lucasfilm, which means that hell play… [+1838 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Gordon Jackson and James Whitbrook",
            "title": "Updates From Doctor Who, Rick and Morty, and More",
            "description": "Beetlejuice 2 has wrapped filming. Josh Heald is open to returning to the “Miyagi-verse” after Cobra Kai. Walking Dead’s Rick and Michonne spinoff gets a premiere date. Plus, what’s next on Monarch: Legacy of Monsters. Spoilers, away!Read more...",
            "url": "https://gizmodo.com/doctor-who-star-beast-new-trailer-david-tennant-bbc-1851034481",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/c74c37b0aa3caf1bac960185c2f42359.png",
            "publishedAt": "2023-11-20T15:15:00Z",
            "content": "Beetlejuice 2 has wrapped filming. Josh Heald is open to returning to the Miyagi-verse after Cobra Kai. Walking Deads Rick and Michonne spinoff gets a premiere date. Plus, whats next on Monarch: Lega… [+2510 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "Cambridge Dictionary Names ‘Hallucination’ Word of the Year and I’ve Never Felt So Seen",
            "description": "Yesterday, the folks at Cambridge Dictionary named “Hallucination” the word of the year and, Jesus, they really hit the nail on the head. Like, wow. Frankly, this could be the word of the decade, not merely just the last twelve months. By that I mean, the wor…",
            "url": "https://gizmodo.com/cambridge-dictionary-word-of-the-year-hallucination-1851026278",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/8d901f42dcb870d144b2569f63a01043.jpg",
            "publishedAt": "2023-11-16T18:20:00Z",
            "content": "Yesterday, the folks at Cambridge Dictionary named Hallucination the word of the year and, Jesus, they really hit the nail on the head. Like, wow. Frankly, this could be the word of the decade, not m… [+3550 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Justin Carter",
            "title": "Doctor Who is So Thrilled Ncuti Gatwa's Finally Here",
            "description": "For Doctor Who fans, the introduction of a new Doctor is always an event in and of itself. After months of teasing and set photos, yesterday’s third and final 60th anniversary special formally introduced the world to Ncuti Gatwa’s Fifteenth Doctor.Read more...",
            "url": "https://gizmodo.com/doctor-who-ncuti-gatwa-videos-bbc-1851088148",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/aa7337f51128b9b8ed222ff623b885f0.jpg",
            "publishedAt": "2023-12-10T19:15:00Z",
            "content": "For Doctor Whofans, the introduction of a new Doctor is always an event in and of itself. After months of teasing and set photos, yesterdays third and final 60th anniversary special formally introduc… [+3335 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Scientific American"
            },
            "author": "Lori Youmshajekian",
            "title": "Science News Briefs from around the World: December 2023",
            "description": "The explosive secret behind Saturn’s rings, a Scandinavian arrow frozen for 4,000 years, the world's deepest-known virus, and much more in this month’s Quick Hits",
            "url": "https://www.scientificamerican.com/article/science-news-briefs-from-around-the-world-december-2023/",
            "urlToImage": "https://static.scientificamerican.com/sciam/cache/file/51E1C3DA-874B-42AB-AB012BB331C9364C_source.jpeg?w=1200",
            "publishedAt": "2023-11-19T13:00:00Z",
            "content": "CHINA\r\nScientists discovered a previously unknown ninth species of pangolin by using contraband bits of the animals' natural armor confiscated in Hong Kong and Yunnan. The anteaterlike creatures are … [+1641 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "David Pierce",
            "title": "Google finally gives ChatGPT some competition",
            "description": "Plus iMessage for Android, AI images, Resident Evil 4, Disney Plus with Hulu, and more in this week’s edition of the Installer newsletter.",
            "url": "https://www.theverge.com/23993867/google-gemini-chatgpt-beeper-imessage-lego-fortnite-installer-newsletter",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/GoOUX3JUoANyHVgoAg6W0i_-DdM=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/24844605/Installer_Site_Post_001.jpg",
            "publishedAt": "2023-12-10T13:00:00Z",
            "content": "Google finally gives ChatGPT some competition\r\nGoogle finally gives ChatGPT some competition\r\n / Plus, in this weeks Installer: iMessage for Android, AI images, Lego Fortnite, and much more\r\nByDavid … [+12353 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Jyoti Mann",
            "title": "Elon Musk thinks Tesla has 'the best real-world AI,' but an ex-worker raised concerns about how it's powering the Autopilot feature",
            "description": "Whistleblower and former Tesla technician Lukasz Krupski told BBC News that he didn't think its self-driving feature, Autopilot, was ready to be used on public roads.",
            "url": "https://www.businessinsider.com/tesla-employee-self-driving-feature-autopilot-safety-elon-musk-2023-12",
            "urlToImage": "https://i.insider.com/656efaf858e7c0c29a2990ad?width=1200&format=jpeg",
            "publishedAt": "2023-12-05T11:40:28Z",
            "content": "Tesla CEO Elon Musk introducing the Cybertruck in November 2019.Frederic J. Brown/AFP via Getty Images\r\n<ul><li>Elon Musk believes that Tesla has the \"best real-world AI,\" which powers its self-drivi… [+2483 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Germain Lussier",
            "title": "Disney's Robin Hood Is My Wife's Favorite Movie, But Far From Mine",
            "description": "For 50 years, people all over the world have been falling for a fox. No, not Michael J. Fox. Not 20th Century Fox either. We, of course, mean Robin Hood from Disney’s 1973 animated film. The dashing fox with the British accent who robs the rich gives to the p…",
            "url": "https://gizmodo.com/robin-hood-disney-50-anniversary-prince-john-sir-hiss-1851038783",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/2385580409dc464cbcdf99de615fc383.jpg",
            "publishedAt": "2023-11-22T19:00:00Z",
            "content": "For 50 years, people all over the world have been falling for a fox. No, not Michael J. Fox. Not 20th Century Fox either. We, of course, mean Robin Hood from Disneys 1973 animated film. The dashing f… [+5288 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Will Knight, Steven Levy",
            "title": "OpenAI Staff Threaten to Quit Unless Board Resigns",
            "description": "Nearly 500 employees of OpenAI have signed a letter saying they may quit and join Sam Altman at Microsoft unless the startup's board resigns and reappoints the ousted CEO.",
            "url": "https://www.wired.com/story/openai-staff-walk-protest-sam-altman/",
            "urlToImage": "https://media.wired.com/photos/655b5820278d03f191b18f00/191:100/w_1280,c_limit/1778704898",
            "publishedAt": "2023-11-20T13:30:02Z",
            "content": "OpenAI was in open revolt on Monday with 490 employees threatening to leave unless the board resigns and reinstates Sam Altman as CEO, along with cofounder and former president Greg Brockman. Altman … [+2030 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Sabina Graves",
            "title": "Aquaman and the Lost Kingdom's Latest Trailer Prepares the Underwater Royal Family for War",
            "description": "Here’s a new look at Aquaman and the Lost Kingdom, the final feature from Warner Bros.’ last era of DC films before we turn over to James Gunn’s new DC Studios franchise world.Read more...",
            "url": "https://gizmodo.com/aquaman-2-lost-kingdom-dc-new-trailer-jason-momoa-1851036197",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/7ef96e29823c5ea62af9742ef218aee5.png",
            "publishedAt": "2023-11-20T18:25:00Z",
            "content": "Heres a new look at Aquaman and the Lost Kingdom, the final feature from Warner Bros. last era of DC films before we turn over to James Gunns new DC Studios franchise world.\r\nDirected by James Wan, t… [+1197 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Sabina Graves",
            "title": "Wonka's First Reactions Call It Wacky and Whimsical",
            "description": "Wonka—the musical Charlie and the Chocolate Factory prequel—has screened for critics, and the reactions are mixed... but mostly good.Read more...",
            "url": "https://gizmodo.com/wonka-first-reactions-timothee-chalamet-oompa-loompa-1851055858",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/873ab4e6cbe0e46f1345d14bba34c70b.jpg",
            "publishedAt": "2023-11-28T22:05:00Z",
            "content": "Wonkathe musical Charlie and the Chocolate Factory prequelhas screened for critics, and the reactions are mixed... but mostly good.\r\nDirected by Paul King (Paddington) and starring Timothée Chalamet … [+1017 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jess Weatherbed",
            "title": "Adobe’s $20 billion bid for Figma in peril after EU warning",
            "description": "The European Commission has provided Adobe and Figma with a statement of objections that outlines the regulators' anticompetitive concerns regarding the deal.",
            "url": "https://www.theverge.com/2023/11/20/23961096/adobe-figma-acquisition-antitrust-eu-statement-of-objections",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Pd3f_NKALja9CVer0Yl67jDvu1w=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24028621/STK251_Figma_Adobe_K_Radtke_01.jpg",
            "publishedAt": "2023-11-20T10:46:32Z",
            "content": "Adobes $20 billion bid for Figma in peril after EU warning\r\nAdobes $20 billion bid for Figma in peril after EU warning\r\n / The European Commission has issued Adobe with a statement of objections that… [+2997 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Cheryl Eddy",
            "title": "21 New Sci-Fi, Fantasy, and Horror Books Arriving in December",
            "description": "As the end of 2023 approaches, there’s still time to squeeze in more reading—which is where io9 comes in, sharing 21 new sci-fi, fantasy, and horror releases coming out in December, including several anthologies perfect for short-fiction fans.Read more...",
            "url": "https://gizmodo.com/new-december-scifi-horror-fantasy-books-nnedi-okorafor-1850987424",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/0e94129ea33281c0fa503bf80ab92d8f.jpg",
            "publishedAt": "2023-12-01T17:30:00Z",
            "content": "As the end of 2023 approaches, theres still time to squeeze in more readingwhich is where io9 comes in, sharing 21 new sci-fi, fantasy, and horror releases coming out in December, including several a… [+4980 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "VentureBeat"
            },
            "author": "Carl Franzen",
            "title": "Sam Altman fired as OpenAI CEO: the tech world reacts",
            "description": "While many on X cracked jokes alluding to OpenAI's rivalries with Google and other companies, others sought to praise Altman for his role.",
            "url": "https://venturebeat.com/ai/sam-altman-fired-as-openai-ceo-the-tech-world-reacts/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2023/11/cfr0z3n_a_diverse_crowd_of_people_with_curious_facial_expressio_0341eb96-dde8-4947-a276-3643e7be18da.png?w=1200&strip=all",
            "publishedAt": "2023-11-17T23:42:14Z",
            "content": "Are you ready to bring more awareness to your brand? Consider becoming a sponsor for The AI Impact Tour. Learn more about the opportunities here.\r\nOn the heels of the abrupt announcement today from O… [+2930 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Kwan Wei Kevin Tan",
            "title": "At 99, the late Henry Kissinger still worked 15 hours a day and flew around the world on business trips",
            "description": "\"I am convinced that the secret to longevity is being a workaholic,\" said former Google CEO Eric Schmidt, who co-authored a book with Kissinger.",
            "url": "https://www.businessinsider.com/henry-kissinger-was-clocking-15-hour-work-days-at-99-2023-11",
            "urlToImage": "https://i.insider.com/65680ff386933e8fdb2e3b9e?width=1200&format=jpeg",
            "publishedAt": "2023-11-30T05:08:28Z",
            "content": "Henry Kissinger.Michael Loccisano/Getty Images\r\n<ul><li>Even in his old age, Henry Kissinger was still working around the clock.</li><li>The controversial statesman told CBS News that at 99, he was  … [+2170 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Charles Pulliam-Moore",
            "title": "The creators of Monarch: Legacy of Monsters aren’t just trying to make a Godzilla spinoff show",
            "description": "Monarch: Legacy of Monsters co-creators Chris Black and Matt Fraction and director Matt Shakman sit down with The Verge to discuss their new Godzilla show.",
            "url": "https://www.theverge.com/23960969/monarch-legacy-of-monsters-matt-shakman-matt-fraction-chris-black-interview",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/31foJNyYzXdT_qCl_ubRGjo2Nz4=/0x0:2199x1497/1200x628/filters:focal(1694x598:1695x599)/cdn.vox-cdn.com/uploads/chorus_asset/file/25084166/Monarch_Legacy_of_Monsters_Photo_010104.jpg",
            "publishedAt": "2023-11-17T15:15:00Z",
            "content": "Monarch co-creators Chris Black and Matt Fraction and director Matt Shakman open up about why their new MonsterVerse series is so focused on ordinary humans.\r\nByCharles Pulliam-Moore, a reporter focu… [+7365 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Lloyd Lee",
            "title": "Kim Jong Un might be one of the few world dictators who has been seen crying",
            "description": "North Korean leader Kim Jong Un was seen crying on national television during a speech in which he addressed North Korea's declining birthrate.",
            "url": "https://www.businessinsider.com/kim-jong-un-crying-national-birthrate-north-korea-birthrate-dictator-2023-12",
            "urlToImage": "https://i.insider.com/657520d90ec98e92f74dea4f?width=1200&format=jpeg",
            "publishedAt": "2023-12-10T06:52:52Z",
            "content": "A caricature of North Korean leader Kim Jong Un crying is seen in downtown Seoul, South Korea.Lee Jin-man/AP\r\n<ul><li>North Korean leader Kim Jong Un was recently seen crying on national television.<… [+2588 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Inside Putin's carefully choreographed annual news conference",
            "description": "The four-hour TV extravaganza exposed a world where the Kremlin leader is right about everything, writes BBC Russia Editor Steve Rosenberg.",
            "url": "https://www.bbc.co.uk/news/world-europe-67718655",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D4A3/production/_132053445_gettyimages-1847462993.jpg",
            "publishedAt": "2023-12-14T16:21:30Z",
            "content": "For the first time since Russia's full-scale invasion of Ukraine, I'm invited to a Kremlin event. I'm in a room with Vladimir Putin.\r\nAnd 600 other people.\r\nAt an exhibition hall opposite the Kremlin… [+3476 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Aaron Mok",
            "title": "The tech world reacts in shock to Sam Altman's departure from OpenAI",
            "description": "The tech community is expressing their shock, disbelief, and theories on Altman's departure online.",
            "url": "https://www.businessinsider.com/tech-world-shocked-by-sam-altman-leaving-openai-ceo-2023-11",
            "urlToImage": "https://i.insider.com/64917fe120f78100189ff42a?width=1200&format=jpeg",
            "publishedAt": "2023-11-17T22:34:50Z",
            "content": "Ex-CEO Sam Altman has left OpenAI — and the tech community is freaking out.Sven Hoppe/picture alliance via Getty Images\r\n<ul><li>Ex-CEO Sam Altman has left OpenAI — and the tech community is freaking… [+2617 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Israel-Gaza war: The Red Cross's delicate role in hostage crises",
            "description": "The part played by the Red Cross in the Gaza hostage releases has highlighted its unique role.",
            "url": "https://www.bbc.co.uk/news/world-middle-east-67520263",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/54A8/production/_131827612_gettyimages-ronkrivoy1803533482.jpg",
            "publishedAt": "2023-11-27T16:02:15Z",
            "content": "With intense focus on the hostages released by Hamas, a quiet but crucial part has been played by an organisation at the centre of their handover, the International Committee of the Red Cross (ICRC).… [+5219 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "Lee Moran",
            "title": "Mary Trump Stunned By Uncle’s Latest Online Stunt: ‘Absolutely Out Of This World’",
            "description": "\"Even I have never seen anything like it,\" said the former president's niece.",
            "url": "https://www.huffpost.com/entry/mary-trump-donald-trump-videos_n_65645eb9e4b0827ae615188a",
            "urlToImage": "https://img.huffingtonpost.com/asset/647d91b12300004200231c84.jpg?cache=7Os2yZKiZR&ops=1200_630",
            "publishedAt": "2023-11-27T09:56:32Z",
            "content": "Mary Trump thinks there may be something different about her uncle Donald Trumps latest online meltdown.\r\nLast Tuesday, the former president shared 19 talking-to-camera clips in a row on his Truth So… [+3740 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "VentureBeat"
            },
            "author": "Dean Takahashi",
            "title": "LightSpeed LA unveils Last Sentinel open world sci-fi game set in dystopian Tokyo",
            "description": "Lightspeed LA, a division of LightSpeed Studios, unveiled Last Sentinel, an open world experience set in a futuristic Tokyo.",
            "url": "https://venturebeat.com/games/lightspeed-la-unveils-last-sentinel-open-world-sci-fi-game-set-in-dystopian-tokyo/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2023/12/lightspeed-studios.jpg?w=1200&strip=all",
            "publishedAt": "2023-12-08T03:00:28Z",
            "content": "Do you want to get the latest gaming industry news straight to your inbox? Sign up for our daily and weekly newsletters here. \r\nLightspeed LA, a division of LightSpeed Studios, unveiled Last Sentinel… [+4163 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Daniel Cooper",
            "title": "Time to get miserable about the COP28 declaration",
            "description": "The UN has set out a pathway\r\n to avoiding the very worst effects of climate change\r\n. Earlier this week, delegates from around the world ratified a document setting out what we need to do, and when. Even better, the text finally ended the decades-long omerta…",
            "url": "https://www.engadget.com/time-to-get-miserable-about-the-cop28-declaration-174527863.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/auoTT69pHOUTWq6YGGGicQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/0d0d9b10-9a0a-11ee-ab4d-522a489cd62a",
            "publishedAt": "2023-12-14T17:45:27Z",
            "content": "The UN has set out a pathway\r\n to avoiding the very worst effects of climate change\r\n. Earlier this week, delegates from around the world ratified a document setting out what we need to do, and when.… [+10222 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Tom Porter",
            "title": "Argentina's new far-right president Javier Milei is a triumph for Tucker Carlson",
            "description": "The ex-Fox News host has boosted far-right candidates globally on his show on X.",
            "url": "https://www.businessinsider.com/argentina-president-javier-milei-is-triumph-tucker-carlson-trump-fox-2023-11",
            "urlToImage": "https://i.insider.com/655b5ea29c7d23cb3b9d439c?width=1200&format=jpeg",
            "publishedAt": "2023-11-20T15:12:23Z",
            "content": "Tucker Carlson interviews Argentinian far-right presidential candidate Javier Milei in September 2023.Tucker on X\r\n<ul><li>Tucker Carlson interviewed Javier Milei in September, boosting his candidacy… [+3395 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "VentureBeat"
            },
            "author": "Dean Takahashi",
            "title": "Novarama launches United 1944 WWII shooter into early access",
            "description": "Spanish developer Novarama has launched its multiplayer first-person World War II shooter game, United 1944, into early access.",
            "url": "https://venturebeat.com/games/novarama-launches-united-1944-wwii-shooter-into-early-access/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2023/10/united-Key_Art_United_1944-small.jpg?w=1200&strip=all",
            "publishedAt": "2023-12-12T14:00:00Z",
            "content": "Do you want to get the latest gaming industry news straight to your inbox? Sign up for our daily and weekly newsletters here. \r\nSpanish developer Novarama has launched its multiplayer first-person Wo… [+1837 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Jamala: Ukrainian Eurovision winner added to Russia's wanted list",
            "description": "Jamala, the song competition's 2016 winner, is critical of the Kremlin and its invasion of Ukraine.",
            "url": "https://www.bbc.co.uk/news/world-europe-67478220",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12269/production/_129654347_gettyimages-531430132.jpg",
            "publishedAt": "2023-11-20T17:53:48Z",
            "content": "Russia has added Ukrainian Eurovision song contest winner Jamala to its wanted list, according to state media. \r\nThe singer, whose real name is Susana Jamaladinova, has reportedly been accused of spr… [+2092 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Andrew Webster",
            "title": "E3 was a concentrated dose of gaming — and I’m going miss it",
            "description": "The video game industry trade show E3 is officially over for good, leaving behind a space filled by the likes of Summer Game Fest and Nintendo Direct.",
            "url": "https://www.theverge.com/2023/12/12/23998732/e3-eulogy-video-game-trade-show",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/GBxq-vLVeFoF19CO7thQjQ_GvbQ=/0x0:4800x3117/1200x628/filters:focal(2400x1559:2401x1560)/cdn.vox-cdn.com/uploads/chorus_asset/file/25157964/1149360142.jpg",
            "publishedAt": "2023-12-12T21:00:00Z",
            "content": "E3 was a concentrated dose of gaming and Im going miss it\r\nE3 was a concentrated dose of gaming and Im going miss it\r\n / Some of it sucked the lines, the noise, the overpriced coffee but it was also … [+5381 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Grace Eliza Goodwin",
            "title": "How to see and where to watch the Geminid meteor shower at its peak — NASA says skies are ideal for viewing it.",
            "description": "The Geminids meteor shower will reach its peak around the world the night of December 13-14, 2023.",
            "url": "https://www.businessinsider.com/geminid-meteor-shower-when-where-peak-viewing-times-2023-11",
            "urlToImage": "https://i.insider.com/656a34ee47f9ecb37d893c51?width=1200&format=jpeg",
            "publishedAt": "2023-12-02T09:21:01Z",
            "content": "The Geminids meteor shower over China in December, 2021.Xinhua News Agency/Getty Images\r\n<ul><li>The Geminid meteor shower will reach its peak on the night of December 13-14, according to NASA. </li>… [+2180 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Justin Carter",
            "title": "Staz Nair Is a Beast(Master) in New Rebel Moon Clip",
            "description": "Zack Snyder’s Rebel Moon is a Star Wars-alike ensemble film featuring a who’s who of actors you’ve seen pop in and out of genre fair over the last few years. In addition to Sofia Boutella as leading woman Kora, the cast also consists of Djimon Honsou, Doona B…",
            "url": "https://gizmodo.com/rebel-moon-clip-tarak-staz-nair-netflix-1851087830",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/eb3281f97d4f3f3b304e6dece61e9138.jpg",
            "publishedAt": "2023-12-10T15:30:00Z",
            "content": "Zack Snyders Rebel Moonis a Star Wars-alike ensemble film featuring a whos who of actors youve seen pop in and out of genre fair over the last few years. In addition to Sofia Boutella as leading woma… [+1651 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Tom Porter",
            "title": "Biden and Xi are glaringly absent from the UN's climate summit. That doesn't bode well for the world.",
            "description": "The leaders of the world's biggest polluting countries have lost a chance to inject momentum into the talks.",
            "url": "https://www.businessinsider.com/cop28-biden-and-xi-glaringly-absent-from-climate-change-summit-2023-12",
            "urlToImage": "https://i.insider.com/6569c6e958e7c0c29a289ee7?width=1200&format=jpeg",
            "publishedAt": "2023-12-01T13:06:25Z",
            "content": "Chinese President Xi Jinping and U.S. President Joe Biden take a walk after their talks in the Filoli Estate in the U.S. state of California, Nov. 15, 2023.Xinhua News Agency\r\n<ul><li>World leaders a… [+4195 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hackaday"
            },
            "author": "Jonathan Bennett",
            "title": "This Week in Security: Owncloud, NXP, 0-Days, and Fingerprints",
            "description": "We’re back! And while the column took a week off for Thanksgiving, the security world didn’t. The most pressing news is an issue in Owncloud, that is already under active exploitation. …",
            "url": "https://hackaday.com/2023/12/01/this-week-in-security-owncloud-nxp-0-days-and-fingerprints/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2016/01/darkarts.jpg",
            "publishedAt": "2023-12-01T15:00:09Z",
            "content": "We’re back! And while the column took a week off for Thanksgiving, the security world didn’t. The most pressing news is an issue in Owncloud, that is already under active exploitation.\r\nThe problem i… [+6625 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Andrew Lloyd",
            "title": "A CEO predicted what working culture will look like in 2030 and it's excellent news for millennials and Gen Z",
            "description": "Karl Treacher, CEO of the Culture Institute of Australia, believes that by 2030 there'll be more of a focus on mental health, and increased flexibility for workers.",
            "url": "https://www.businessinsider.com/ceo-predicts-2030-working-culture-gen-z-millennials-2023-12",
            "urlToImage": "https://i.insider.com/65731b0c7a3c8094d5daeeb2?width=1200&format=jpeg",
            "publishedAt": "2023-12-08T20:19:14Z",
            "content": "The future workplace could see more of a focus on employee mental health and wellbeing.Getty/Luis Alvarez\r\n<ul><li>A CEO gave his take on what working life will look like in the future.</li><li>Karl … [+4687 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fs.blog"
            },
            "author": "Farnam Street",
            "title": "Stop Reading News",
            "description": "Reading the news doesn't make us informed, just the opposite. And our obsession with being informed makes it hard to think long term.",
            "url": "https://fs.blog/stop-reading-news/",
            "urlToImage": "https://149664534.v2.pressablecdn.com/wp-content/uploads/2013/12/Stop-reading-news.png",
            "publishedAt": "2023-12-12T05:01:50Z",
            "content": "Our obsession with being informed makes it hard to think long-term. We spend hours consuming news because we want to be informed. The problem is, the news doesn’t make us informed – quite the opposit… [+7020 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Marcel Louis-Jacques",
            "title": "Inside the quirky, comedic, authentic world of Mike McDaniel",
            "description": "Whether it's racing a TV cameraperson off the field or admiring a reporter's shoes, the Dolphins coach brings a breath of fresh air into the NFL coaching ranks.",
            "url": "https://www.espn.com/nfl/story/_/id/38939205/how-dolphins-head-coach-mike-mcdaniel-keeps-things-authentic",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1120%2Fr1255648_1296x729_16%2D9.jpg",
            "publishedAt": "2023-11-21T11:00:11Z",
            "content": "MIAMI -- As the NFL descended on PSD Bank Arena in Frankfurt, Germany, earlier this month, the Miami Dolphins' communication staff had to adapt, because the home of fourth-tier German soccer club FSV… [+12353 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mloh@businessinsider.com (Matthew Loh,Erin Snodgrass)",
            "title": "Bill Gates thought the internet would make all of us more responsible, but he realized it just helped 'a critical mass of crazy people' find each other",
            "description": "Gates said tech leaders like him believed the internet would drive people to be more rational and factual, and encourage \"Socratic debate.\"",
            "url": "https://www.businessinsider.com/bill-gates-microsoft-internet-artificial-intelligence-crazy-people-critical-mass-2023-12",
            "urlToImage": "https://i.insider.com/65729c6c0ec98e92f74d6165?width=1200&format=jpeg",
            "publishedAt": "2023-12-08T04:57:57Z",
            "content": "Bill Gates said he was originally expecting the internet to make the world a more fact-based, rational place, but has come to realize it's become a tool for disinformation and \"crazy ideas.\"\r\n\"I will… [+1813 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "Sam Altman's return to OpenAI doesn't necessarily mean a return to normalcy",
            "description": "Sam Altman is back at the helm of OpenAI. But it might not mean a return to normalcy for the buzzy startup, or the wider AI world.",
            "url": "https://www.businessinsider.com/news-today-november-22-sam-altman-openai-return-tech-ai-2023-11",
            "urlToImage": "https://i.insider.com/655e0d829c7d23cb3b9ea390?width=1200&format=jpeg",
            "publishedAt": "2023-11-22T14:52:37Z",
            "content": "Justin Sullivan/Getty Images\r\n<ul>\n<li>This post originally appeared in the Insider Today newsletter.</li>\n<li>You can sign up for Insider's daily newsletter here.</li>\n</ul>Hello! To our US readers:… [+8103 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Rachel Martin",
            "title": "This Palestinian American professor leans on his Quaker faith during conflict",
            "description": "Here's how one professor holds on to the pacifism and silent meditation espoused by Quakers when the world feels like it's on fire.",
            "url": "https://www.npr.org/2023/12/03/1216138611/this-palestinian-american-professor-leans-on-his-quaker-faith-during-conflict",
            "urlToImage": "https://media.npr.org/assets/img/2023/12/01/atshan-pic_wide-5108786c5df5ec2b9f5b302eda6143b23328228d-s1400-c100.jpg",
            "publishedAt": "2023-12-03T11:00:52Z",
            "content": "Sa'ed Atshan says his commitment to pacifism and Quakerism is a spiritual anchoring in his life.\r\nSwarthmore College\r\nThis project was intentionally designed to exist outside of the news cycle.\r\nI wa… [+12188 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Substack.com"
            },
            "author": "Michael Spencer",
            "title": "Microsoft Is Eating the World",
            "description": "If OpenAI was a public company, it's stock would have been down about 38% today in a shocking turn of events.",
            "url": "https://aisupremacy.substack.com/p/microsoft-is-eating-the-world",
            "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F66eeb1ee-90e4-4928-a4e9-d636558f1a62_760x443.jpeg",
            "publishedAt": "2023-11-20T14:38:59Z",
            "content": "Hey Everyone, \r\nAI is eating itself. \r\nShare\r\nMore than 5 years after the paper by Google researchers that would transform the world, we are now at a crossroads. \r\nSam Altmans exit from the CEO of Op… [+2854 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "andrew.myrick@futurenet.com (Andrew Myrick)",
            "title": "Not for Nothing, Apple finally made a decision that benefits everyone else",
            "description": "Much of the Android world has been begging Apple to adopt RCS, and we're finally getting what we've wanted.",
            "url": "https://www.androidcentral.com/apps-software/apple-supporting-rcs-benefits-everyone",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/KratWyJjKLSwCZFK2DqRVP-1200-80.jpg",
            "publishedAt": "2023-11-17T07:00:05Z",
            "content": "What a wacky and wild ride it's been for the past few years. In case you missed the news, Apple has announced that it will be adopting RCS (Rich Communication Services) \"later next year.\" This is jus… [+9021 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Former OpenAI boss Sam Altman boss pictured at firm's HQ amid reports of return",
            "description": "Sam Altman posts a selfie from the firm's US head office 48 hours after his shock ouster from the company.",
            "url": "https://www.bbc.co.uk/news/business-67470614",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2715/production/_129750001_1dd1b383d243c38a83f27d131f562f525931fc1f.jpg",
            "publishedAt": "2023-11-19T23:34:17Z",
            "content": "The ex-boss of leading artificial intelligence firm OpenAI has posted a picture of himself at its HQ, following reports he is set to return after being sacked on Friday.\r\nIn the post on X, formerly T… [+2115 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "AP",
            "title": "Army Air Force Gunner’s Remains ID’d Nearly 80 Years After His Death",
            "description": "Staff Sgt. Franklin P. Hall, of Leesburg, Florida, was 21 when the heavy bomber he was flying in was shot down over France during World War II.",
            "url": "https://www.huffpost.com/entry/ap-us-missing-airman-remains_n_65651aa8e4b0f35896f70271",
            "urlToImage": "https://img.huffingtonpost.com/asset/65651b372200005117cf038a.png?cache=HbvL3wUguc&ops=1200_630",
            "publishedAt": "2023-11-27T22:48:44Z",
            "content": "The remains of Staff Sgt. Franklin P. Hall, 21, of Leesburg, Florida, have been identified 80 years after the heavy bomber he was flying in was shot down over France during World War II.\r\nWASHINGTON … [+3806 chars]"
        },
        {
            "source": {
                "id": "vice-news",
                "name": "Vice News"
            },
            "author": "Matthew Gault, Jordan Pearson",
            "title": "How Online Fights Affect Real World Battlefields",
            "description": "Israel’s latest war is a case study in how online propaganda shapes modern conflict.",
            "url": "https://www.vice.com/en/article/wxjb9n/how-online-fights-affect-real-world-battlefields",
            "urlToImage": "https://video-images.vice.com/articles/656a1b29ad1b933d64c9baef/lede/1701452848418-gettyimages-1814795432.jpeg?image-resize-opts=Y3JvcD0xeHc6MC45MjA1eGg7MHh3LDAuMDc5NXhoJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg",
            "publishedAt": "2023-12-04T14:00:00Z",
            "content": "Your posts matter more than you think. Social media has changed the way wars are fought and the internet has become a new battlefield. \r\nTwitter may be dying, but it still matters an awful lot to pol… [+741 chars]"
        },
        {
            "source": {
                "id": "hacker-news",
                "name": "Hacker News"
            },
            "author": null,
            "title": "How many people on Hacker News live in rural areas?",
            "description": "Comments",
            "url": "https://news.ycombinator.com/item?id=38342297",
            "urlToImage": null,
            "publishedAt": "2023-11-20T04:35:14Z",
            "content": "I was born and live in Western Australia, a state almost half the land area of Australia, three times larger than Texas, with a population of ~ 2 million most of whom live in and around the one big c… [+726 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "Nick Visser",
            "title": "UN Climate Summit On ‘Verge Of Complete Failure,’ Al Gore Says",
            "description": "\"There are 24 hours left to show whose side the world is on,\" the environmentalist said.",
            "url": "https://www.huffpost.com/entry/al-gore-cop28-climate-summit-united-nations_n_6577f063e4b0db9d2ab6c8c6",
            "urlToImage": "https://img.huffingtonpost.com/asset/6577f07c2300003200c0adc2.jpeg?cache=767nCTrbyO&ops=1200_630",
            "publishedAt": "2023-12-12T09:27:06Z",
            "content": "Former Vice President Al Gore said the United Nations annual climate conference is on the verge of complete failure with world leaders set to adopt an agreement that doesnt include a pledge to eventu… [+5992 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Polly Thompson",
            "title": "Nvidia's CEO is working hard to convince everyone that AI is safe, following the drama at OpenAI",
            "description": "CEO Jensen Huang told BBC News he has \"every confidence\" in the AI community's ability to develop the technology safely.",
            "url": "https://www.businessinsider.com/nvidia-ceo-jensen-huang-ai-safety-openai-2023-12",
            "urlToImage": "https://i.insider.com/657045667a3c8094d5d9fd7e?width=1200&format=jpeg",
            "publishedAt": "2023-12-06T13:57:29Z",
            "content": "Jensen Huang, cofounder and CEO of Nvidia.I-HWA CHENG/AFP via Getty Image\r\n<ul><li>The OpenAI chaos raised big concerns about AI safety and the firms profiting from its development.</li><li>Nvidia CE… [+2263 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Nathan Rennolds",
            "title": "WHO questions China about a mystery illness linked to pneumonia as hospitals fill with sick children",
            "description": "Beijing has said that there were no new or unusual pathogens causing the illnesses, the South China Morning Post reported.",
            "url": "https://www.businessinsider.com/who-requests-data-china-mystery-illness-affecting-children-2023-11",
            "urlToImage": "https://i.insider.com/6561da11fe5bc6545ebbde3b?width=1200&format=jpeg",
            "publishedAt": "2023-11-25T12:07:21Z",
            "content": "Beijing, China.Martin Puddy/Getty Images\r\n<ul><li>The World Health Organization has requested more information from China about an illness affecting children.</li><li>Chinese authorities reported an … [+2633 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "North Korea: Kim Jong Un celebrates 'space power' after spy satellite launch",
            "description": "North Korea calls its satellite launch a success - but South Korea says it is not known if it is working.",
            "url": "https://www.bbc.co.uk/news/world-asia-67517260",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AEEC/production/_131808744_acfff285b0a398a603b3322d06c0afa3671023fb.jpg",
            "publishedAt": "2023-11-24T12:19:19Z",
            "content": "North Korea's leader Kim Jong Un has congratulated his team of scientists for launching a spy satellite, calling it a \"new era of space power\".\r\nHe described the mission as a \"fully fledged exercise … [+2090 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Thailand: Bus crash kills 14 and splits vehicle in half",
            "description": "Thailand has one of the world's highest road accident rates and thousands die every year.",
            "url": "https://www.bbc.co.uk/news/world-asia-67621798",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10AF6/production/_131924386_whatsappimage2023-12-05at11.50.01am.jpg",
            "publishedAt": "2023-12-05T06:21:00Z",
            "content": "Fourteen people have died in Thailand after a double-decker bus veered off the road and smashed into a tree.\r\nPhotos online show the bus leaning on its side and its front split in half, with parts of… [+2067 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Emma Bowman",
            "title": "Pantone's color of the year is 'Peach Fuzz'",
            "description": "The color consultancy says the \"gentle\" peach tone highlights our desire for closeness, compassion and well-being. The orange-pink hue is meant to bring comfort and beauty to a digital world.",
            "url": "https://www.npr.org/2023/12/07/1217877988/pantone-2024-color-peach-fuzz",
            "urlToImage": "https://media.npr.org/assets/img/2023/12/07/1_pan_coy_hero_white_2023_11-15_wide-004ed9b6ec8c1d7618fe19f18c3a4b043e853a22-s1400-c100.jpg",
            "publishedAt": "2023-12-07T22:43:10Z",
            "content": "An influential color consultancy has already set the tone for the year ahead: Pantone's Color of the Year for 2024 is Peach Fuzz.\r\nPantone\r\nThe world's authority on color has spoken: 2024 is the year… [+3052 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Henry Kissinger's Cambodia legacy of bombs and chaos",
            "description": "Henry Kissinger died aged 100 this week. His policies caused widespread destruction in Cambodia.",
            "url": "https://www.bbc.co.uk/news/world-asia-67582813",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C922/production/_131909415_mediaitem131890772.jpg",
            "publishedAt": "2023-12-03T00:46:04Z",
            "content": "When news of Henry Kissinger's death spread this week, many former world leaders lined up to pay tribute. \r\nFormer US President George W Bush said the US had \"lost one of the most dependable and dist… [+6423 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kotaku"
            },
            "author": "Levi Winslow",
            "title": "Nintendo Cancels Major Live Event In Japan After Threats",
            "description": "A major live Nintendo event for early 2024 has been canceled following threats against attendees and staff, the company has announced, expunging world championship tournaments for games like Mario Kart 8 and Splatoon 3.Read more...",
            "url": "https://kotaku.com/nintendo-live-japan-2024-canceled-threats-splatoon-1851080146",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/df1d099bbfcb76337ee8bdd3af3b2f32.jpg",
            "publishedAt": "2023-12-07T15:00:00Z",
            "content": "A major live Nintendo event for early 2024 has been canceled following threats against attendees and staff, the company has announced, expunging world championship tournaments for games like Mario Ka… [+1656 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "Good news and bad news for people waiting on a MacBook with built-in 5G",
            "description": "If you’ve been patiently waiting for Apple to release a MacBook equipped with cellular connectivity, I have good and bad news for you today. The good news is that this is something on Apple’s roadmap, but the bad news is we’re years away from it actually beco…",
            "url": "https://9to5mac.com/2023/11/20/5g-macbook-release-rumors/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/10/14-inch-MacBook-Pro.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-11-20T14:58:35Z",
            "content": "If you’ve been patiently waiting for Apple to release a MacBook equipped with cellular connectivity, I have good and bad news for you today. The good news is that this is something on Apple’s roadmap… [+2709 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Fox News Staff",
            "title": "Fox News AI Newsletter: Retailers using AI to help you buy the right size",
            "description": "Stay up to date on the latest AI technology advancements and learn about the challenges and opportunities AI presents now and for the future.",
            "url": "https://www.foxnews.com/tech/fox-news-ai-newsletter-retailers-using-ai-help-buy-right-size",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/AI-Sizing-Shopping.jpg",
            "publishedAt": "2023-12-13T15:46:51Z",
            "content": "BUY SMARTER: Major retailers use AI to slash number of clothing returns when shopping online. Continue reading\r\nUNPLUGGED FROM SOCIETY: Experts warn new tech could cause people to withdraw socially. … [+1339 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "SETH BORENSTEIN / AP",
            "title": "World Must Cut Emissions By 42% by 2030 to Meet 1.5C Paris Goal",
            "description": "This year earth got a taste of what’s to come with rising global temperatures, warns the U.N. Emissions Gap report.",
            "url": "https://time.com/6337602/un-emissions-gap-report-paris-climate-goal/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2023/11/un-emissions-gap-report-climate-change.jpg?quality=85",
            "publishedAt": "2023-11-20T15:47:46Z",
            "content": "The globe is speeding to 2.5 to 2.9 degrees Celsius (4.5 to 5.2 degrees Fahrenheit) of global warming since pre-industrial times, set to blow well past the agreed-upon international climate threshold… [+4694 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "The Associated Press",
            "title": "Russian court extends Evan Gershkovich's detention until the end of January",
            "description": "A court extended the detention of the Wall Street Journal reporter, arrested on espionage charges, until Jan. 30, Russian news agencies reported. Gershkovich and the Journal deny the allegations.",
            "url": "https://www.npr.org/2023/11/28/1215557209/russia-evan-gershkovich-wall-street-journal-reporter-detention-extended",
            "urlToImage": "https://media.npr.org/assets/img/2023/11/28/ap23332275733382_wide-47767b940c66fdc2b98ce5d60d949aff7627dedc-s1400-c100.jpg",
            "publishedAt": "2023-11-28T15:55:31Z",
            "content": "Wall Street Journal reporter Evan Gershkovich stands in a glass cage in a courtroom at the Moscow City Court in Moscow, on Oct. 10. A court in Moscow on Tuesday extended his detention until Jan. 30, … [+1781 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Sabina Graves",
            "title": "Robert Pattinson Went Full Bird for Miyazaki's The Boy and the Heron",
            "description": "When Hayao Miyazaki announced that The Boy and the Heron might be his last picture, Studio Ghibli’s U.S. distributor GKIDS knew it had a big task ahead, assembling a very special dub cast for the English-language version of the film.Read more...",
            "url": "https://gizmodo.com/robert-pattinson-boy-and-the-heron-ghibli-miyazaki-dub-1851081654",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/805f62acea4c07c074937c76491faa28.png",
            "publishedAt": "2023-12-07T21:00:00Z",
            "content": "When Hayao Miyazaki announced that The Boy and the Heronmight be his last picture, Studio Ghiblis U.S. distributor GKIDS knew it had a big task ahead, assembling a very special dub cast for the Engli… [+4572 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Gordon Jackson and James Whitbrook",
            "title": "Updates From Deadpool 3, Doctor Who, and More",
            "description": "James Wan wants to return to horror again after Aquaman 2. Jennifer Love Hewitt would be down for more I Know What You Did Last Summer. Plus, what’s coming on Rick & Morty’s season finale, and the last episode of Archer. To me, my spoilers!Read more...",
            "url": "https://gizmodo.com/deadpool-3-morena-baccarin-copycat-marvel-fox-x-men-mcu-1851088132",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/8082ea408aaa7c055d7a3b78e52f0a0d.png",
            "publishedAt": "2023-12-11T15:15:00Z",
            "content": "James Wan wants to return to horror again after Aquaman 2. Jennifer Love Hewitt would be down for more I Know What You Did Last Summer. Plus, whats coming on Rick &amp; Mortys season finale, and the … [+3741 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "EditorDavid",
            "title": "Is There a Mass Exodus of Former Silicon Valley Tech Companies From Austin, Texas?",
            "description": "\"Over the years, Austin has seen a huge migration of tech companies moving to the city, from billionaire owners of Twitter (X) to the largest search engine in the world,\" according to a local news site in Texas. \n\n\"But many startups are now choosing to leave …",
            "url": "https://news.slashdot.org/story/23/12/11/0043208/is-there-a-mass-exodus-of-former-silicon-valley-tech-companies-from-austin-texas",
            "urlToImage": "https://a.fsdn.com/sd/topics/usa_64.png",
            "publishedAt": "2023-12-11T00:46:00Z",
            "content": "\"Over the years, Austin has seen a huge migration of tech companies moving to the city, from billionaire owners of Twitter (X) to the largest search engine in the world,\" according to a local news si… [+1263 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Gordon Jackson and James Whitbrook",
            "title": "Updates From Godzilla x Kong, Sonic 3, and More",
            "description": "Jennifer Garner dances around whether or not she’ll return to Elektra in Deadpool 3. Jodie Comer faces the apocalypse in a new trailer for The End We Start From. Plus, Netflix offers a glimpse of Sandman’s return, and Noah Hawley talks about the endgame of hi…",
            "url": "https://gizmodo.com/godzilla-x-kong-poster-monsterverse-ccxp-2023-1851058384",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/b480d59d99ee9630e341d54498fc4660.png",
            "publishedAt": "2023-11-30T15:15:00Z",
            "content": "Jennifer Garner dances around whether or not shell return to Elektra in Deadpool 3. Jodie Comer faces the apocalypse in a new trailer for The End We Start From. Plus, Netflix offers a glimpse of Sand… [+3848 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Justin Carter",
            "title": "Steven Yeun Might Be The Sentry in Marvel's Thunderbolts",
            "description": "Last year, Marvel revealed it had a movie in the works for the Thunderbolts, a team of villains and antiheroes trying to redeem themselves. While the main cast consists of MCU mainstays like Sebastian Stan’s Winter Soldier and relative newcomers in Florence P…",
            "url": "https://gizmodo.com/steven-yeun-thunderbolts-sentry-role-mcu-1851033630",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d7e9fa3ab97418be5102209ea2f22b01.jpg",
            "publishedAt": "2023-11-18T19:15:00Z",
            "content": "Last year, Marvel revealed it had a movie in the works for the Thunderbolts, a team of villains and antiheroes trying to redeem themselves. While the main cast consists of MCU mainstays like Sebastia… [+3271 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Justin Carter",
            "title": "Star Trek's Tawny Newsome Looks Back on Mariner's Reluctant Hero's Journey",
            "description": "Star Trek: Lower Decks has been a riot since its first season, and Tawny Newsome’s Beckett Mariner is a big reason why. Over the course of the show’s four-season run, she’s gone from being a chaotic, self-destructive ensign to...well, still that, but now prom…",
            "url": "https://gizmodo.com/star-trek-lower-decks-tawney-newsome-marine-season-4-1851034468",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/26a18f95035ef8f696cbebc1dfa66fd1.jpg",
            "publishedAt": "2023-11-19T17:25:00Z",
            "content": "Star Trek: Lower Decks has been a riot since its first season, and Tawny Newsomes Beckett Mariner is a big reason why. Over the course of the shows four-season run, shes gone from being a chaotic, se… [+2750 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Boing Boing"
            },
            "author": "Mark Frauenfelder",
            "title": "Homeless people \"want to wander around and live in tents on the sidewalk\" says Fox News' Jesse Watters",
            "description": "\"Homelessness isn't about lack of affordable housing. It's about drug addicts that want to wander around and live in tents on the sidewalk,\" said Fox News' Jesse Watters in a recent diatribe.\n\n\n\n\"You can't coddle antisocial behavior,\" he smirked, remarkably u…",
            "url": "https://boingboing.net/2023/11/16/homeless-people-want-to-wander-around-and-live-in-tents-on-the-sidewalk-says-fox-news-jesse-watters.html",
            "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/07/jesse-watters.jpeg?fit=1200%2C715&ssl=1",
            "publishedAt": "2023-11-16T19:00:46Z",
            "content": "\"Homelessness isn't about lack of affordable housing. It's about drug addicts that want to wander around and live in tents on the sidewalk,\" said Fox News' Jesse Watters in a recent diatribe.\r\n\"You c… [+1710 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "James Whitbrook",
            "title": "Doctor Who Has Released an Official Recipe for Its Horrifying Curry",
            "description": "When Doctor Who returned to our screens this past weekend in “The Star Beast,” it brought with it all sorts of weird and occasionally fearsome threats, from the mischievous Meep to the insectoid Wrarth Warriors. But perhaps nothing could send you scurrying be…",
            "url": "https://gizmodo.com/doctor-who-how-to-make-tuna-madras-official-recipe-bbc-1851067290",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/7cf50f7b24be896ac6f70adf787062e0.jpg",
            "publishedAt": "2023-12-02T01:00:00Z",
            "content": "When Doctor Whoreturned to our screens this past weekend in The Star Beast, it brought with it all sorts of weird and occasionally fearsome threats, from the mischievous Meep to the insectoid Wrarth … [+3268 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Germain Lussier",
            "title": "Chris Evans Denies Avengers Return, as if He Could Say Anything Else",
            "description": "The first rule of playing a superhero is deny, deny, deny. Is there a rumor going around about your character? Is that rumor true? Don’t sweat it. Simply lie about it for fear of ruining the surprise. Read more...",
            "url": "https://gizmodo.com/chris-evans-captain-america-return-avengers-marvel-mcu-1851051307",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1749691af8bbb57afdbf7447fdd51c61.jpg",
            "publishedAt": "2023-11-28T00:20:00Z",
            "content": "The first rule of playing a superhero is deny, deny, deny. Is there a rumor going around about your character? Is that rumor true? Dont sweat it. Simply lie about it for fear of ruining the surprise.… [+2384 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Stephanie Zacharek",
            "title": "Fallen Leaves Is a Quiet Masterpiece About Tenderness in a Cold World",
            "description": "The 20th movie from Aki Kaurismäki, Finland’s most renowned director, reopens our eyes to everyday miracles.",
            "url": "https://time.com/6335626/fallen-leaves-review/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2023/11/Kuolleetlehdet_03_photo_Malla_Hukkanen_c_Sputnik.jpg?quality=85",
            "publishedAt": "2023-11-17T19:32:27Z",
            "content": "Sometimes small miracles appear in the form of movies. This is a type of mysticism even more radical than your random saintly phenomenon, like stigmata or the blocking of the sun, because movies are … [+5835 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kotaku"
            },
            "author": "Kotaku Bot",
            "title": "Kotaku’s Opinions For The Week November 18, 2023",
            "description": "Gamers are a passionate bunch, and we’re no exception. These are the week’s most interesting perspectives on the wild, wonderful, and sometimes weird world of video game news.Read more...",
            "url": "https://kotaku.com/kotaku-s-opinions-for-the-week-november-18-2023-1851032509",
            "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/c43f4c7f2aa83cbe2b9e8d727001eee9.jpg",
            "publishedAt": "2023-11-18T16:50:12Z",
            "content": "Gamers are a passionate bunch, and were no exception. These are the weeks most interesting perspectives on the wild, wonderful, and sometimes weird world of video game news.\r\nThis is Lars Wingefors, … [+2239 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ReadWrite"
            },
            "author": "Paul McNally",
            "title": "GTA VI trailer incoming – Rockstar ready to break the internet",
            "description": "After almost a decade, the gaming world is about to get a look at the first trailer for Grand Theft […]\nThe post GTA VI trailer incoming – Rockstar ready to break the internet appeared first on ReadWrite.",
            "url": "https://readwrite.com/gta-vi-trailer-incoming-rockstar-ready-to-break-the-internet/",
            "urlToImage": "https://readwrite.com/wp-content/uploads/2023/12/trailer1.png",
            "publishedAt": "2023-12-01T15:11:42Z",
            "content": "After almost a decade, the gaming world is about to get a look at the first trailer for Grand Theft Auto VI and rarely has a video game event been so eagerly awaited.\r\n2023 has seen some huge release… [+2015 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Chloe Veltman",
            "title": "10 years ago, Batkid was battling bad guys and cancer — now he's 15 and healthy",
            "description": "On Nov. 15, 2013, Miles Scott, a 5-year-old with leukemia, won hearts around the world when he became a superhero for a day with help from the Make-A-Wish Foundation.",
            "url": "https://www.npr.org/2023/11/15/1213035528/10-years-ago-batkid-was-battling-bad-guys-and-cancer-now-hes-15-and-healthy",
            "urlToImage": "https://media.npr.org/assets/img/2023/11/14/img-196_wide-930cc6fd5b364f8b5e5c9fa52e62b826a9d28871-s1400-c100.jpg",
            "publishedAt": "2023-11-15T14:10:17Z",
            "content": "Batkid Miles Scott, center, received a key to the city from San Francisco Mayor Ed Lee, left, on Nov. 15, 2023.\r\nMake-A-Wish Foundation\r\nToday, Miles Scott is a healthy teenager with a passion for ba… [+3842 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Lakshmi Varanasi",
            "title": "The tech community says Altman's ouster is a 'hostile takeover' and a 'coup.' Here's what we know.",
            "description": "The details around what precipitated Altman's sudden dismissal from OpenAI are still fuzzy. But some are already calling it a 'coup.'",
            "url": "https://www.businessinsider.com/openai-sam-altman-fired-coup-silicon-valley-greg-brockman-2023-11",
            "urlToImage": "https://i.insider.com/655905019c7d23cb3b9d1641?width=1200&format=jpeg",
            "publishedAt": "2023-11-18T18:40:08Z",
            "content": "Sam Altman, now the former CEO of OpenAI, was ousted in what some call a \"coup.\"Lucy Nicholson/Reuters\r\n<ul><li>OpenAI sent shockwaves through the tech world Friday when its board ousted Sam Altman a… [+3540 chars]"
        }
    ]
}

export {pageSearchOptions,testArticleArray, getBreakingNews,getNews,getNewsDemo,getBreakingNewsDemo}; 