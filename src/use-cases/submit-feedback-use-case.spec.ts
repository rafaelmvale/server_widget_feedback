import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const senMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: senMailSpy}
)

describe('Submit feedback', () => {
  it('Should be able to submit feedback',async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,test.jpg',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(senMailSpy).toHaveBeenCalled();
  });

  it('Should not be able to submit feedback without a type',async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,test.jpg',
    })).rejects.toThrow();
  });

  it('Should not be able to submit feedback without a comment',async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,test.jpg',
    })).rejects.toThrow();
  });


  it('Should not be able to submit feedback with an invalid screenshot',async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'test.jpg', 
    })).rejects.toThrow();
  });
});