import { randomNumberGenerator } from '../Components/InputButtons';

describe('randomNumberGenerator', () => {
  test('should generate numbers between 0 and 6 inclusive except number 5', () => {
    // Define the number of tests you want to run
    const numTests = 1000;
    const min = 0;
    const max = 6;
    const excluded = 5;
    let allNumbersValid = true;

    for (let i = 0; i < numTests; i++) {
      const result = randomNumberGenerator();
      if (result < min || result > max || result == excluded) {
        allNumbersValid = false;
        break;
      }
    }

    expect(allNumbersValid).toBe(true);
  });
});
