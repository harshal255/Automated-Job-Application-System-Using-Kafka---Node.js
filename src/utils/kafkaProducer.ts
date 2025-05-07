import { Producer } from 'kafkajs';
import { kafka } from '../config/kafka-client';

let producer: Producer;
let isConnected = false;

export const initializeProducer = async () => {
    try {
        if (producer && isConnected) return producer;

        producer = kafka.producer();
        console.log("Producer connecting...");
        
        await producer.connect(); 
        isConnected = true;
        
        console.log("Producer connected successfully");
        
        producer.on('producer.disconnect', () => {
            console.log('Producer disconnected');
            isConnected = false;
        });
        
        return producer;
    } catch (error) {
        console.error('Producer connection failed:', error);
        isConnected = false;
        throw error;
    }
}

export const sendApplicationMessage = async (email: string) => {
    try {
        if (!producer || !isConnected) {
            await initializeProducer();
        }

        await producer.send({
            topic: 'job-applications',
            messages: [
                {
                    value: JSON.stringify({
                        email
                }),
                },
            ],
        });
        console.log(`Email produced successfully to ${email}`);
    } catch (error) {
        console.error('Error sending message:', error);
        isConnected = false;
        throw error;
    }
};

export const disconnectProducer = async () => {
    try {
        if (producer && isConnected) {
            await producer.disconnect();
            isConnected = false;
            console.log("Producer disconnected successfully");
        }
    } catch (error) {
        console.error('Error disconnecting producer:', error);
    }
};