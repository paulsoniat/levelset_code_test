const formatDate = (dateString) => {
  const splitDate = dateString.split(' ');
  const formattedDate = `${splitDate[2]} ${splitDate[1]} ${splitDate[3]}`
  return formattedDate;
}

export {formatDate}