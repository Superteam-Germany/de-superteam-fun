export type EventRecord = {
  id: string;
  city: string;
  community: {
    image: string;
    link: string;
    name: string;
  };
  country: string | null;
  description: string;
  endTime: string;
  image: string;
  link: string;
  name: string;
  startTime: string;
  tags: string[];
  timeZone: string;
};
