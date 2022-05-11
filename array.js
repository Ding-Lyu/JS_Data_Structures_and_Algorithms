let arr = ["Harry", "Ding", "Condordia"];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  console.log(i);
}

arr.forEach((person) => {
  console.log(person);
});
