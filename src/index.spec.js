import two_sum from '.';

const asc = (a, b) => b - a;
test('two sum', () => {
  expect(two_sum([1], 1)).toContain(0);
});

test('[2,7] t=9 should [0,1]', () => {
  expect(two_sum([2, 7], 9)).toContain(0);
  expect(two_sum([2, 7], 9)).toContain(1);
});

test('[1,2,7] t=9 should [1,2]', () => {
  expect(two_sum([1, 2, 7], 9)).toContain(1);
  expect(two_sum([1, 2, 7], 9)).toContain(2);
});

test('[1,2,7] t=8 should [0,2]', () => {
  expect(two_sum([1, 2, 7], 8)).toContain(0);
  expect(two_sum([1, 2, 7], 8)).toContain(2);
});

test('[3,2,4] t=6 should [1,2]', () => {
  expect(two_sum([3, 2, 4], 6)).toContain(1);
  expect(two_sum([3, 2, 4], 6)).toContain(2);
});

test('[3,3] t=6 should [0,1]', () => {
  expect(two_sum([3, 3], 6)).toContain(0);
});

test('[3,3,4] t=6 should [0,1]', () => {
  expect(two_sum([3, 3, 4], 6)).toContain(0);
  expect(two_sum([3, 3, 4], 6)).toContain(1);
});
