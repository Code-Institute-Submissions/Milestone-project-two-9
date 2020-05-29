# **Card Catch**


## **Milestone project 2: Interactive Frontend Development - Code Institute**

A memory card game in which players must find all the pairs before the click 
counter reaches Zero

## Demo 

A live Demo version can be found [here](https://ogmyst.github.io/Milestone-project-two/)


## UX

### **Goals:**
* To create simple game accessible to anyone 

* To have a a loss condition in order to encourage more engagement from players

### **User Stories**

> I like to play games like this on my commute or perhaps when I'm sat around
at home waiting for the microwave to hit zero 

> - Elaine So

All the users gave very similar replies. For them a simple game like card catch 
wasn't something they would commit a lot of time to but looked to play when they 
were trying to pass time. This informed the game design in that it made clear 
that the game needed to be easy to stop and started very easily and have a 
goal which could be achieved in a few minutes. 

### **Strategy**

The aim was to create a very simple site that focused on the gameplay. A memory
game using playing cards to make it accessible to all ages.

### **Scope**

Originally there were going to be a choice in difficulty from easy, medium and hard. 
The aim was that this would appeal to a wider audience who could commit their time 
and energy to a difficulty that suited them at any moment. Due to time the harder
difficulties were ommited leaving the base game which is accessible to anyone.

### **Structure**

The site has two pages. The landing page contains a button to take the user to the 
game and  atutorial button which loads a video in the browser. The second page is 
the game. This layout is based on the focus on gameplay and displaying only 
information pertaining to that.

### **Skeleton**

Using figma the following wireframes were made:

[Desktop](https://github.com/OGMyst/Milestone-project-two/blob/master/assets/mockups/MS2%20-%20Card%20Catch%20Desktop.pdf)

[Phone](https://github.com/OGMyst/Milestone-project-two/blob/master/assets/mockups/MS2%20-%20Card%20Catch%20Phone.pdf)

It was decided that it would streamline the site if the tutorial had a video rather than a playable tutorial level which
would use pop ups to instruct the user. The site behind the pop ups in the mockups is the basis for the design site.

### **Surface**

The colours for the site were picked with the aim of relaxing the user and creating a low intensity enviroment. The 
off-white background is less sharp than pure white. The sky blue is very subtle and doesn't jump out of the page.

### **Technologies**

- HTML - To create a basic site
- CSS - To create a nice style and to stand-out
- JavaScript - The engine to create user interaction
- FontAwesome - For Card suit icons
- Animate.css - To make interesting transtitions 
- Figma - To create a wireframe

### **JavaScript Libraries**

- Jquery - To toggle classes and display


## Features

The landing page features an embedded video which is displayed when the tutorial button is clicked. The tutorial
is supplemented by a info button on the game which summarises the rules should the player ever need to quickly
check them. A shuffle button on the game page allows users to start a new round should they realise they are 
going to lose their current one. The game features CSS animations which transition from the board to the results 
screen upon winning or losing. 

### Features Left to Impliment

There is room for harder diffiulties, I had an idea for a card which would change positions of all unflipped 
cards. This card could cause some frustration as the player loses a lot of progress and lose through no 
fault of the player. Another feature would be needed to mitigate this frustration and allow the player to 
make tactical decisions. A reveal skill with a limited number of uses could help players see the next card 
at a critical point. The footer currently hold links that only take the user to the respective site's main 
page and not a personal page. As I build up a folio of sites to display and a social media presence, these
links will get linked to those pages instead.



## Testing

All internal links work. The tutorial video loads properly

The site is responsive over different screen sizes with custom layouts where appropriate. The site has been tested on 
Mozilla Firefox, Google Chrome and safari and works as intended.The site was tested on an android phone, Iphone, 
tablet, Ipad, laptop, Macbook and desktop. All site functions work as intended.

The console displays no errors during site testing

The shuffle() function in the game.js file has undergone unit testing and passes all tests. The unit testing was added
last in the project so does not follow good coding practice. 

The site was submitted for peer review at Code Institute and was reviewed by two people, a fellow student and alumni. 
Issues they found have been fixed and suggestions have been addressed. 

### **Bugs**

#### **Over Sensitive Click Counter**

It was possible to accidentally lower your click counter number by continuosly clicking other cards whilst a 
non-matching pair were waiting to flip face down again. This was fixed by moving the line of code, which lowered
the click counter number by 1, to the point where the rest of the board was locked making the cards unflippable.
There is still a issue where a player can click on a single card, even whilst flipped, and it will lower the 
click counter.

#### **Layers**

Initially I tried to place the cards using a flex box but this became difficult to impliment very quickly. 
I discovered CSS grid which works much better and has auto-spacing between each box saving me some work. 

#### **Losing on Zero**

There was an issue where even if the click counter reached zero the player still wouldn't lose. This was Initially
fixed by changing the if statement from "===" to "==" and the problem resolved. However my mentor explained this 
was not a fail safe solution as it left room for the value being checked against the number zero could still pass
even though it was not the value I was looking for. He advised to add parseInt() around each argument and revert 
back to using "===" to ensure the exact value was passing the condition.

#### **Excessive Code**

It was noted that the HTML code used to form the cards in game.html could have been generated by JavaScript
thus saving many lines of repeated code. This was noticed quite late into the build which meant a large section
of javascript would have to be rewritten so it was decided that it could left since it made no difference in
functionality in regards the site.

The following tests have been used to ensure proper site functionality:

* GTmetrix: To test on website loading times
* W3C HTML Validator: This validator checks the markup validity of Web documents in HTML.
* W3C CSS Validator: This validator checks the markup validity of Web documents in CSS.
* JSHint: A static code analysis tool for JavaScript.


## **Deployment**

This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update 
automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, 
the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by entering 
git clone https://github.com/ogmyst/Milestone-project-two.git into your terminal. To cut ties with this GitHub 
repository, type git remote rm origin into the terminal.

When the code is downloaded as a .zip it can be unzipped and runned by opening the unzipped folder and then execute 
index.html The code will be executed in the browser that is set as main browser, this can be Chrome or one of the 
other available browsers. When executed the main screen will be shown and the options can be chosen.

## **Credits**

### **Content**

All content on this site were written by me.

### **Media**

All images were taken from [commons.wikimedia.org](commons.wikimedia.org)

## **Acknowledgements**

The flipCard() code was taken from [https://github.com/code-sketch/memory-game](https://github.com/code-sketch/memory-game)

Code for the ripple effect was taken from [https://medium.com/@leonardo.monteiro.fernandes/css-techniques-for-material-ripple-effect-3f0ece3062a0](https://medium.com/@leonardo.monteiro.fernandes/css-techniques-for-material-ripple-effect-3f0ece3062a0)

Inspiration for the project came from [https://github.com/ProjectsByJackHe/Sudoku-Solver](https://github.com/ProjectsByJackHe/Sudoku-Solver)