let test = [1, 2, 3, 4];

function sumFor(num) {
  let sum = 0;
  for(i = 0; i < num.length; i++){
    sum = sum + num[i]
  }
  return sum;
}
console.log(sumFor(test));

function sumWhile(num){
  let sum = 0;
  let i = 0;
  while(i < num.length) {
    sum += num[i];
    i++
  }
  return sum;
}
console.log(sumWhile(test));

const sumTheSimpleWay = (nums) => _.reduce(nums, function(memo, num) {return memo + num;}, 0);


console.log(sumTheSimpleWay(test));