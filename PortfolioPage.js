var websites = [
  {
    imgLink: "websitesScreenshots/Felix.PNG",
    title: "Felix",
    description:
      " The idea of this first site bloomed from my love for Felix. He has a very colorful personality. The scope of this site is to present to the viewer, via a gallery, different moments from Felix's life. Therefore using html, css and a bit of imagination, this project was born.",
    languages: ["Html", "Css"],
    githubLink: "https://github.com/MariaNicoleta13/Felix",
    viewLink: "table-form"
  },

  {
    imgLink: "websitesScreenshots/Todolist.PNG",
    title: "To-do list",
    description:
      " I find to-do lists very useful in day-to-day activities and due to that I wanted learn how one can be made. Wanting to learn more, I took an online course and based on that I created this to-do list using jQuery and Bootstrap.",
    languages: ["Html", "Css", "Js"],
    githubLink: "https://github.com/MariaNicoleta13/Todolist",
    viewLink: "todolist"
  },
  {
    imgLink: "websitesScreenshots/table-form.PNG",
    title: "Practice Site",
    description:
      " As the title suggests, in this site I practiced tables and forms. This page was one of my first concept site from which I started to grow each day.",
    languages: ["Html", "Css"],
    githubLink: "https://github.com/MariaNicoleta13/table-form",
    viewLink: "table-form"
  }
];

var container = document.getElementsByClassName("row")[0];

websites.forEach(function(website) {
  var lis = [];
  website.languages.forEach(function(language) {
    var li = `<li class="list-group-item"><button type="button" class="btn btn-info">${language}</button></li>`;
    lis.push(li);
  });

  // template String
  var card = `  
  <div class="col col-12 col-xl-4 col-lg-6 myCol">   
      <div class="card">
        <img src=${website.imgLink} class="card-img-top" />  

        <div class="card-body">
            <h5 class="card-title">${website.title}</h5>
            <ul class="list-group list-group-flush d-flex flex-row card-body text-center">
              ${lis.join("")}
            </ul>
            <p class="card-text ">${website.description}</p>
        </div>

        

        <div class="card-footer text-center">
            <a role="button" class="btn btn-info btn-lg active card-link" 
              href=${website.githubLink} target="_blank">GitHub</a>
            <a role="button" class="btn btn-info btn-lg active card-link"
              href=${website.viewLink} target="_blank">View</a>
        </div>
        </div>
    </div>
`;

  container.insertAdjacentHTML("beforeend", card);
});
