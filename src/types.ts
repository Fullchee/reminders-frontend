export type Keyword = {
  label: string;
  value: string;
};

export type Link = {
  keywords: string[];
  title: string;
  url: string;
  notes: string;
  id?: number;
  flag: boolean;
  views: number;
  // in seconds
  start_time?: number;
  last_accessed?: string;
};
