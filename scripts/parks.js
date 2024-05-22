
function getPark(park) {
    const element = document.createElement("div");
    element.classList.add("park");

    element.innerHTML = `

    <br><hr><br>
    <tr>
    <th><b>Name:</b></th>
    <td>${park.LocationName}</td>
<br>
<th><b>Location ID:</b></th>
<td>${park.LocationID}</td>
<br>
    <th><b> Address :</b></th>
    <td>${park.Address},</td>
    <td>${park.City},</td>
    <td>${park.State}</td>
 <br>   
    <th><b>Phone: </b></th>
    <td>${park.Phone}</td>

    </tr>
    
    `;
    if(park.hasOwnProperty("Visit")){
        const link = park.Visit;
        const text = park.LocationName;
        element.innerHTML += `
        <div><b>Link:</b> <a href="${link}" class="visit-site"> ${text} </a></div>
        `;
    };
    return element;
}

    document.addEventListener("DOMContentLoaded", ()=>{


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
    }
    locations.addEventListener("change", showResults);
    parkType.addEventListener("change", showResults);

    function handleSearchBy(e) {
        if (locationRadio.checked) {
            locationLabel.style.display = "block";
            parkTypeLabel.style.display = "none";
        } else {
            locationLabel.style.display = "none";
            parkTypeLabel.style.display = "block";
        }
        showResults();
    }
    locationRadio.addEventListener("click", handleSearchBy)
    parkTypeRadio.addEventListener("click", handleSearchBy)

    locationsArray
        .map(option)
        .forEach(oe => locations.appendChild(oe));

    parkTypesArray
        .map(option)
        .forEach(pto => parkType.appendChild(pto));
    });


