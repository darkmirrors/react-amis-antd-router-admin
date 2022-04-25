export function alignInRange(value: number, minValue: number, maxValue: number): number {
  if (value < minValue) {
    return minValue
  }
  if (value > maxValue) {
    return maxValue
  }
  return value
}
