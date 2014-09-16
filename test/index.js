var fill = require('../');
var test = require('tap').test;

test('Array.prototype.fill', function (t) {
  t.plan(7);

  t.deepEqual([1, 2, 3].fill(4)               , [4, 4, 4]);
  t.deepEqual([1, 2, 3].fill(4, 1)            , [1, 4, 4]);
  t.deepEqual([1, 2, 3].fill(4, 1, 2)         , [1, 4, 3]);
  t.deepEqual([1, 2, 3].fill(4, 1, 1)         , [1, 2, 3]);
  t.deepEqual([1, 2, 3].fill(4, -3, -2)       , [4, 2, 3]);
  t.deepEqual([1, 2, 3].fill(4, NaN, NaN)     , [1, 2, 3]);
  t.deepEqual([].fill.call({ length: 3 }, 4)  , {0: 4, 1: 4, 2: 4, length: 3});
});
