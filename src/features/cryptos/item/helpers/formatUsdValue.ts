function formatUsdValue(value: number | string) {
  const isString = typeof value === 'string';
  const newValue = isString ? parseFloat(value) : value;

  if (newValue < 10) {
    return newValue.toFixed(3);
  }

  if (newValue < 100) {
    return newValue.toFixed(2);
  }

  if (newValue < 1000) {
    return newValue.toFixed(1);
  }

  return newValue.toFixed(0);
}

export default formatUsdValue;
