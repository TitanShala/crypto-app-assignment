/**
 * Calculates the percentage difference between two values, indicating increase or decrease.
 *
 * @param oldValue - The initial value (base value).
 * @param newValue - The new value to compare against the old value.
 * @returns The percentage difference between the two values, rounded to two decimal places.
 */

function calculatePercentageDifference(
  oldValue: number,
  newValue: number,
): number {
  if (oldValue === 0) {
    return 0;
  }

  const difference = newValue - oldValue;
  const percentageDifference = (difference / Math.abs(oldValue)) * 100;

  return parseFloat(percentageDifference.toFixed(2)); // Round to two decimal places
}

export default calculatePercentageDifference;
