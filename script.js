function clicked(){
    document.getElementById("test").innerText = "Clicked"
}
function future(){
    location.href = "future.html"
}
function about(){
    location.href = "index.html"
}
function people(){
    location.href = "people.html"
}
function hist(){
    location.href = "history.html"
}

function remap(){
    var setter = document.getElementsByClassName("threefirst")[0];
    var follower = document.getElementsByClassName("three")[0];
    var setterpos = setter.getBoundingClientRect();
    follower.style.right =((setter.offsetWidth - follower.offsetWidth)/2 + "px");
    console.log(setter.offsetWidth, follower.offsetWidth, (setter.offsetWidth - follower.offsetWidth)/2 + "px")
    console.log(setterpos.left, follower.style.left,  follower.getBoundingClientRect().left)
}
