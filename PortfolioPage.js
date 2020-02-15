var websites = [
  {
    imgLink: "websitesScreenshots/dummy.jpg",
    title: "First Website",
    description:
      " Aici ar trebui sa fie descrierea fiecarui proiect.De ce l-am facut, daca am urmarit un curs pentru a-l face, ce limbaje am folosit.",
    languages: ["Html", "Css", "Js"],
    githubLink: "",
    viewLink: ""
  },

  {
    imgLink: "websitesScreenshots/dummy.jpg",
    title: "Second Website",
    description:
      " Aici ar trebui sa fie descrierea fiecarui proiect.De ce l-am facut, daca am urmarit un curs pentru a-l face, ce limbaje am folosit.",
    languages: ["Html", "Css", "Js"],
    githubLink: "",
    viewLink: ""
  }
];

var container = document.getElementsByClassName("container")[0];

websites.forEach(function(website) {
  //   i in loc de 0
  var card = `
    <div class="card">
        <img src=${website.imgLink} class="card-img-top" />  

        <div class="card-body">
            <h5 class="card-title">${website.title}</h5>
            <p class="card-text">${website.description}</p>
        </div>

        <ul class="list-group list-group-flush">
            <li class="list-group-item">Html</li>
            <li class="list-group-item">Css</li>
            <li class="list-group-item ">Js</li>
        </ul>

        <div class="card-body">
            <a role="button" class="btn btn-primary btn-lg active card-link" href=${website.githubLink}>GitHub</a>
            <a role="button" class="btn btn-primary btn-lg active card-link" href=${website.viewLink}>View</a>
        </div>

    </div>
`;

  container.insertAdjacentHTML( 'beforeend', card );
});
