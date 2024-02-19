export type Keyword = {
  id: number;
  label: string;
  value: string;
};

export type Link = {
  keywords: any;
  title: string;
  url: string;
  notes: string;
  id?: number;
  flag: boolean;
  views: number;
  // in seconds
  startTime?: number;
  start_time?: number;
  lastAccessed?: string;
  last_accessed?: string;
};
