const url=`https://api.kanye.rest/`;
const loadData=()=>{
    fetch(url)
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        displayQuotr(data);
    })
}

const  displayQuotr=data=>{
   console.log(data);
   const blockquote=document.
   getElementById("quotes");
   console.log(blockquote)
   const p=document.createElement("p");
   p.textContent=data.quote;
   blockquote.appendChild(p);
}
loadData();



const Loading_FemaleName=()=>{
    console.log("Loading Female");
    fetch("https://randomuser.me/api/?gender=female").then((response)=>{
        return response.json();
    }).then((data)=>{
        disPlayAllInfomation(data);
    })
}


const disPlayAllInfomation=(data)=>{
   console.log(data)
   const ulList=document.getElementById('ul-list');
   console.log(ulList)
   const li=document.createElement("li");
   li.innerHTML=` 
    <h1>Name=
    ${data.results[0].name.title}
    ${data.results[0].name.first} 
    ${data.results[0].name.last}
     </h1>
    <p>Gender=${data.results[0].gender}</p>
   `
   ulList.appendChild(li)
}
Loading_FemaleName();


//showing all countries Information

const LoadingCountry=()=>{
    const countryUrl=`https://restcountries.com/v3.1/all`
    fetch(countryUrl)
    .then((response) => {
        return response.json()
    }).then((data)=>{
        displayAllcountry(data);
    })
}
displayAllcountry=(data)=>{
  console.log(data);
  const allCountryList=document.getElementById("all_countries");
   for(let country of data){
    const div=document.createElement("div");
  div.innerHTML=`
   <h4 class="h1style">Country Name 
   ${country.name.common}</h4>
   <p>Capital: ${
    country.capital ? country.capital[0]:"No Capital"}</p>
    <button onclick="displayCountryDetails(
    '${country.cca2}'
    )">Details</button>
  `
   div.classList.add("county");
   allCountryList.appendChild(div);
   console.log(country)
   }
 
}
const displayCountryDetails=(countryCode)=>{
   console.log("country details",countryCode);
   const countryCodeurl=`https://restcountries.com/v3.1/alpha/${countryCode}`
   console.log(countryCodeurl)
   fetch(countryCodeurl).then((response)=>{
    return response.json()
   }).then((countyData)=>{
    showCountryDetails(countyData[0]);
   })
}
const showCountryDetails=(countyData)=>{
   const countyContainer=document.getElementById('countryDetails');
   console.log(countyContainer)
   countyContainer.innerHTML=`
   <h3> Name:${countyData.name.common}</h3>
   <img src= "${countyData.flags.png}"/>
   `
}
LoadingCountry()

//using maelsdb

const LoadMeals=()=>{
   const mealsUrl=`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`
   fetch(mealsUrl).then((response)=>{
     return response.json()
   }).then((data)=>{
    console.log(data.meals)
   })
}

LoadMeals()