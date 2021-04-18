var websites = [
  {
    imgLink: "websitesScreenshots/Recipes.PNG",
    title: "Recipes",
    description:
      "Recipes is an application made with React that aims to help people passionate about cooking to keep track of their favorite recipes and find new ones. The application has many features that come in handy.",
    languages: ["Html", "Css", "Js", "ReactJS", "json-server", "firebase"],
    githubLink: "https://github.com/MariaNicoleta13/Recipes",
    viewLink: "https://recipes.marys-creation.gallery/",
  },
  {
    imgLink: "websitesScreenshots/Order.PNG",
    title: "Order",
    description:
      "This website emulates an online shop with its expected functionalities such as: filtered products based on category, favoring products, removing/adding a specific quantify of a product to the shopping cart. For learning purposes the user data is saved as a JSON object in the local storage.",
    languages: ["Html", "Css", "Js", "AngularJS"],
    githubLink: "https://github.com/MariaNicoleta13/Order",
    viewLink: "order",
  },
  {
    imgLink: "websitesScreenshots/anime.PNG",
    title: "Anime Page",
    description:
      "The following page is mainly based on JavaScript and CSS. The purpose of this page is to show a responsive list of trendy animes, based on seasons. Working on this site was an excellent way for me to delve a little deeper into JavaScript.",
    languages: ["Html", "Css", "Js"],
    githubLink: "https://github.com/MariaNicoleta13/AnimePage",
    viewLink: "https://anime.marys-creation.gallery/",
  },

  {
    imgLink: "websitesScreenshots/Felix.PNG",
    title: "Felix",
    description:
      "The idea of this site bloomed from my love for my cat, Felix. He has a very colorful personality. The scope of this site is to present to the viewer, via a gallery, different moments from Felix's life. Therefore using CSS and a bit of imagination, this project was born.",
    languages: ["Html", "Css"],
    githubLink: "https://github.com/MariaNicoleta13/Felix",
    viewLink: "felix",
  },
  {
    imgLink: "websitesScreenshots/Portfolio.PNG",
    title: "Portfolio",
    description:
      "Making this page, I had in mind to create a site that will encapsulate in an easy way my projects across time. I wanted it to be accessible, yet stylish and so, using Bootstrap and JavaScript, I decided to list all of them in one place.",
    languages: ["Html", "Css", "Js"],
    githubLink: "https://github.com/MariaNicoleta13/Portfolio",
    viewLink: "/",
  },

  {
    imgLink: "websitesScreenshots/Todolist.PNG",
    title: "To-do list",
    description:
      "I find to-do lists very useful, in day-to-day activities. Therefore I wanted to learn how one can be made. I took an online course and based on that I created this to-do list using jQuery and Bootstrap.",
    languages: ["Html", "Css", "Js"],
    githubLink: "https://github.com/MariaNicoleta13/Todolist",
    viewLink: "todolist",
  },
  {
    imgLink: "websitesScreenshots/gallery.PNG",
    title: "Gallery",
    description:
      "This site is a gallery made by following an online course. While creating this stylish gallery, I used two JavaScript libraries, jquery and lightbox.",
    languages: ["Html", "Css"],
    githubLink: "https://github.com/MariaNicoleta13/Gallery",
    viewLink: "gallery",
  },
  {
    imgLink: "websitesScreenshots/To-DoList.PNG",
    title: "To-Do List",
    description:
      "The following page is made in JavaScript and it uses Express as a Node.js library. For this site, I took an online course where I learned to make a practical and easy to use To-Do list. ",
    languages: ["Html", "Css", "Js"],
    githubLink: "https://github.com/MariaNicoleta13/To-Do-List",
    viewLink: "https://todo.marys-creation.gallery/",
  },
  // {
  //   imgLink: "websitesScreenshots/table-form.PNG",
  //   title: "Practice Site",
  //   description:
  //     "As the title suggests, in this site I practiced tables and forms while taking an online course. This page was one of my first concept site from which I started to grow each day.",
  //   languages: ["Html", "Css"],
  //   githubLink: "https://github.com/MariaNicoleta13/table-form",
  //   viewLink: "table-form",
  // },
  {
    imgLink: "websitesScreenshots/slideshow.PNG",
    title: "Slideshow",
    description:
      "This site is a slideshow made following an online course. With this occasion, I familiarized myself with using code that someone else wrote. For this, I used a plugin for jQuery, Cycle2.",
    languages: ["Html", "Css"],
    githubLink: "https://github.com/MariaNicoleta13/slideShow",
    viewLink: "slideshow",
  },

  {
    imgLink: "websitesScreenshots/animation.PNG",
    title: "Animation",
    description:
      "This site was a good way of practicing pure CSS animation while following an online course. I had a lot of fun making this site feel 'alive' and responsive without relying on Bootstrap. The responsiveness was made using Media Query.",
    languages: ["Html", "Css"],
    githubLink: "https://github.com/MariaNicoleta13/animationPractice",
    viewLink: "animation-practice",
  },
];

var container = document.getElementsByClassName("row")[0];

websites.forEach(function (website) {
  var lis = [];
  website.languages.forEach(function (language) {
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
