var search_content = document.createElement("section");
search_content.innerHTML=`<nav class="navbar">
<div class="container-fluid">
  <form class="d-flex">
    <input
      class="form-control me-2 search"
      type="search"
      placeholder="Search by City or Name"
      aria-label="Search"
      id="search"
      
    />
   <br> <button class="btn btn-outline-success" type="button"
    onclick="getData()">
      Search
    </button>
  </form>
</div>
</nav>`;
document.body.append(search_content);
var brewery_details = document.createElement("section");
brewery_details.setAttribute("class" , "brewery_details");

async function getData(){
    brewery_details.remove(brewery_details);
try{ 
    var text = document.querySelector("#search").value;
let api = await fetch(`https://api.openbrewerydb.org/breweries/search?query={${text}}`);
let arr = await api.json();


for(let i=0 ; i<arr.length ; i++)
{
var store = document.createElement("div");
store.setAttribute("class" ,"store")
store.innerHTML=` 
<h5>Name       :</h5>${arr[i].name}<br>
<h5>Type       :</h5>${arr[i].brewery_type}<br>
<h5>Address    :</h5>${arr[i].address_2}<br>
<h5>website URL:</h5><a href="${arr[i].website_url}">${arr[i].website_url}<a><br>
<h5>Phone No   :</h5>${arr[i].phone}<br>
`;
brewery_details.append(store);

}



document.body.append(brewery_details);
}
catch(error){
    console.log("Enter valid city or store name");
    var error = document.createElement("div");
error.setAttribute("class" ,"error")
error.innerHTML=`<h1> Kindly enter valid city name</h1>`
brewery_details.append(error);
}
}
