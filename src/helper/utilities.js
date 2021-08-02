/**
 * @param interval time interval in ms
 */
const formatTimeInterval = (interval) => {
  const days = Math.floor(interval / (1000 * 60 * 60 * 24));
  if (days > 365) {
    return `${Math.floor(days / 365)} year(s) ago`;
  } else if (days === 0) {
    return `today`;
  } else if (days === 1) {
    return `${days} day ago`;
  }
  return `${days} days ago`;
};

export const getTimeDiff = (lastAccessed) => {
  const now = new Date().getTime();
  const before = new Date(lastAccessed).getTime();
  if (Number.isNaN(before) || before === 0) {
    return 'Never accessed before';
  }
  return formatTimeInterval(now - before);
};

export const formatViews = (views) => {
  switch (views) {
    case 0:
      return 'No views';
    case 1:
      return '1 view';
    default:
      return `${views} views`;
  }
};
