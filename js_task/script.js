var items = [7,4,8,10,1,2,2,3,4];

console.log('Items :',items);
console.log('A unique array :', items.filter((x, i, a) =>a.indexOf(x) == i));


const asc = items.sort(function(a,b){
	return a-b;
})
console.log('Array in ascending order :',asc);


function sumarr(x,i) {
	// console.log(i);
	return i+x;
}
console.log('The sum of an array is :',items.reduce(sumarr));


const desc = items.sort(function(a,b){
	return b-a;
})

console.log('The second max value of the array is :', desc[1]);


