const API =
  "https:gateway.marvel.com/v1/public/events?ts=1&apikey=0477406f4b93a56ee475160779a44050&hash=ba047e3cb226526b9ed3d6a1bae70cf0";


const getAPI = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.data.results, json);
    })
    .catch((error) => {
      console.log("Error in the API", error);
    });
};

const fillData = (data, copy) => {
  let html = "";
  data.forEach((ch) => {
    html += `<div class="blog-card" data-image="">
              <img class="blog-card "  src="${ch.thumbnail.path}.${ch.thumbnail.extension}">
            <div class="card-info">
            
            <h3 class="text-uppercase" >${ch.title}</h3>
            <hr />
            <a href="${ch.urls[0].url}" target="_blank" class="btn btn-primary bg-black bg-opacity-25">More Details!</a>
            <hr />
            <p>Start : ${ch.start}</p>
            <p>End : ${ch.end}</p>
            </div>


            <div class="utility-info">
              <ul class="utility-list">
                <li class="date">${copy.attributionText}</li>
                <li class="comments text-white-50">Last modified : ${ch.modified}</li>
              </ul>
            </div>
            
            <!-- overlays -->
            <div class="gradient-overlay"></div>
            <div class="color-overlay"></div>
      </div>`;
  });

  document.getElementById("characters").innerHTML = html;
};

getAPI(API);
