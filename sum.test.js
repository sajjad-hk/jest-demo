import op from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(op.sum(1, 2))
    .toBe(3);
});

