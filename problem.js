function algo() {
  console.log('1');
  console.log('2');
  console.log('3');
  algoEnElFuturo();
  console.log('5');
}

function algoEnElFuturo() {
  setTimeout(() => console.log('4'), 2000)
}

algo();
