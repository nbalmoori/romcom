
// Create variables targetting the relevant DOM elements here 👇
//things we need to find: cover image, title, Tagline, 2 descriptors in tagline.

var coverImage = document.querySelector("img.cover-image");
var mainTitle = document.querySelector("h2.cover-title");
var tagline = document.querySelector("h2.tagline");
var taglineDescriptor1 = document.querySelector("span.tagline-1");
var taglineDescriptor2 = document.querySelector("span.tagline-2");
//BUTTONS
var newRandomCoverButton = document.querySelector(".random-cover-button");
var newRandomCoverButtonHidden = document.querySelector(".random-cover-button.hidden");
var makeYourOwnCoverButton = document.querySelector(".make-new-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var saveCoverButtonHidden = document.querySelector(".save-cover-button.hidden");
var homeButtonHidden = document.querySelector(".home-button.hidden");
var homeButton = document.querySelector(".home-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button");
//VIEWS
var homeView = document.querySelector("section.view.home-view");
var homeViewHidden = document.querySelector("section.view.home-view.hidden");
var formViewHidden = document.querySelector("section.view.form-view.hidden");
var formView = document.querySelector("section.view.form-view");
var savedCoversViewHidden = document.querySelector("section.view.saved-view.hidden");
var savedCoversView = document.querySelector("section.view.saved-view");
//
var coverInput = document.querySelector('#cover');
var titleInput = document.querySelector('#title');
var firstDescriptorInput = document.querySelector('#descriptor1');
var secondDescriptorInput= document.querySelector('#descriptor2');
var makeMyBookButton = document.querySelector('.create-new-book-button');



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover
// Why couldn't we run the below new Cover variable instead of undefined variable?
//new Cover(coverImage.src, mainTitle.innerText, taglineDescriptor1.innerText, taglineDescriptor2.innerText);

// Add your event listeners here 👇

newRandomCoverButton.addEventListener('click', generateRandomCover);

window.addEventListener('load', function() {
generateRandomCover();
currentCover = new Cover(coverImage.src, mainTitle.innerText, taglineDescriptor1.innerText, taglineDescriptor2.innerText);
});

makeYourOwnCoverButton.addEventListener('click', function(){
  showFormView();
  hideHomeView();
  hideSavedCoversView();
  showHomeButton();
  hideShowNewRandomCoverButton();
  hideSaveCoverButton();
});

viewSavedCoversButton.addEventListener('click', function(){
  showSavedCoversView();
  hideHomeView();
  hideFormView();
  hideShowNewRandomCoverButton();
  hideSaveCoverButton();
  showHomeButton();
});

homeButton.addEventListener('click', function(){
  showHomeView();
  hideHomeButton();
  hideFormView();
  hideSavedCoversView();
  showShowNewRandomCoverButton();
  showSaveCoverButton();
})

makeMyBookButton.addEventListener('click', function(){
  event.preventDefault();
  saveInputFormInformation();
  showHomeView();
  hideFormView();
  hideSavedCoversView();
  createNewCover();
  currentCover = new Cover(coverImage.src, mainTitle.innerText, taglineDescriptor1.innerText, taglineDescriptor2.innerText);
});

// Create your event handlers and other functions here 👇


// We've provided one function to get you started. This function pulls just the index number.
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  mainTitle.innerText = titles[getRandomIndex(titles)];
  taglineDescriptor1.innerText = descriptors[getRandomIndex(descriptors)];
  taglineDescriptor2.innerText = descriptors[getRandomIndex(descriptors)];

};

function showFormView() {
  formViewHidden.className = "view form-view"
};

function hideFormView() {
  formView.className = "view form-view hidden"
};

function hideHomeView(){
  homeView.className = "view form-view hidden"
};

function showHomeView(){
  homeView.className = "view form-view"
};

function showSavedCoversView(){
  savedCoversViewHidden.className = "view saved-view"
};

function hideSavedCoversView(){
  savedCoversView.className = "view saved-view hidden"
};

function hideShowNewRandomCoverButton(){
  newRandomCoverButton.className = "random-cover-button hidden"
};

function showShowNewRandomCoverButton(){
  var newRandomCoverButtonHidden = document.querySelector(".random-cover-button.hidden");
  newRandomCoverButtonHidden.className = "random-cover-button"
};

function hideSaveCoverButton(){
  saveCoverButton.className = "save-cover-button hidden"
};

function showSaveCoverButton(){
  var saveCoverButtonHidden = document.querySelector(".save-cover-button.hidden");
  saveCoverButtonHidden.className = "save-cover-button"
};

function showHomeButton(){
  homeButtonHidden.className = "home-button"
};

function hideHomeButton(){
  homeButton.className = "home-button hidden"
};

function saveInputFormInformation(){
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(firstDescriptorInput.value);
  descriptors.push(secondDescriptorInput.value);
};

function createNewCover(){
  coverImage.src = coverInput.value;
  mainTitle.innerText = titleInput.value;
  taglineDescriptor1.innerText = firstDescriptorInput.value;
  taglineDescriptor2.innerText = secondDescriptorInput.value;
};

function saveCurrentCover(){
  //currentCover = new Cover(coverImage.src, mainTitle.innerText, taglineDescriptor1.innerText, taglineDescriptor2.innerText);
  if (savedCovers.length > 0 && !savedCovers.includes(currentCover)){
    savedCovers.push(currentCover);
  }
  if (savedCovers.length === 0){
    savedCovers.push(currentCover);
  }
};

function showAllSavedCovers(){
  var htmlAdd = '';
  for (var i = 0; i < savedCovers.length; i++){
    htmlAdd += `<section class="mini-cover">
    <img class="cover-image" src=${savedCovers[i].cover}>
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </section>`;
  }
  savedCoverViewSection.innerHTML = htmlAdd;
  console.log(htmlAdd);
};

