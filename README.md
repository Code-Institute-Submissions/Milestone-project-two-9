# **Card Catch**


## **Milestone project 2: Interactive Frontend Development - Code Institute**

A memory card game in which players must find all the pairs before the click 
counter reaches Zero


## UX

### **Goals:**
* To create simple game accessible to anyone 

* To have a a loss condition in order to encourage more engagement from players

### **User Stories**

Coming Soon

### **Strategy**

The aim was to create a very simple site that focused on the gameplay.

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

    HTML - To create a basic site
    CSS - To create a nice style and to stand-out
    FontAwesome - For Card suit icons
    Animate.css - To make interesting transtitions 
    Figma - To create a wireframe


## Features

The landing page features an embedded video which is displayed when the tutorial button is clicked. The tutorial
is supplemented by a info button on the game which summarises the rules should the player ever need to quickly
check them. A shuffle button on the game page allows users to start a new round should they realise they are 
going to lose their current one. The game features CSS animations which transition from the board to the results 
screen upon winning or losing.

### Features Left to Impliment

Should the site gain access to a database it would open the possibility to include in-depth
champion information pages for all the champions in the game. On the main page this would mean 
all eighty three champions would be present. To prevent the main champion section being very 
long, the desciptions would be put inside a box which only appears when clicked on. The thirteen
items and their combinations would be collapsed into dropdown boxes to maintain accessibility.


## Testing

All links work both within the site and to the external patch notes. All "Read More" links lead 
to the same champion page. 

The site is responsive over different screen sizes with custom layouts where appropriate. The site 
has been tested on Mozilla Firefox, Google Chrome and safari and works as intended.The site was 
tested on an android phone, Iphone, tablet, Ipad, laptop, Macbook and desktop. The colour styles 
appear more vibrant on different screens but all site functions work as intended. 

### **Bugs**

#### **Champion Descriptions Layout**

Issue with the champion descriptions displaying in a column instead of two per row. Mentor advised
to change the elements from "li" to "div". An unnecessary "col" class was found which was interfering
with the functionality of the bootstrap code.

##### **Overlay**

Overlay was not reaching the top of the the item background image. Issue found to be the margin of 
the child element. Moved the margin to the child of that element.

##### **Iphone and Ipad 

Background images display as a zoomed in image for Ipad and Iphone. Unable to find fix after searching 
stack overflow or after asking for help from other students and my mentor. Problem doesn't appear for Macbook.

The following tests have been used to ensure proper site functionality:

* GTmetrix: To test on website loading times
* W3C HTML Validator: This validator checks the markup validity of Web documents in HTML.
* W3C CSS Validator: This validator checks the markup validity of Web documents in CSS.


## **Deployment**

This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update 
automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, 
the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting the link into 
your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.

## **Credits**

### **Content**

All content on this site were written by me.

### **Media**

All photos were taken from tftactics.gg and wallpapercave.com

## **Acknowledgements**
The Parallax Scrolling effect was found on w3schools.com link (by mentor advice)

[tftactics.gg](https://tftactics.gg/item-builder) This site gave inspiration for
the layout of the item section.