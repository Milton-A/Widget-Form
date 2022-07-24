export interface FeedbackCreateData {
  type: string;
  comment: string;
  Screenshot ?: string;
}

export interface FeedbacksRepositories {
  create: (data: FeedbackCreateData) => Promise<void>;
}