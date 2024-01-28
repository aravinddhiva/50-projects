let container = document.getElementById("star-container");
let stars = document.querySelectorAll(".star");
let rating = 0;

container.addEventListener("click", function(e){
    const selectedIndex = e.target.dataset.index;
    rating = selectedIndex;
    
    for(let i=0; i<stars.length; i++){
        stars[i].classList.remove("star-filled");
    }

    for(let i=0; i<selectedIndex; i++){
        stars[i].classList.add("star-filled");
    }

    document.getElementById("star-counter").innerHTML=`Rating Count : ${selectedIndex}`;
})

container.addEventListener("mouseover", function(e){
    const selectedIndex = e.target.dataset.index;

    for(let i=0; i<stars.length; i++){
        stars[i].classList.remove("star-filled");
    }

    for(let i=0; i<selectedIndex; i++){
        stars[i].classList.add("star-filled");
    }
})

container.addEventListener("mouseleave", function(){

    for(let i=0; i<stars.length; i++){
        stars[i].classList.remove("star-filled");
    }

    for(let i=0; i<rating; i++){
        stars[i].classList.add("star-filled");
    }
})

