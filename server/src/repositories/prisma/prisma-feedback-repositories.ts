import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepositories } from "../feedbacks-repositories";

export class PrismaFeedbackRepositories implements FeedbacksRepositories {
  async create ({type, comment, Screenshot}: FeedbackCreateData){
    await prisma.feedback.create({
      data: {
        type,
        comment,
        Screenshot,
      }
    })
  }
}