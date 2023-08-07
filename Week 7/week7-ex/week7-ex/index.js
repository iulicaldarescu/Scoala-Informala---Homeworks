// Create the following functions:
// A generic function that uses fetch to GET an URL and return the responses
// A function that can GET all characters or a single character (endpoint: https://rickandmortyapi.com/documentation/#character) - needs to call the generic function
// A function that can GET all locations or a single location (endpoint: https://rickandmortyapi.com/documentation/#location) - needs to call the generic function
// A function that can GET all episodes or a single episode (endpoint: https://rickandmortyapi.com/documentation/#episode) - needs to call the generic function



// Function usages:
// Call the character function to fetch all characters and 3 individual calls to get a single character
// Call the location function to fetch all characters and 3 individual calls to get a single location
// Call the episode function to fetch all episodes and 3 individual calls to get a single episode

const baseUrl = "https://rickandmortyapi.com/api";
const charactersPath = "/character";
const locationsPath = "/location";
const episodePath = "/episode";


const getData = function(url, path, id = ''){
    return fetch(url + path + id)
    .then(function(response){
        return response.json()
    })
    
}


// log all character names

// let getCharacters = getData(baseUrl, charactersPath)
// .then(function(result){
//     let savedResults;
//     savedResults = result.results;
//     return savedResults;
// })
// .then(function(savedResults){
//     savedResults.forEach(character => {
//         console.log(character.name)
//         return character.name;
//     });
// })



//log a character after id nr

// let getCharacter1 = getData(baseUrl, charactersPath, '/' + 1)
// .then(function(result){
//     console.log(result.name);
// }) 

// let getCharacter15 = getData(baseUrl, charactersPath, '/' + 15)
// .then(function(result){
//     console.log(result.name);
// }) 


// let getCharacter50 = getData(baseUrl, charactersPath, '/' + 50)
// .then(function(result){
//     console.log(result.name);
// }) 


// Get all locations

// let getLocations = getData(baseUrl, locationsPath)
// .then(function(result){
//     let savedResults = result.results;
//     console.log(savedResults);
//     return savedResults;
// })
// .then(function(savedResults){
//     savedResults.forEach(results => {
//         console.log(results.dimension);
//     });
// })




//get location by Id no


// let getLocation9 = getData(baseUrl, locationsPath, '/' + 9)
// .then(function(result){
//     console.log(result.dimension);
// })

// let getLocation60 = getData(baseUrl, locationsPath, '/' + 60)
// .then(function(result){
//     console.log(result.dimension);
// })


// let getLocation42 = getData(baseUrl, locationsPath, '/' + 42)
// .then(function(result){
//     console.log(result.dimension);
// })




//get episodes

let getEpisode = getData(baseUrl, episodePath)
.then(function(results){
    let savedResults = results.results;
    return savedResults;
})
.then(function(savedResults){
    savedResults.forEach(episodes => {
        console.log(episodes.episode)
    });
})


//get episodes by id

let getEpisodeId5 = getData(baseUrl, episodePath, '/' + 5)
.then(function(results){
    console.log(results.episode);
})

let getEpisodeId9 = getData(baseUrl, episodePath, '/' + 9)
.then(function(results){
    console.log(results.episode);
})

let getEpisodeId23 = getData(baseUrl, episodePath, '/' + 23)
.then(function(results){
    console.log(results.episode);
})










































// getData(baseUrl)
//   .then(function(data){
//     savedResults = data.results;
//     return savedResults;

//   })
//   .then(function(savedResults){
//     savedResults.forEach(function(character){
//         console.log(character.name)
//     })
//   })
    // savedResults.forEach(character => {
    //     console.log(character.name)
    // });




//   function getCharacters(results){
//     results.forEach(function(character){
//         console.log(character);
//     })
        
    
//   }

 







   





