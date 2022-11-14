describe('for function', () => {
  it('should be able to define function in function scope', () => {
    function outerFunction() {
      const myName = 'World';
      function innerFunction() {
        return `Hello ${myName}`;
      }

      return innerFunction();
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'Hello World';
    // --end->

    expect(outerFunction()).toEqual(expected);
  });

  it('should pass function as value', () => {
    const sayHello = () => 'Hello';

    function greeting(prefixGenerator, name) {
      return `${prefixGenerator()} ${name}`;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'Hello World';
    // --end->

    expect(greeting(sayHello, 'World')).toEqual(expected);
  });

  it('should allow optional arguments for any function', () => {
    function square(x) {
      return x * x;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 36;
    // --end->

    expect(square(6, 'Hello', 4)).toEqual(expected);
  });

  it('should be undefined for not specified parameter', () => {
    function minus(left, right) {
      if (right === undefined) {
        return -left;
      }
      return left - right;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedForSingleArgument = -5;
    const expectedForTwoArguments = 2;
    // --end->

    expect(minus(5)).toEqual(expectedForSingleArgument);
    expect(minus(5, 3)).toEqual(expectedForTwoArguments);
  });

  it('should specify default parameters', () => {
    function power(base, exponent = 2) {
      let result = 1;
      for (let count = 0; count < exponent; count += 1) {
        result *= base;
      }
      return result;
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 16;
    // --end->

    expect(power(4)).toEqual(expected);
  });

  it('should change captured variable', () => {
    let guessIfIAmChanged = 'Origin';

    function wrapValue() {
      guessIfIAmChanged = 'Changed';
    }

    wrapValue();

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'Changed';
    // --end->

    expect(guessIfIAmChanged).toEqual(expected);
  });

  it('should pass pre-defined function as callback', () => {
    function repeat(n, action) {
      for (let i = 0; i < n; i += 1) {
        action(i);
      }
    }
    const labels = [];
    repeat(3, (index) => labels.push(index * 3));

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = [0, 3, 6];
    // --end->

    expect(labels).toEqual(expected);
  });

  it('should create higher order function', () => {
    function greaterThan(n) {
      return function (value) {
        return value > n;
      };
    }

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = false;
    // --end->

    expect(greaterThan(10)(3)).toEqual(expected);
  });

  it('should not make you crazy even we change the control flow', () => {
    function unless(test, then) {
      if (!test) then();
    }

    function repeat(n, action) {
      for (let i = 0; i < n; i += 1) {
        action(i);
      }
    }

    const logs = [];

    repeat(5, (n) => {
      unless(n % 2 === 1, () => logs.push(n));
    });

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = [0, 2, 4];
    // --end->

    expect(logs).toEqual(expected);
  });
});
