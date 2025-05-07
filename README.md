# Automated Job Application System

Automate sending job applications to HR contacts from Google Sheets data using Kafka queue and Node.js.

## Features
- Bulk email sending (up to 500/day within Gmail limits)
- CSV processing from Google Sheets exports
- Kafka message queue for reliable email processing
- Dockerized infrastructure

## Tech Stack
- Node.js/Express with TypeScript
- Apache Kafka + Zookeeper
- Nodemailer for email delivery
- Docker containers

## Setup Instructions

### Prerequisites
- Node.js v16+
- Docker installed
- Gmail account (with App Password if using 2FA)

