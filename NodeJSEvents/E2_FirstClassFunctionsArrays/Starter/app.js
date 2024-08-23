var obj = {
    greet: "hello"
}

console.log(obj.greet)
console.log(obj['greet'])

var txt = 'greet';
console.log(obj[txt])

const arr = [];
arr.push(function(){
    console.log("hi 1")
})

arr.push(function () {
  console.log("hi 2");
});

arr.push(function () {
  console.log("hi 3");
});

arr.forEach(function(item){
    item()
})