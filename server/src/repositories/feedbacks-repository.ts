export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot ?: string;
}

export interface feedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}