import { Sum } from "../Sum"

test('Sum f should return sum of 2 no.', () => {
  const result = Sum(3, 8)
  expect(result).toBe(11)
})