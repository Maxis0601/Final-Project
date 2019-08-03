var myPages = document.querySelectorAll("ul.navPages > li");
function myPageClicks(pageClickEvent) {
        for (var i = 0; i < myPages.length; i++) {
            myPages[i].classList.remove("active");
        }
        var clickedTab = pageClickEvent.currentTarget;
        clickedTab.classList.add("active");
        pageClickEvent.preventDefault();
        var myContentPanes = document.querySelectorAll(".pagePane");
        for ( var i = 0; i < myContentPanes.length; i++) {
            myContentPanes[i].classList.remove("active");
        }
        var anchorReference = pageClickEvent.target;
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add("active");
    }

for(var i = 0; i < myPages.length; i++){
    myPages[i].addEventListener("click", myPageClicks)
}
