// Your Javascript Code Goes Here
function greet() {
    console.log("hi")
}
greet();

function logGreeting(fn){
    fn()
}
logGreeting(greet)

var grettMe = function () {
    console.log("hi")
}

grettMe()

