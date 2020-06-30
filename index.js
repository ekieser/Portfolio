function aboutBtn() {
    $("#js-show-about").on("click", function() {
        $("#about-me").toggleClass("hide");
        $("#projects-page").addClass("hide");
        $("#contact-page").addClass("hide");
    });
}

function projectsBtn() {
    $("#js-show-projects").on("click", function() {
        $("#projects-page").toggleClass("hide");
        $("#about-me").addClass("hide");
        $("#contact-page").addClass("hide");
    });
}

function contactBtn() {
    $("#js-show-contact").on("click", function() {
        $("#contact-page").toggleClass("hide");
        $("#projects-page").addClass("hide");
        $("#about-me").addClass("hide");
    })
}

function blogBtn() {
    $(".expand-btn").on("click", function() {
        $(this).find(".post").toggleClass("hide-post");
    })
}

$(document).ready(function () {
    aboutBtn();
    projectsBtn();
    contactBtn();
    blogBtn();
});