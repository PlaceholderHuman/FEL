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
    var number = document.getElementsByClassName("three").length;
    var setterpos = setter.getBoundingClientRect();
    for (let i = 0; i < number; i++) {
        console.log(i)
        var follower = document.getElementsByClassName("three")[i];
        console.log(setterpos.right)
        follower.style.right = 10 +(setter.offsetWidth - follower.offsetWidth)/2 + "px";
        //10 from initial css of threefirst
    }
    //This is assuming that the follower element is smaller than the setter element, bug if not this condition 😹😹😹😹
}
