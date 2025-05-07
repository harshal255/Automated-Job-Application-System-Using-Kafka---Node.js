import { Kafka } from "kafkajs";
import config from ".";

export const kafka = new Kafka({
    clientId: 'job-applications', //any
    brokers: [config.kafka_broker],
});

