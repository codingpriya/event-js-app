// Add your javascript here. Plagiarism will NOT be tolerated!
var apply_btn = document.querySelector(".basic-plan-btn"),
    success_msg = document.querySelector(".success-msg"),
    pre_apply_btn = document.querySelector(".premium-apply-btn"),
    error_msg = document.querySelector(".error-msg"),
    open_modal = document.querySelector(".error-msg a"),
    modal = document.querySelector(".modal"),
    close = document.querySelector(".close"),
    container = document.querySelector(".container"),
    see_details = document.querySelector(".see-details-link"),
    event_details_modal = document.querySelector(".see-details-modal"),
    event_details_close = document.querySelector(".see-details-close");


apply_btn.addEventListener("click", () => {
    apply_btn.innerText = "Applied";
    apply_btn.disabled = true;
    success_msg.innerHTML = "You have successfully applied the job";
    setTimeout(() => {
        success_msg.style.display = "none";
    }, 1000)
})

pre_apply_btn.addEventListener("click", () => {
    error_msg.style.display = "block";
    pre_apply_btn.disabled = true;
})

/**
    Modal after click on "Click here"
 */
open_modal.addEventListener("click", modalAppear);

function modalAppear() {
    modal.style.display = "block";
    container.style.pointerEvents = "none";
    container.style.position = "fixed";
    container.style.filter = "blur(4px)";
}

close.addEventListener("click", modalDisappear);

function modalDisappear() {
    modal.style.display = "none";
    container.style.pointerEvents = "auto";
    container.style.position = "relative";
    container.style.filter = "blur(0px)";
}

/**
    Modal after click on "See details"
 */

see_details.addEventListener("click", eventModalAppear);

function eventModalAppear() {
    event_details_modal.style.display = "block";
    container.style.pointerEvents = "none";
    container.style.position = "fixed";
    container.style.filter = "blur(4px)";
}

event_details_close.addEventListener("click", eventModalDisappear);

function eventModalDisappear() {
    event_details_modal.style.display = "none";
    container.style.pointerEvents = "auto";
    container.style.position = "relative";
    container.style.filter = "blur(0px)";
}

/********** Share the event with a friend **********/
setEventLinks();

function socialLinksOpen(url){
    var left = (screen.width - 600)/2;
    var top = (screen.height - 600)/2;

    var params = "menubar=no,toolbar=no,width=600,height=600,status=no,top="+top+",left="+left;
    window.open(url, "NewWindow", params)
}

function setEventLinks(){
    var pageUrl = encodeURIComponent(document.URL);
    var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));

    var facebook = document.querySelector(".facebook");
    var twitter = document.querySelector(".twitter");
    var linkedin = document.querySelector(".linkedin");
    
    facebook.addEventListener("click", () => {
        url = "https://www.facebook.com/sharer.php?u="+pageUrl;
        socialLinksOpen(url);
    })

    twitter.addEventListener("click", () => {
        url = "https://www.twitter.com/intent/tweet?url="+pageUrl+"&text="+tweet;
        socialLinksOpen(url);
    })

    linkedin.addEventListener("click", () => {
        url = "https://www.linkedin.com/shareArticle?mini=true&url="+pageUrl;
        socialLinksOpen(url);
    })
}
