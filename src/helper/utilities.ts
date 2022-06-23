/**
 * @param interval time interval in ms
 */
const formatTimeInterval = (interval: number) => {
  const days = Math.floor(interval / (1000 * 60 * 60 * 24));
  if (days > 365) {
    return `${Math.floor(days / 365)} year(s) ago`;
  } else if (days > 60) {
    return `${Math.round(days / 30)} months ago`;
  } else if (days === 0) {
    return `today`;
  } else if (days === 1) {
    return `${days} day ago`;
  }
  return `${days} days ago`;
};

export const getTimeDiff = (lastAccessed: string) => {
  const now = new Date().getTime();
  const before = new Date(lastAccessed).getTime();
  if (Number.isNaN(before) || before === 0) {
    return "Never accessed before";
  }
  return formatTimeInterval(now - before);
};

export const formatViews = (views: number) => {
  switch (views) {
    case 0:
      return "No views";
    case 1:
      return "1 view";
    default:
      return `${views} views`;
  }
};

export const capitalizeFirstLetter = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};
