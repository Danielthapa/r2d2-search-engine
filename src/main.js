var engine = "google";

$('.google').click(function(){
    if( $('.duckduckgo').hasClass('clicked') || $('.youtube').hasClass('clicked')) {
        $('.duckduckgo').removeClass('clicked');
        $('.youtube').removeClass('clicked');
    }                
    $('.google').toggleClass('clicked');
});

$('.youtube').click(function(){
    if( $('.duckduckgo').hasClass('clicked') || $('.google').hasClass('clicked')) {
        $('.duckduckgo').removeClass('clicked');
        $('.google').removeClass('clicked')
    }                
    $('.youtube').toggleClass('clicked');
});

$('.duckduckgo').click(function(){
    if( $('.youtube').hasClass('clicked') || $('.google').hasClass('clicked')) {
        $('.youtube').removeClass('clicked');
        $('.google').removeClass('clicked')
    }                
    $('.duckduckgo').toggleClass('clicked');
});

function selectEngine(eng) {
    engine = eng;
    console.log(engine);
}

function makeSearch() {
var search = document.querySelector(`.${engine}form`);
var searchText = search.firstElementChild.value;
search.firstElementChild.value = document.myForm.SearchText.value;  
search.submit();
console.log(document.myForm.SearchText.value);
}