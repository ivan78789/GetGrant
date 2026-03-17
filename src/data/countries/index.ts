export { COUNTRIES } from './list';
export { countryDetails } from './details';

export function getCountryById(id?: string | null) {
  const { COUNTRIES } = require('./list');
  return COUNTRIES.find((c: any) => c.id === id) ?? null;
}

export function getCountryDetailById(id?: string | null) {
  const { countryDetails } = require('./details');
  return id ? (countryDetails[id] ?? null) : null;
}
