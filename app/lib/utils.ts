export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options = {
    hour: "numeric",
    minute: "2-digit",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleString("en-US", options);
}
