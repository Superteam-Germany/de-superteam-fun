export type EventRecord = {
  id: string;
  createdTime: string;
  fields: {
    date: string;
    image: string;
    description: string;
    url: string;
    event_name: string;
    display: boolean;
  };
};
