export { COUNTRIES } from './list';
export { countryDetails } from './details';

export function getProgramDetailById(id: number) {
  const { programDetails } = require('./details');
  return programDetails[id] ?? null;
}
