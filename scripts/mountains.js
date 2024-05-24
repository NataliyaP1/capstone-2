

document.addEventListener("DOMContentLoaded", ()=>{


    for (mountain of mountainsArray) {
        const name = mountain.name;
        const o = option(name)
        mountainList.appendChild(o);
    }

    mountainList.addEventListener("change", e => {
        const mountain = mountainsArray[mountainList.selectedIndex - 1];
        mountainResults.innerHTML = `
        <br>
        
        
        <img src="./images/${mountain.img}" id="mtnImages">
        <br>
        
        <div id="mtnText">
        <h4>${mountain.name}</h4>
        <br>
        <b>Elevation:</b> ${mountain.elevation} feet
        <br>
        <b>Effort:</b> ${mountain.effort}
        <br>
        <b>Lattitude/Longitude: </b> (${mountain.coords.lat}, ${mountain.coords.lng})
        <br>
        <p> ${mountain.desc} </p>
        </div>
    `;
    });

});
