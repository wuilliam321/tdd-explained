/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function two_sum(nums, target) {
  let aux = nums;
  while (aux.length) {
    const a = aux.shift();
    for (let j = 1; j < aux.length; j++) {
      if ((a + aux[j]) === target ) {
        return [i, j];
      }
    }
  }
  return [0];
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 1; j < nums.length; j++) {
  //     if ((nums[i] + nums[j]) === target ) {
  //       return [i, j];
  //     }
  //   }
  // }
  // return [0];
  // let aux_target = target;
  // let aux_nums = nums;
  // const nums_map = nums.reduce((curr, next, idx) => {
  //   if (!curr[next]) {
  //     curr[next] = [idx];
  //   } else {
  //     curr[next].push(idx);
  //   }
  //   return curr;
  // }, {});

  // if (nums_map[aux_target] !== undefined) {
  //   return [nums_map[aux_target][0]];
  // }

  // let filtered = aux_nums.filter(num => num <= aux_target);
  // let sorted = filtered.sort((a, b) => b - a);

  // let curr = sorted.shift();

  // let result = [];
  // while (sorted.length > 0) {
  //   let next = sorted.shift();
  //   let res = aux_target - curr;
  //   console.log('t', aux_target, 'c', curr, 'n', next, 'r', res);
  //   if (res <= next) {
  //     filtered = sorted.filter(num => num <= res);
  //     if (filtered.length > 0) {
  //       result.push(curr);
  //       aux_target = res;
  //       curr = res;
  //     } else {
  //       curr = next;
  //     }
  //   } else {
  //     next = sorted.shift();
  //   }
  //   if (res === 0) {
  //     result.push(curr);
  //   }
  // }
  // const a = nums_map[result.pop()];
  // const b = nums_map[result.pop()];

  // return [a.pop(), b.pop()];
}

export default two_sum;
