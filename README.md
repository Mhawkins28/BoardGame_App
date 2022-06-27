<div id="top"></div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technical-requirements">Technical Requirements</a></li>
        <li><a href="#technologies-used">Technologies-Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#user-stories">User Stories</a>
      <ul>
        <li><a href="#mvp">MVP</a></li>
        <li><a href="#stretch-goals">Stretch Goals</a></li>
      </ul>
    </li>
    <li>
      <a href="#developement">Planning, Research, and Future Developement</a>
      <ul>
        <li><a href="#initial-wireframes">Initial Wireframes</a></li>
        <li><a href="#tools-used">Tools Used</a></li>
        <li><a href="#future-features">Future Features</a></li>
        <li><a href="#helpful-links-for-this-project">Helpful Links</a></li>
        <li><a href="#contributing">Contributing</a></li>
      </ul>
    </li>
  </ol>
</details>

<div align="center">
<h1 align="center">BOARD GAME STRATEGIST</h1>

  <p align="center">
  This app is perfect for any board game enthusiast out there! This application will allow the user to store all the boardgames in their arsenal so that they can keep track of them and be ready for any game night or party. There will be flexibility to create, edit, or delete games, making this application unique to each user!
    <br />
    <a href="https://github.com/Mhawkins28/BoardGame_App"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://boardgame-strategist-app2.herokuapp.com/games">View Demo</a>
    ·
    <a href="https://github.com/Mhawkins28/BoardGame_App/issues">Report Bug</a>
    ·
    <a href="https://github.com/Mhawkins28/BoardGame_App/issues">Request Feature</a>
  </p>
</div>

## About The Project

My first Full-CRUD application using Node.js, MangoDb/Mongoose, Express and EJS.

Here are a few of the views as a loggin-in user.
![Screen Shot 2022-06-21 at 5 20 11 PM](https://user-images.githubusercontent.com/93104882/174899597-a06af99f-82f2-4332-a43f-d713f7c11193.png)
![Screen Shot 2022-06-21 at 5 21 04 PM](https://user-images.githubusercontent.com/93104882/174899608-ad0cc92c-bfb9-42d5-b018-aad776260c5c.png)

## Do you want to see what a live, exsisting user collection looks like? 
<b>For testing purposes, you can use the Google login with:</b> <br>
-- email: bgs.test9@gmail.com <br>
-- password: Apptest123

<em>*You can add/edit anything you wish. However, please only delete an item if you added it. Thank you!</em>

## Technical Requirements

- A working full-stack application, built by you, using Node.js, Mongoose, Express and EJS.
- Adhere to the MVC file structure: Models, Views, Controllers.
- At least one model with all 7 RESTful routes and full CRUD.
- Be deployed online and accessible to the public via Heroku
- Include wireframes that you designed during the planning process

## Technologies used
#### Frontend
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [EJS](https://www.npmjs.com/package/ejs)
- [Node.js](https://nodejs.org/dist./v6.16.0/docs/api/synopsis.html)
#### Backend
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/docs/index.html)
- [Passport/Passport-google-oauth](https://www.passportjs.org/concepts/authentication/google/)
#### Deploymnet
- [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
<p align="right">(<a href="#top">back to top</a>)</p>

## User stories

### MVP

- As the user, I want to have a well-designed, clean interface that is easy to understand and navigate.
- As the user, I want multiple pages to see and/or organize the data that is entered. (CRUD routes)
- As the user, I want to add as many boardgames to the collection as I would like.
- As the user, I want to add an image of the game. (either with URL or multer. Need to research)
- As the user, I want to add a description, list how many players can play, and the average playtime of each game.
- As the user, I want to edit or delete the entries I put in the collection.
- As the user, I want to add reviews and ratings on each game.
- As the user, I want to edit or delete the reviews and ratings.

### Stretch Goals

- As the user, I would like a Homepage with User authentication/login.
- As the user, with a login, I want to have my personal game collection with all the MVP goals attached to that profile.
- As the user, I would like to filter my collection by rating, number of players, playtime, or category.
- As the user, I would like access a database of existing games and use that data for my entries.
- As the user, I would like to add games to a Wishlist page.
- As the user, regarding the Wishlist, I would like the option to link buying options.
- As the user, regarding the Wishlist, I would like to prioritize my wishlist.
- As the user, I would like to have the option to archive the games in my collection (purpose: if I no longer have a game, but do not wish to fully delete it from my virtual collection yet)
- As the user, I would like to post entries and/or access a global forum or game review board to see the averaged ratings.
- As the user, I would like to have a unique page that displays the games on a bookshelf and have the names/links to show page in the shape of game board boxes on the shelf.
- As the user, I would like interesting, smooth page transition animations (SWUP?)
- As the user, I would like to have the ability to share my collection with friends.
<p align="right">(<a href="#top">back to top</a>)</p>

## Developement
### Planning, Research, and Future Developement 

### Initial Wireframes

#### Tools used
- [Figma](https://www.figma.com/)
- Apple Notes App

<img width="1748" alt="PROJECT 2 -- BOARD GAME SHELF" src="https://media.git.generalassemb.ly/user/41550/files/c9324fd4-8628-406b-bbb1-0de240116378">

![BG-erd](https://user-images.githubusercontent.com/93104882/175652105-b42a7924-0dd2-4a45-9798-39a1153c94a0.PNG)

<p align="right">(<a href="#top">back to top</a>)</p>

## Future Features

- Allow user to add photos (not just urls. I will use:
  * [Multer](https://www.npmjs.com/package/multer)
  * [Cloudinary](https://cloudinary.com/documentation)
- Allow user to log in with more login options such as:
  * [Facebook](http://www.passportjs.org/packages/passport-facebook/)
  * [Twitter](http://www.passportjs.org/concepts/authentication/twitter/)
  * User-inputed username/password
- Implement a page for the user to add games to a wishlist collection
- Implement a page for the user to add games to an archive collection
- Implement functionality for the use to filter and/or search thier collection
- Implement a page for an open, public cllection, where the user does not have to sign in.  
- Utilize an API for the user to search a database for new games
<p align="right">(<a href="#top">back to top</a>)</p>

## Helpful Links for this Project

...Will add links soon

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
<p align="right">(<a href="#top">back to top</a>)</p>
