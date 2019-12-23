import capitalizeFirstLetter from './capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
  it('Capitalize first letter', () => {
    expect(capitalizeFirstLetter('karl Marx')).toEqual('Karl Marx');
  });
});
