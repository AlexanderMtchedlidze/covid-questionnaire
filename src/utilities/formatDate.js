const ISOFormattedDate = (dateString) => {
  const [day, month, year] = dateString.split("/");

  const date = new Date(`20${year}`, month - 1, day);

  return date.toISOString();
};

export default ISOFormattedDate;
