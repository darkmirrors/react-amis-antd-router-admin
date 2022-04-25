import { alignInRange } from './alignInRange'

// 最小值和最大值的区间为[5,30]，输入的 value 为10，期望输出结果为 10
test('test alignInRange return value', () => {
  expect(alignInRange(10, 5, 30)).toBe(10)
})
// 最小值和最大值的区间为[10,30]，输入的 value 为5，期望输出结果为限定范围内的最小值 10
test('test alignInRange return minValue', () => {
  expect(alignInRange(5, 10, 30)).toBe(10)
})
// 最小值和最大值的区间为[10,30]，输入的 value 为50，期望输出结果为限定范围内的最大值 30
test('test alignInRange return maxValue', () => {
  expect(alignInRange(50, 10, 30)).toBe(30)
})
