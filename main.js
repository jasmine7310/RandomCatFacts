async function getCatFact(){
    await clearElements();
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    let apiUrl = `https://meowfacts.herokuapp.com/?count=${randomNumber}`;
    let response = await fetch(apiUrl).catch(err => console.error(err));
    let json = await response.json();
    
    let entries = json.data;
    console.log(entries);

    for (entry of entries){
        let item = document.createElement("p");
        item.innerHTML = `<h2>${entry}</h2>`; 
        displayFacts.appendChild(item);
    }
}

function clearElements(){
    let elements = document.getElementById("displayFacts");
    elements.innerHTML = "";
}


// async function getCatImage(){
//     let randomNumber = Math.floor(Math.random() * 5) + 1;
//     let apiUrl = "https://cataas.com/api/cats";
//     let response = await fetch(apiUrl).catch(err => console.error(err));
//     let json = await response.json();
//     let entry = json.results;

//     console.log(entry);
//     let catImage = document.createElement("img");
//     catImage.innerHTML = `${entry}`;
//     displayImage.appendChild(catImage);
// }

// randomCat.onclick = () => getCatImage();
getCatFact();

randomCat.onclick = () => getCatFact();