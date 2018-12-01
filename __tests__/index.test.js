import actionCreator from '../src';

describe('actionCreator util test suit', () => {
  test('is a function', () => {
    expect(actionCreator).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    expect(actionCreator()).toBeInstanceOf(Function);
  });

  test('composes an action creator that works correctly', () => {
    const output = actionCreator('TYPE')('PAYLOAD');
    const expectedOutput = { type: 'TYPE', payload: 'PAYLOAD' };
    expect(output).toEqual(expectedOutput);
  });
});