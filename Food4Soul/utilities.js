
parsedRecipes:any = [];
recipesList:any = [];

recipeDiv= document.getElementById("recipes")

var request = new XMLHttpRequest();

request.open('GET', 'https://api.edamam.com/search?q=meat&app_id=8a2126b5&app_key=bbd3970d2939c9700ff1f2a45f4b08e2');

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
    console.log(parsedData);
    recipesList=parsedData.hits;

   
    
    recipesList.forEach(item => {
        

        let imageDiv=document.createElement("div");
        imageDiv.classList.add("col-md-4")
        // cardDiv.style.borderColor="black";
       
        let thumbnailDiv=document.createElement("div");
        thumbnailDiv.classList.add("thumbnail")
        

        let repImage=document.createElement("img");
        repImage.classList.add("repimg");
        repImage.setAttribute('src', item.recipe.image);
        thumbnailDiv.append(repImage);

        let captionDiv=document.createElement("div");
        captionDiv.classList.add("caption");
        
        let btn=document.createElement("button");
        btn.innerHTML="See Ingredients";
        btn.classList.add("btn");
        btn.classList.add("btn-dark");
        btn.classList.add("btn-sm");
        

        let recipeName=document.createElement("p");
        recipeName.innerHTML = item.recipe.label;
        thumbnailDiv.append(recipeName);
        thumbnailDiv.append(btn);
        // captionDiv.append(recipeName);
        // captionDiv.append(btn);
        // thumbnailDiv.append(captionDiv);
        imageDiv.append(thumbnailDiv);

        recipeDiv.appendChild(imageDiv);
        console.log(recipeName);
    });
};

request.send();