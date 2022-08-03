import { prisma } from "../../prisma";
import { FeedbackCreateData, feedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbackRepository implements feedbacksRepository {
  async create ({type, comment, screenshot}: FeedbackCreateData){
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    });
  }
}