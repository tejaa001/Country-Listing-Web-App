let allData = [];
const CountryList = document.querySelector(".mainContainer");
// console.log(allData);
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    allData.push(data);
    // console.log(allData);
    CountryList.innerHTML = data
      .map(
        (country) =>
          `<div class="countryCart">
                <img class="imgbox" src="${country.flags.png}"></img>
                <div>${country.name.common} - <span>${country.capital}</span></div>

               <div class="info">
                 <span>${country.region}</span>
                 <span>${country.population}</span>
                 <span>${country.continents}</span>
                </div>
            </div>`
      )
      .join("");
  });

// Filter Method --------------------------------------------------------------------------------

let arrOfFilter = [];
let continent = document.querySelectorAll(".continents span");
// console.log(continent);

continent.forEach((c) => {
  c.addEventListener("click", (item) => {
    let conti = item.target.innerHTML;
    // console.log(conti);
    
    arrOfFilter = [];
    allData[0].forEach((data) => {
    //   console.log(data);
        let allConti = data.continents;
        // console.log(allConti);
        if (conti == "All") {   
          arrOfFilter.push(data);
          }
        else if (conti == allConti) {
          arrOfFilter.push(data);
        //   console.log(element);
          
        }
      
      // console.log("arr of filterq", arrOfFilter);
      CountryList.innerHTML = arrOfFilter
        .map(
          (country) =>
            `<div class="countryCart">
                  <img class="imgbox" src="${country.flags.png}"></img>
                <div>${country.name.common} - <span>${country.capital}</span></div>

               <div class="info">
                 <span>${country.region}</span>
                 <span>${country.population}</span>
                 <span>${country.continents}</span>
                </div>
              </div>`
        )
        .join("");
    });
  });
});

// Search method --------------------------------------------------------------------------------

let search_btn = document.querySelector("#search");
let input_search = document.querySelector("#input-search");
let searchArr = [];
search_btn.addEventListener("click", (input) => {
  console.log(input_search.value.toLowerCase());
  let conti = input.target.innerHTML;

  searchArr = [];
  allData[0].forEach((data) => {
      let countryName = data.name.common.toLowerCase();
      // console.log(countryName);
     
      if (input_search.value.toLowerCase() == countryName) {
        searchArr.push(data);
      }
      
      CountryList.innerHTML = searchArr
        .map(
          (country) =>
            `<div class="countryCart">
                  <img class="imgbox" src="${country.flags.png}"></img>
                <div>${country.name.common} - <span>${country.capital}</span></div>

               <div class="info">
                 <span>${country.region}</span>
                 <span>${country.population}</span>
                 <span>${country.continents}</span>
                </div>
              </div>`
        )
        .join("");
    
  });
});


// Sort method --------------------------------------------------------------------------------

let SortName = document.querySelector("#mySelect");

function sortCountries(sortType) {
          // console.log(sortType);
          
  // console.log(allData[0]);
    
    let sortedData = allData[0];      
    // console.log(sortedData);
    
    switch(sortType) {
        case 'A-Z':
            sortedData.sort((a, b) => a.name.common - b.name.common);
            break;
        case 'Z-A':
            sortedData.sort((a, b) => b.name.common - a.name.common);
            break;
        case 'Less to High':
            sortedData.sort((a, b) => a.population - b.population);
            break;
        case 'High to Less':
            sortedData.sort((a, b) => b.population - a.population);
            break;
        default:
            return;
    }

    CountryList.innerHTML = sortedData
        .map(
            (country) =>
            `<div class="countryCart">
                <img class="imgbox" src="${country.flags.png}"></img>
                <div>${country.name.common} - <span>${country.capital}</span></div>
                <div class="info">
                    <span>${country.region}</span>
                    <span>${country.population}</span>
                    <span>${country.continents}</span>
                </div>
            </div>`
        )
        .join("");
}

SortName.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    // console.log(selectedOption);
    
    sortCountries(selectedOption);
});

// console.log(SortName);
