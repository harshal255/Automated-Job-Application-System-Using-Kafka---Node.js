import { kafka } from '../config/kafka-client';
import sendEmail from '../services/email-service';

const consumer = kafka.consumer({ groupId: 'email-group' });

export const startEmailConsumer = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: 'job-applications', fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const { email } = JSON.parse(message.value?.toString() || '{}');
        try {
          await sendEmail(email);
          console.log(`Email consume ${email}`);
        } catch (error) {
          console.error(`Error processing ${email}:`, error);
        }
      },
    });
  } catch (error) {
    console.log(`error in startEmailConsumer`, error)
  }
};