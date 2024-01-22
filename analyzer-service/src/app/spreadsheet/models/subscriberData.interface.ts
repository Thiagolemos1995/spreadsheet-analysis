export interface SubscriberData {
  id?: string;
  filename?: string;
  subscriberDataColumns?: unknown;
  subscriberDataRows?: unknown[];
}

export interface SubscriberDataResponse extends SubscriberData {
  message?: string;
  error?: string;
}
