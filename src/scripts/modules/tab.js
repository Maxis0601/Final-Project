
function foo() {
    var tabs = document.getElementsByClassName('tabs')[0];

    tabs.addEventListener( "click" , function(event) {
        var elem = event.target,
            activeTab = document.querySelector('.tabs .active'),
            activeContent = document.querySelector('.item.active'),
            elemAttr = elem.getAttribute('rel');

        activeTab.classList.remove('active');
        activeContent.classList.remove('active');

        elem.parentElement.classList.add('active');
        document.getElementById(elemAttr).classList.add('active');


    });


};

foo();
