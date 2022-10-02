var longestCommonPrefix = function(strs) {
   let longest = "";
  for(let i = 1 ; i < strs[0].length; i ++) {
    let first = strs[0].substring(0,i);
    for(let j = 1; j < strs.length; j ++) {
        let compare = strs[j].substring(0,i)
        if (compare !== first) {
            return longest
        }
    } 
    longest = first;
}
 return longest
}


console.log(longestCommonPrefix(["flower","flour","flow"]))
const nums =  [1,2,3,45,9];
console.log(nums.reduce((a,b) => {
    console.log(a)
  return  a*b
}
,1))