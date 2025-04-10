"use strict";
const seeMore = document.getElementById("see-more");
const seeLess = document.getElementById("see-less");
const moreWorks = document.querySelector(".works-more");

// to reveal the remaining works when the see more button is clicked
seeMore.addEventListener("click", function() {
    moreWorks.classList.remove("hidden");

    //to change see more button to see less
    seeMore.classList.add("hidden");
    seeLess.classList.remove("hidden");

    //to close the remaining works section when see less button is clicked
    seeLess.addEventListener("click", function() {
        moreWorks.classList.add("hidden");
        
        //to change the see less button to see more
        seeLess.classList.add("hidden");
        seeMore.classList.remove("hidden");
    })
})
