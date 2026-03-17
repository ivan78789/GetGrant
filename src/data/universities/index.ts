export { UNIVERSITIES } from './list';
export { universityDetails } from './details';

export function getUniversityById(id: number) {
  const { UNIVERSITIES } = require('./list');
  return UNIVERSITIES.find((u: any) => u.id === id) ?? null;
}

export function getUniversityDetailById(id: number) {
  const { universityDetails } = require('./details');
  return universityDetails[id] ?? null;
}
