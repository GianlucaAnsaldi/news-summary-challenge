const expect = (actualValue) => {
  return {
    printResponse(message, result) {
      let css = result ? 'green' : 'red';
      console.log(`%c ${message}`, `background: ${css};`);
    },

    toEqual(expectedValue) {
      let result = actualValue === expectedValue;
      let log = result
        ? `Pass: ${actualValue} is equal to ${expectedValue}`
        : `Fail: ${actualValue} is note equal to ${expectedValue}`;
      this.printResponse(log, result);
    },
  };
};

const it = (label, testCallback) => {
  console.log(`Test: ${label}`);
  testCallback();
};
