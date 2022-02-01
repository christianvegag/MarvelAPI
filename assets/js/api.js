const API =
  "https://gateway.marvel.com/v1/public/events?ts=1&apikey=0477406f4b93a56ee475160779a44050&hash=ba047e3cb226526b9ed3d6a1bae70cf0";

const getAPI = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.data.results);
    })
    .catch((error) => {
      console.log("Error in the API", error);
    });
};

const fillData = (data) => {
  let html = "";
  data.forEach((ch) => {
    html += 
    `<div class="col">
      <div class="card h-100 text-center">
        <img
          src="${ch.thumbnail.path}.${ch.thumbnail.extension}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  style="font-weight: bold; text-transform: uppercase"
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse${ch.id}"
                  aria-expanded="false"
                  aria-controls="collapse${ch.id}"
                >
                  ${ch.title}
                </button>
              </h2>
              <div
                id="collapse${ch.id}"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>${ch.description}</p>
                </div>
              </div>
            </div>
          </div>
          <p class="card-text">Start : ${ch.start}</p>
          <p class="card-text">End : ${ch.end}</p>
          <a href="${ch.urls[0].url}" class="btn btn-primary">More Details!</a>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last modified ${ch.modified} </small>
        </div>
      </div>
    </div>`
  });

  document.getElementById("characters").innerHTML = html;
};

getAPI(API);
