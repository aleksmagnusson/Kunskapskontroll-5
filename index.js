// Pickup API with fetch.
      // API-key:
      // api_key= 9ffcba3a-a45d-4e28-829e-7e6d3f6d8c1c

function catGallery() {
  fetch(`https://api.thecatapi.com/v1/images/search?limit=12&page=${page}&order=Asc`,
  {
    headers: {
      "x-api-key": "9ffcba3a-a45d-4e28-829e-7e6d3f6d8c1c",
    },
  })
  .then(response => response.json())
  .then((data) => {

   // catGallery
   for (let index = 0; index < 12; index++)
   {
     const img = document.createElement("img");
   
     img.classList.add("cat");
     img.src = data[index].url;
   
     main.append(img);
   }

  })
  .catch(err => console.log(err))
}
const main = document.querySelector(".catGallery");

// Disable previous, you can go on to the next button "next" = true.
function disabledPage() {
  if (page === 0) {
    // First page "previous disabled".
    document.querySelector(".previous").disabled = true;
  } else {
    // First page "next enabled".
    document.querySelector(".next").disabled = true;
  }
}

// next button
const nextBtn = document.querySelector(".next-btn");
// previous button
const previousBtn = document.querySelector(".previous-btn");
// p for page number.
const p = document.querySelector(".page");
// Showing what page number we're on.
let page = 0;

p.textContent = `Page: ${page}`;

// next button function
nextBtn.addEventListener("click", () => {
  page++;
  p.textContent = `page: ${page}`;
  
  document.querySelector(".previous-btn").disabled = false;
  document.querySelector(".next-btn").disabled = false;

  // Call content
  removeContent();
  catGallery();
});

// Previous button function
previousBtn.addEventListener("click", () => {
  if (page === 0) {
  } else {
    page--;
    p.textContent = `page: ${page}`;
    
    document.querySelector(".previous-btn").disabled = false;
    document.querySelector(".next-btn").disabled = false;
    
    removeContent();
    catGallery();
    
  }
});
// Getting the images in the boxes outside from the function.
catGallery();

function removeContent() {
  main.textContent = "";
}