const LoadMeals=(searchText)=>{
   const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   console.log(url)
   fetch(url).then((res)=>{
    return res.json();
   }).then((data)=>{
    displayMeals(data.meals)
   })
}
const displayMeals=(data)=>{
    const mealsContainer=document.getElementById('meals-container');
    console.log(mealsContainer);
    mealsContainer.innerHTML=''
   console.log(data);
   for(meals of data){
    console.log(meals)
    const mealDiv=document.createElement("div");
    mealDiv.classList.add('col');
    console.log(mealDiv);
    mealDiv.innerHTML=
    `
    <div class="card h-100">
    <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meals.strMeal}</h5>
      <p class="card-title">${meals.strCategory}</p>
      <p class="card-title">${meals.strArea}</p>
      <button type="button" 
      class="btn btn-primary" 
      data-bs-toggle="modal" 
      onclick="loadMealDetails_2(${meals.idMeal})"
      data-bs-target="#mealsdetaislModal">
       Details
    </button>
    </div>
  </div>
    `
   mealsContainer.appendChild(mealDiv);
   }
}

 //search
const searchMe=()=>{
    const searchText=document.getElementById("search-field").value;
    console.log(searchText)
    LoadMeals(searchText);
}

//search
const loadMealDetails=idMeal=>{
   const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
   try{
    fetch(url).then((res)=>{
        return res.json();
       }).then((data)=>{
        displayInModalDetails(data.meals[0])
       })
   }catch(err){
    console.log(err);
   }
   
}
 //async await
const loadMealDetails_2= async(idMeal)=>{
  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  try{
  const res= await fetch(url);
  const data= await res.json();
  displayInModalDetails(data.meals[0]);
  }catch(err){
    console.log(err)
  }
 
}
const displayInModalDetails=(meal)=>{
 document.getElementById('mealsdetaislModalTitle')
 .innerText=meal.strMeal;
 const mealDetails=document.getElementById('mealDetailsBody');
 console.log(mealDetails);
 mealDetails.innerHTML=`
 <img src="${meal.strMealThumb}" alt="" class="w-25"/>
 <p class="card-title">${meal.strInstructions}</p>
 `
}



