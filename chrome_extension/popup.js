const go_to_chipmunk_button_id = '#go_to_chipmunk';
const add_bookmark_button_id = '#add_bookmark';
const title_input_id = '#title';
const tags_id = '#tags';
const star_ratings_id = '#star_ratings';

// firebase variable
var session_id = 'dc4b3b02-a31a-11ea-bb37-0242ac1300';
var channels_array = [];
var tags_array = [];

// user typed variable
var page_url = '';
var channel = 'channels';
var star_ratings = 0;

function onLoad() {
    init_firebase();
    init_go_to_chipmunk();
    init_title();
    init_star_ratings();
    init_add_bookmark();

    refresh_channels();
    set_star_ratings(3);
}

window.onload = onLoad;

function init_firebase() {
    var firebaseConfig = {
        apiKey: 'AIzaSyBtsxRTEPf2OD9963FXhaG427COIo3DKbM',
        authDomain: 'chipmunk-89590.firebaseapp.com',
        databaseURL: 'https://chipmunk-89590.firebaseio.com',
        projectId: 'chipmunk-89590',
        storageBucket: 'chipmunk-89590.appspot.com',
        messagingSenderId: '146415661272',
        appId: '1:146415661272:web:5d29e51eb1e6ae2011e7ad'
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

function init_go_to_chipmunk() {
    $(go_to_chipmunk_button_id).click(function () {
        go_to_chipmunk_page();
    });
}

function go_to_chipmunk_page() {
    // todo: go to chipmunk page with session id
    var newURL = 'https://www.google.com';
    chrome.tabs.create({ url: newURL });
}

function init_title(title_string) {
    chrome.tabs.getSelected(null, function (tab) {
        page_url = tab.url;

        $(title_input_id).val(tab.title);
        $(title_input_id).select();
    });
}

function init_star_ratings() {
    var stars = $(star_ratings_id).children();
    for (var i = 0; i < stars.length; i++) {
        var star = stars.eq(i);
        init_star_ratings_button(star, i + 1);
    }
}

function init_star_ratings_button(star, ratings) {
    $(star).click(function (e) {
        set_star_ratings(ratings);
    });
}

function init_add_bookmark() {
    $(add_bookmark_button_id).click(function () {
        add_bookmark_request();
    });
}

function refresh_channels() {
    var url = '/' + session_id;
    var query = firebase.database().ref(url).orderByKey();
    query.once('value')
        .then(function (snapshot) {
            channels_array = [];

            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                channels_array.push(key);
            });

            refresh_channels_dropdown();
            refresh_tags();
        });
}

function refresh_channels_dropdown() {
    set_channel(channels_array[0]);

    var select = document.getElementById('select_channel');
    for (var i = 0; i < channels_array.length; i++) {
        var chan = channels_array[i];
        var el = document.createElement('option');
        el.textContent = chan;
        el.value = chan;
        select.appendChild(el);
    }
}

function set_channel(chan) {
    channel = chan;
    refresh_tags();
}

function set_star_ratings(ratings) {
    star_ratings = ratings;

    var stars = $(star_ratings_id).children();
    for (var i = 0; i < star_ratings; i++) {
        var star = stars.eq(i);
        star.removeClass('star-unfill-img');
        star.removeClass('star-fill-img');
        star.addClass('star-fill-img');
    }
    for (var i = star_ratings; i < stars.length; i++) {
        var star = stars.eq(i);
        star.removeClass('star-unfill-img');
        star.removeClass('star-fill-img');
        star.addClass('star-unfill-img');
    }
}

function refresh_tags() {
    var url = '/' + session_id + '/' + channel + '/tags';
    var query = firebase.database().ref(url).orderByKey();
    query.once('value')
        .then(function (snapshot) {
            tags_array = [];

            var tags = snapshot.val();
            for (var i = 0; i < tags.length; i++) {
                tags_array.push(tags[i]);
            }

            refresh_tags_dropdown_event();
        });
}

function refresh_tags_dropdown_event() {
    // todo: add new typed tag
    // todo: get default selected tags array
    var selected_tags_array = ['Bash'];

    $(tags_id).empty();
    for (var i = 0; i < tags_array.length; i++) {
        var tag = tags_array[i];
        var selected = '';
        if (selected_tags_array.includes(tag)) {
            selected = ' selected="selected"';
        }

        var elem = '<option value="' + tag + '"' + selected + '>' + tag + '</option>';
        $(tags_id).append(elem);
    }

    $('.div-tags-init').addClass('display-none');
    $(tags_id).tokenize2();
}

function add_tag_request(tag) {
    tags_array.push(tag);

    var url = '/' + session_id + '/' + channel + '/tags';
    var query = firebase.database().ref(url);
    query.set(tags_array, function (error) {
        if (error) {
            alert('error!!!');
        } else {
            // todo: update tag dropdownmenu
            // todo: add new tag in select
        }
    });
}

function add_bookmark_request() {
    var title = $(title_input_id).val();
    if (title.length == 0) {
        alert('Title should be inputed');
        return;
    }

    var tags = JSON.parse(JSON.stringify($(tags_id).val()));
    if (tags == null || tags.length == 0) {
        alert('Tags should be selected');
        return;
    }

    var url = '/' + session_id + '/' + channel + '/bookmarks';
    var newKey = firebase.database().ref(url).push().key;

    var updates = {};
    var bookmarkData = {
        rating: star_ratings,
        tags: tags,
        title: title,
        url: page_url,
        uuid: newKey,
    };
    updates[newKey] = bookmarkData;

    var query = firebase.database().ref(url);
    query.update(updates, function (error) {
        if (error) {
            alert('error!!!');
        } else {
            add_connection_request(newKey);
        }
    });
}

function add_connection_request(child_uuid) {
    var url = '/' + session_id + '/' + channel + '/connections';
    var newKey = firebase.database().ref(url).push().key;

    var updates = {};
    // todo: get parent bookmark uuid
    var connectionData = {
        child_uuid: child_uuid,
        parent_uuid: "good-parent-uuid",
        type: ":thumbs-up:",
    };
    updates[newKey] = connectionData;

    var query = firebase.database().ref(url);
    query.update(updates, function (error) {
        if (error) {
            alert('error!!!');
        } else {
            go_to_chipmunk_page();
        }
    });
}