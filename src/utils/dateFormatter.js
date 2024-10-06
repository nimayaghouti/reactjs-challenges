export const formatDate = (date) => {
  const parsedDate = new Date(date);

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const dateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
    parsedDate
  );
  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    parsedDate
  );

  return `${formattedTime}, ${formattedDate}`;
};
