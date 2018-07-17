import uncouple from 'uncouple';

const { reduceRight: reduce } = uncouple(Array.prototype);

export default (...λs) => (value) => reduce(λs, (value, λ) => λ(value), value);
