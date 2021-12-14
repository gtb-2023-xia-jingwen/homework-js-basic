// eslint-disable-next-line max-classes-per-file
describe('for object', () => {
  it('should access property via dot or bracket', () => {
    const person = { name: 'Bob' };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expectedName = 'Bob';
    // --end->

    expect(person.name).toEqual(expectedName);
    // eslint-disable-next-line dot-notation
    expect(person['name']).toEqual(expectedName);
  });

  it('should get undefined if property is not defined', () => {
    const person = { name: 'Bob' };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = undefined;
    // --end->

    expect(person.whatTheHellIsThat).toEqual(expected);
  });

  it('should remove object property using delete operator', () => {
    const person = { name: 'Bob' };

    // <--start
    // Please write a line of code to remove the `name` property.
    delete person.name;
    // --end->

    expect(person.name).toBeUndefined();
  });

  it('should be able to find all the keys', () => {
    const person = {
      name: 'Bob',
      yearOfBirth: 2019,
    };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = ['name', 'yearOfBirth'];
    // --end->

    expect(Object.keys(person)).toEqual(expected);
  });

  it('should create object with braces expression', () => {
    const person = {
      name: 'Bob',
      greeting() {
        return `Hello, I am ${this.name}`;
      },
    };

    person.name = 'John';

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'Hello, I am John';
    // --end->

    expect(person.greeting()).toEqual(expected);
  });

  it('should serialize object to JSON', () => {
    const person = { name: 'Bob', yearOfBirth: 2019 };
    const json = JSON.stringify(person);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = '{"name":"Bob","yearOfBirth":2019}';
    // --end->

    expect(json).toEqual(expected);
  });

  it('should parse JSON to object', () => {
    const json = '{"color":"Red","value":"#ff0000"}';
    const color = JSON.parse(json);

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = {
      color: 'Red',
      value: '#ff0000',
    };
    // --end->

    expect(color).toEqual(expected);
  });

  it('should point to the object it was called on for "this" in a method', () => {
    function speak(words) {
      return `The ${this.type} rabbit says ${words}.`;
    }
    const rabbit = { type: 'white', speak };

    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'The white rabbit says Hello.';
    // --end->

    expect(rabbit.speak('Hello')).toEqual(expected);
  });

  it('should explicitly specify this using call method', () => {
    function speak(words) {
      return `The ${this.type} rabbit says ${words}.`;
    }
    const rabbit = { type: 'white', speak };

    speak.call(rabbit, 'Hello');

    // 你可能需要参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = 'The white rabbit says Hello.';
    // --end->

    expect(rabbit.speak('Hello')).toEqual(expected);
  });

  it('should capture this in the scope around it for arrow function', () => {
    function normalize() {
      return this.coords.map((n) => n / this.length);
    }

    const actual = normalize.call({ coords: [0, 10, 15], length: 5 });

    // 你可能需要参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    // <--start
    // Please write down the correct value. You should write the final result directly.
    const expected = [0, 2, 3];
    // --end->

    expect(actual).toEqual(expected);
  });
});
