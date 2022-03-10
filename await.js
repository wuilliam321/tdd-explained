
async function algo() {
  console.log('1');
  console.log('2');
  console.log('3');
  await algoEnElFuturo();
  console.log('5');
}

function algoEnElFuturo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('4')
      resolve();
    }, 2000)
  })
}

algo();

