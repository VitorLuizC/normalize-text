/**
 * Capitalize first character of received text.
 * @example
 * capitalizeFirstLetter('karl Marx');
 * //=> "Karl Marx"
 * @param {string} text - A `string` value.
 * @returns {string}
 */
const capitalizeFirstLetter = (text: string) =>
  text.charAt(0).toLocaleUpperCase() + text.substring(1);

export default capitalizeFirstLetter;
