function formatNamePart(part) {
  return part.charAt(0).toUpperCase() + part.slice(1);
}

export function formatName(first, last, admin) {
  const formattedFirst = formatNamePart(admin ? first : first.charAt(0));
  const formattedLast = formatNamePart(last);
  return `${formattedFirst} ${formattedLast}`;
}

export function formatDate(date) {
  return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

export function convertPatientWithDate(patient) {
  if (patient) {
    const converted = patient;
    converted.date = new Date(patient.date);
    return converted;
  }
  return null;
}
