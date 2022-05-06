import { prisma } from "../../prisma";
import { FeedbackData, FeedbackRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbackRepository {
  async create({type, comment, screenshot}: FeedbackData) {
    await prisma.feedback.create({
      data:{
        type,
        comment,
        screenshot,
      }
    })

   }  
}