//WAP to print no in ascending order

var numbers=[5,8,3,49,39]

numbers.sort(function (a,b) {
 if(a<b){
    return-1
 }
 if(a>b){
    return 1;
 }
 return 0;
})
console.log(numbers)
