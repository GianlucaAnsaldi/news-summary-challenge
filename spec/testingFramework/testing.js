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
        : `Fail: ${actualValue} is not equal to ${expectedValue}`;
      this.printResponse(log, result);
    },

    toBeInstanceOf(expectedValue) {
      let result = actualValue instanceof expectedValue;
      let log = result
        ? `Pass: ${actualValue.constructor.name} is an instance of ${expectedValue.name}`
        : `Fail: ${actualValue.constructor.name} is not an instance of ${expectedValue.name}`;
      this.printResponse(log, result);
    },
  };
};

const it = (label, testCallback) => {
  console.log(`Test: ${label}`);
  testCallback();
};
