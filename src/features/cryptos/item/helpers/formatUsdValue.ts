function formatUsdValue(value: number | string) {
  const isString = typeof value === 'string';
  const numberValue = isString ? parseFloat(value) : value;
  const stringValue = !isString ? value.toString() : value;

  //Check for number in scientific notation like 1e-7
  if (stringValue.includes('e-')) {
    const [num, negativeIndex] = stringValue.toLocaleLowerCase().split('e-');
    const scaledNum = parseFloat(num) / Math.pow(10, parseInt(negativeIndex));
    return scaledNum.toFixed(parseInt(negativeIndex));
  }

  //This function is used to display a very low number with at least one positive digit
  if (numberValue < 0.001) {
    let positiveIndex = 0;

    for (let i = 0; i < stringValue.length; i++) {
      if (stringValue[i] !== '0' && stringValue[i] !== '.') {
        positiveIndex = i;
        break;
      }
    }

    if (positiveIndex > 1) {
      return numberValue.toFixed(positiveIndex - 1);
    }
    return numberValue;
  }

  if (numberValue < 10) {
    return numberValue.toFixed(3);
  }

  if (numberValue < 100) {
    return numberValue.toFixed(2);
  }

  if (numberValue < 1000) {
    return numberValue.toFixed(1);
  }

  return numberValue.toFixed(0);
}

export default formatUsdValue;
