var reverse = function (x) {
  let str = x.toString();
  for (let el = str.length; el > 0; el--) {
    console.log(str[el]);
  }
};

console.log(reverse(-326));
