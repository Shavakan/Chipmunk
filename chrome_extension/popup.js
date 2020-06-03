const go_to_chipmunk_button_id = "#go_to_chipmunk";
const add_bookmark_button_id = "#add_bookmark";
const title_input_id = "#title";
const star_ratings_id = "#star_ratings";

var page_url = "";
var star_ratings = 0;

function onLoad() {
    add_button_event();
    set_default_value();
}

window.onload = onLoad;

function add_button_event() {
    $(go_to_chipmunk_button_id).click(function () {
        go_to_chipmunk();
    });
    $(add_bookmark_button_id).click(function () {
        add_bookmark();
    });

    var stars = $(star_ratings_id).children();
    for (var i = 0; i < stars.length; i++) {
        var star = stars.eq(i);
        add_star_ratings_button_event(star, i + 1);
    }
}

function add_star_ratings_button_event(star, ratings) {
    $(star).click(function (e) {
        set_star_ratings(ratings);
    });
}

function go_to_chipmunk() {
    var newURL = "https://www.google.com";
    chrome.tabs.create({ url: newURL });
}

function add_bookmark() {
    console.log($(title_input_id).val());
    console.log(star_ratings);
}

function set_default_value() {
    chrome.tabs.getSelected(null, function (tab) {
        page_url = tab.url;

        set_title(tab.title);
        set_tags();
        set_star_ratings(3);
    });
}

function set_title(title_string) {
    $(title_input_id).val(title_string);
    $(title_input_id).select();
}

function set_tags() {
    // todo: tags
}

function set_star_ratings(ratings) {
    star_ratings = ratings;

    var stars = $(star_ratings_id).children();
    for (var i = 0; i < star_ratings; i++) {
        var star = stars.eq(i);
        star.removeClass();
        star.addClass('star-fill-img');
    }
    for (var i = star_ratings; i < stars.length; i++) {
        var star = stars.eq(i);
        star.removeClass();
        star.addClass('star-unfill-img');
    }
}