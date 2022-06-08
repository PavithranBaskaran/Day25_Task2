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
    onclick=" getData()">
      Search
    </button>
  </form>
</div>
</nav>`;
document.body.append(search_content);
var brewery_details = document.createElement("section");
brewery_details.setAttribute("class" , "brewery_details");

async function getData(){
    reload();
    var table = document.createElement("table");
    table.setAttribute("class" , "table table-striped table-hover");
    table.innerHTML=`<thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Address</th>
      <th scope="col">Website</th>
      <th scope="col">PhoneNo</th>
    </tr>
  </thead>`;
  brewery_details.append(table);
//   document.body.append(brewery_details);
  var tbody = document.createElement("tbody");

 

try{ 
    var text = document.querySelector("#search").value;
let api = await fetch(`https://api.openbrewerydb.org/breweries/search?query={${text}}`);
let arr = await api.json();

for(let i=0 ; i<arr.length ; i++)
{
    var tr = document.createElement("tr");

  tr.innerHTML=`
  <td>${arr[i].name}</td>
  <td>${arr[i].brewery_type}</td>
  <td>${arr[i].address_2}</td>
  <td>${arr[i].website_url}</td>
  <td>${arr[i].phone}</td>
`
tbody.append(tr);
}
table.append(tbody);
brewery_details.append(table)
document.body.append(brewery_details);
}
catch(error){
    console.log(error)
}
}


function reload(){
    console.log("reload working")
    location.reload();
    
}