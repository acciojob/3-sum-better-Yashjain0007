function threeSum(arr, target) {
// write your code here
	arr.sort(function(a,b){return a-b;});
	let sum =0;
	for(let i=0; i<arr.length; i++)
		{
			sum = arr[target-1] + arr[target] + arr[target+1];
		}
	return sum;
  
}

module.exports = threeSum;
