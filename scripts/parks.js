



function getPark(park) {
    const element = document.createElement("div");
    element.classList.add("park");

    element.innerHTML = `

    <br><hr><br>
    
    <b>Name:</b>
    <p>${park.LocationName}<p>
<br>
    <b>Location ID:</b>
    <p>${park.LocationID}</p>
<br>
    <b>Address :</b>
    <p>${park.Address}, ${park.City}, ${park.State}</p>
 <br>   
    <b>Phone: </b>
    <p>${park.Phone}</p>

    </tr>
    
    `;
    if (park.hasOwnProperty("Visit")) {
        const link = park.Visit;
        const text = park.LocationName;
        element.innerHTML += `
        <div><b>Link:</b> <a href="${link}" class="visit-site"> ${text} </a></div>
        `;
    };
    return element;

}

document.addEventListener("DOMContentLoaded", () => {


    function showResults() {
        let filtered = [];
        if (locationRadio.checked) {
            filtered = nationalParksArray.filter(
                o => o.State.toUpperCase() === locations.value.toUpperCase()
            )
        } else {
            filtered = nationalParksArray.filter(
                o => o.LocationName.toUpperCase().includes(
                    parkType.value.toUpperCase()
                )
            )
        }
        results.innerHTML = "";
        filtered.forEach(p => results.appendChild(getPark(p)));

        if(filtered.lenght==0){
            results = "No Results"
        }

        
    }

    locations.addEventListener("change", showResults);
    parkType.addEventListener("change", showResults);


    locationsArray
        .map(option)
        .forEach(oe => locations.appendChild(oe));

    parkTypesArray
        .map(option)
        .forEach(pto => parkType.appendChild(pto));


});





