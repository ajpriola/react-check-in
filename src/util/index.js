function formatNamePart(part) {
  return part.charAt(0).toUpperCase() + part.slice(1);
}

export function formatName(first, last, admin) {
  let formattedFirst;
  if (!admin) {
    formattedFirst = first.charAt(0).toUpperCase();
  } else {
    formattedFirst = formatNamePart(first);
  }

  const formattedLast = formatNamePart(last);

  return `${formattedFirst} ${formattedLast}`;
}

export default formatName;
