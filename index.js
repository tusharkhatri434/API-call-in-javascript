let url = "https://kontests.net/api/v1/all"
let response = fetch(url);
response.then((v)=>{
   return v.json();
}).then((contests)=>{
    console.log(contests)
   let ihtml = ""
    for(item in contests)
    {
        console.log(contests[item])
        ihtml += `
          <div class="d-inline-block mb-2">
        <div class="card" style="width: 18rem;">
            <img src="coding-for-students-learn-with-these-7-apps.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${contests[item].name}</h5>
                <p> Status is  ${contests[item].status} and site is ${contests[item].site} </p>
                <p> In 24 Hours?  ${contests[item].in_24_hours} </p>
                <p>Starts at: ${contests[item].start_time}
                <p class="m-0 p-0">Ends at: ${contests[item].end_time}
                <a href=" ${contests[item].url}" class="btn btn-primary mt-1">Visit Contest</a>
            </div>
         </div>
        </div>
        `
    }
    document.getElementById('apiii').innerHTML=ihtml;
})