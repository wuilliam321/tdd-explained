function myCallback() {
  console.log('5');
}

function algo() {
  console.log('1');
  console.log('2');
  console.log('3');
  algoEnElFuturo(myCallback);
}

function algoEnElFuturo(cb) {
  setTimeout(() => {
    console.log('4')
    cb()
  }, 2000)
}

algo();
