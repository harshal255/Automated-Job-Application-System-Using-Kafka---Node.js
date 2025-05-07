import { kafka } from '../config/kafka-client';

export const adminInit = async () => {
    const admin = kafka.admin();
    console.log("Admin connecting");
    admin.connect();
    console.log("Admin connection success...");

    //creating topics
    await admin.createTopics({
        topics: [{
            topic: 'sending-email',
            numPartitions: 1
        }]
    });

    console.log("topic created success");
    await admin.disconnect().then(() => {
        console.log("admin disconnect...");
    }).catch(e => {
        console.log(`error, ${e}`);
    })
}