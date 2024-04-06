const minEatingSpeed = require('../875_KokoEatingBananas/875_KokoEatingBananas.js');

describe('Koko Eating Bananas', () => {
  it('Case where hours match pile size', () => {
    const s = [3, 6, 7, 11];
    const result = minEatingSpeed(s, 4);
    expect(result).toEqual(11);
  });

  it('Case where more hours than pile size but looks for the smallest eating pace', () => {
    const s = [30, 11, 23, 4, 20];
    const result = minEatingSpeed(s, 6);
    expect(result).not.toEqual(26);
  });

  it('Case where more hours than pile size', () => {
    const s = [30, 11, 23, 4, 20];
    const result = minEatingSpeed(s, 6);
    expect(result).toEqual(23);
  });
});
