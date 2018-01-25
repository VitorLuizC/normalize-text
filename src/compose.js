import uncouple from 'uncouple';

const { then } = uncouple(Promise);
const { reduceRight: reduce } = uncouple(Array);

export default (...λs) => (value) => reduce(λs, (value, λ) => λ(value), value);
