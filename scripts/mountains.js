document.addEventListener("DOMContentLoaded", ()=>{


// for(mountain of mountainsArray){
//     const name = mountain.name;
//     const o = option(name)
//     mountainList.appendChild(o);
// }

// mountainList.addEventListener("change", e=>{
//     const mountain = mountainsArray[mountainList.selectedIndex - 1];
//     mountainResults.innerHTML =`

//     <h1>${mountain.name}</h1>
//     ${mountain.elevation}
//     ${mountain.effort}
// <p>${mountain.desc}</p>
// <img src="./images/${mountain.img}">
//     `;

// });


    // mountainsArray.forEach(m => mountainList.appendChild(option(m.name)));

    for (mountain of mountainsArray) {
        const name = mountain.name;
        const o = option(name)
        mountainList.appendChild(o);
    }

    mountainList.addEventListener("change", e => {
        const mountain = mountainsArray[mountainList.selectedIndex - 1];
        mountainResults.innerHTML = `
        <br>
        <img src="./images/${mountain.img}">

        <h3>${mountain.name}</h3>
        Elevation: ${mountain.elevation} feet<br>
        Effort: ${mountain.effort}<br>
        Lattitude/Longitude: (${mountain.coords.lat}, ${mountain.coords.lng})
        <p> ${mountain.desc} </p>
    `;
    });




});