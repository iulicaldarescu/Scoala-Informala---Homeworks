const url = "https://rickandmortyapi.com/api/character";
let characterId = document.getElementById('characterId');
let showCharacterButton = document.querySelector('.btn');
let character = document.querySelector('.character');
let id;
let table = document.querySelector('.table');

// function assignParagraph(result,div ){
//     let paragraph = document.createElement('p');
//     paragraph.textContent = result;
//     div.appendChild(paragraph);
// }


function getValueFromId(){
    id = Number(characterId.value);
    return id;
}

function makeInputEmpty(){
   characterId.value = '';
}



const getCharacter = async function(baseUrl, id = ''){
    const characterArray = [];

    const response = await fetch((baseUrl + '/' + id));
    const getData = await response.json();

    
    const characterImage = document.createElement('img');
    characterImage.src = getData.image;
    
    // assignParagraph(findCharacter, character);
    characterArray.push(getData.id, getData.name, getData.location.name, getData.status, getData.species, getData.gender, characterImage);

    let tr = document.createElement('tr');
    table.appendChild(tr);
    
    for(let i = 0; i < characterArray.length; i++){
        

        if(i === 6){
            tr.appendChild(characterImage);
            characterImage.classList.add('customPicture');
            
        }else {
            let td = document.createElement('td');
            td.classList.add('customCell');
            td.textContent = characterArray[i];
            tr.appendChild(td);
        }
    }
   

}


showCharacterButton.addEventListener('click', function(){
   if(getValueFromId() === 0){
    console.log('Character id cannot be 0')
   }

    getCharacter(url, getValueFromId());
    makeInputEmpty();
})


