# 🚀 Automated Job Application System

[![Node.js](https://img.shields.io/badge/Node.js-v16+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue.svg)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Required-blue.svg)](https://www.docker.com/)
[![Kafka](https://img.shields.io/badge/Apache%20Kafka-Latest-orange.svg)](https://kafka.apache.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An intelligent and scalable job application automation system that streamlines the process of sending personalized job applications to HR contacts using Apache Kafka message queues and Node.js. Perfect for job seekers looking to automate their application process while maintaining personalization and professionalism.

## ✨ Features

- 📧 **Bulk Email Processing**: Send up to 500 emails per day within Gmail API limits
- 📊 **CSV Data Processing**: Import and process HR contact data from Google Sheets exports
- ⚡ **Kafka Message Queue**: Reliable, scalable email processing with Apache Kafka
- 🐳 **Dockerized Infrastructure**: Complete containerized setup for easy deployment
- 📝 **Email Templates**: Customizable email templates for personalized applications
- 📎 **Resume Attachment**: Automatic PDF resume attachment to applications
- 🔒 **Rate Limiting**: Built-in rate limiting to respect email service limits
<!-- - 🔄 **Retry Mechanism**: Automatic retry for failed email deliveries
- 📈 **Monitoring**: Track email delivery status and success rates -->

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Message Queue**: Apache Kafka + Zookeeper
- **Email Service**: Nodemailer with Gmail integration
- **Containerization**: Docker & Docker Compose
- **Data Processing**: CSV parsing and processing
- **API Testing**: Postman collection included

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Docker Desktop** - [Download here](https://www.docker.com/products/docker-desktop/)
- **Git** - [Download here](https://git-scm.com/)
- **Gmail Account** with App Password (if using 2FA)
- **Postman** (optional, for API testing) - [Download here](https://www.postman.com/)

## 🚀 Quick Start Guide

### Step 1: Clone the Repository

```bash
git clone https://github.com/harshal255/Automated-Job-Application-System-Using-Kafka---Node.js
cd Automated-Job-Application-System-Using-Kafka---Node.js
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Environment Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Configure your environment variables in `.env`:
   ```env
   # Email Configuration
   EMAIL_USER=xxxxxxxxxxx@xxxx.xxx
   EMAIL_PASSWORD=xxxxxxxxxxxxxxxx
   
   # Application Configuration
   PORT=3000
   ```

### Step 4: Start Kafka Infrastructure

```bash
# Stop any existing containers (optional)
docker compose down

# Start Kafka and Zookeeper containers
docker compose up
#or
docker compose up -d
```

**⏳ Wait for Kafka to fully initialize (30-60 seconds) before proceeding.**

### Step 5: Start the Application

Open a new terminal and run:

```bash
npm run dev
```

### Step 6: Import Postman Collection (Optional)

1. Open Postman
2. Click "Import" button
3. Navigate to `src/postman-collection/` directory
4. Import the JSON collection file
5. Start testing the APIs!

🎉 **Congratulations!** Your application is now running at `http://localhost:3000`

## 📁 Project Structure

```
📦 Automated-Job-Application-System
├─ 📄 .env.example                    # Environment variables template
├─ 📄 .gitignore                     # Git ignore rules
├─ 📄 README.md                      # Project documentation
├─ 📄 docker-cli.txt                 # Docker commands reference
├─ 📄 docker-compose.yml             # Docker services configuration
├─ 📄 package.json                   # Node.js dependencies and scripts
├─ 📄 package-lock.json              # Dependency lock file
├─ 📄 tsconfig.json                  # TypeScript configuration
├─ 📂 data/                          # Data files and assets
│  ├─ 📄 Harshal_Resume.pdf          # Resume attachment
│  ├─ 📄 company_wise_hr_contacts.csv # HR contacts database
│  └─ 📄 talent_acquisition_database.csv # Talent acquisition data
└─ 📂 src/                           # Source code
   ├─ 📂 config/                     # Configuration files
   │  ├─ 📄 index.ts                 # Main application config
   │  └─ 📄 kafka-client.ts          # Kafka client configuration
   ├─ 📂 controllers/                # Request handlers
   │  ├─ 📄 recruter.controller.ts   # Recruiter operations
   │  ├─ 📄 send-email.controller.ts # Email sending logic
   │  └─ 📄 talentAcquisition.controller.ts # Talent acquisition operations
   ├─ 📂 helpers/                    # Utility functions
   │  └─ 📄 index.ts                 # Common helper functions
   ├─ 📂 postman-collection/         # API testing collection
   │  └─ 📄 *.json                   # Postman collection files
   ├─ 📂 routes/                     # API route definitions
   │  ├─ 📄 recruters.routes.ts      # Recruiter routes
   │  ├─ 📄 send-email.routes.ts     # Email routes
   │  └─ 📄 talentAcquisition.route.ts # Talent acquisition routes
   ├─ 📂 services/                   # Business logic layer
   │  └─ 📄 email-service.ts         # Email service implementation
   ├─ 📂 templates/                  # Email templates
   │  └─ 📄 email.template.ts        # Email template definitions
   ├─ 📂 utils/                      # Kafka utilities
   │  ├─ 📄 kafkaAdmin.ts            # Kafka admin operations
   │  ├─ 📄 kafkaConsumer.ts         # Message consumer logic
   │  └─ 📄 kafkaProducer.ts         # Message producer logic
   ├─ 📄 index.ts                    # Application entry point
   └─ 📄 types.ts                    # TypeScript type definitions
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build TypeScript to JavaScript
npm start           # Start production server
npm run lint        # Run ESLint for code quality
npm run test        # Run test suite

# Docker Management
docker compose up    # Start Kafka infrastructure with logs
docker compose up -d # Start Kafka infrastructure in background
docker compose down  # Stop all containers
docker compose down -v # Stop containers and remove volumes
docker compose logs  # View container logs
```


## 🔒 Gmail Setup Guide

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification

### Step 2: Generate App Password
1. Go to Google Account settings
2. Security → 2-Step Verification → App passwords
3. Select "Mail" and generate password
4. Copy the 16-character password

### Step 3: Update Environment Variables
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## 🐳 Docker Management

### Useful Docker Commands

```bash
# View running containers
docker ps

# View all containers (including stopped)
docker ps -a

# View container logs
docker compose logs kafka
docker compose logs zookeeper

# Stop specific service
docker compose stop kafka

# Restart services
docker compose restart

# Remove all containers and volumes
docker compose down -v --remove-orphans

# Rebuild containers
docker compose up --build
```

### Kafka Management

```bash
# Access Kafka container
docker exec -it kafka bash

# List Kafka topics
docker exec kafka kafka-topics --list --bootstrap-server localhost:9092

# Create a topic
docker exec kafka kafka-topics --create --topic email-queue --bootstrap-server localhost:9092
```

## 📝 Usage Examples

### 1. Preparing Your Data

1. **Update Resume**: Replace `data/Harshal_Resume.pdf` with your resume
2. **Prepare CSV**: Format your HR contacts CSV with columns:
   - `name`: HR contact name
   - `email`: HR email address
   - `company`: Company name
   - `position`: Job position (optional)

### 2. Customizing Email Templates

Edit `src/templates/email.template.ts` to customize your email content:

```typescript
export const emailTemplate = {
  subject: "Application for {position} at {company}",
  body: `
    Dear {name},
    
    I hope this email finds you well. I am writing to express my interest in the {position} position at {company}.
    
    [Your personalized message here]
    
    Best regards,
    [Your name]
  `
};
```

## ⚠️ Important Notes & Best Practices

### Rate Limits & Compliance
- **Gmail Limits**: 500 emails/day for free accounts, 2000/day for paid
- **Respect Recipients**: Always include unsubscribe options
- **Data Privacy**: Ensure HR contact data is obtained ethically and legally
- **Personalization**: Customize emails to avoid spam filters

### Email Best Practices
- Use professional email templates
- Include relevant skills and experience
- Attach updated resume
- Follow up appropriately
- Track application responses

### Technical Considerations
- Monitor Kafka consumer lag
- Implement proper error handling
- Use environment-specific configurations
- Regular backup of important data

## 🐛 Troubleshooting

### Common Issues & Solutions

#### 🔴 Kafka Connection Error
```bash
# Solution: Restart Kafka containers
docker compose down
docker compose up -d
# Wait 60 seconds for full initialization
```

#### 🔴 Port Already in Use
```bash
# Solution: Kill process using the port
lsof -ti:3000 | xargs kill -9
# Or change PORT in .env file
```

#### 🔴 Email Authentication Error
- ✅ Verify Gmail App Password is correct
- ✅ Check 2FA is enabled on Gmail account
- ✅ Ensure EMAIL_USER and EMAIL_PASS are set correctly

#### 🔴 Docker Issues
```bash
# Reset Docker environment
docker system prune -a
docker compose down -v
docker compose up --build
```

#### 🔴 CSV Processing Error
- ✅ Ensure CSV has proper headers
- ✅ Check file encoding (UTF-8 recommended)
- ✅ Verify file path in data/ directory

### Getting Help

If you encounter issues:
1. Check the troubleshooting section above
2. Review container logs: `docker compose logs`
3. Open an issue on GitHub with detailed error information
4. Contact the maintainer (details below)

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests if applicable
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Contribution Guidelines
- Follow TypeScript best practices
- Add proper error handling
- Include documentation for new features
- Test your changes thoroughly
- Follow the existing code style

### Areas for Contribution
- 🔧 Additional email service providers
- 📊 Enhanced analytics and reporting
- 🎨 Better email templates
- 🔒 Enhanced security features
- 📱 Web dashboard interface
- 🧪 Comprehensive testing suite

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author & Contact

**Harshal Kahar**

- 🐙 **GitHub**: [@harshal255](https://github.com/harshal255)
- 💼 **LinkedIn**: [Harshal Kahar](https://www.linkedin.com/in/harshal-kahar-4115a321b/)
- 🐦 **Twitter**: [@harshal_kahar](https://twitter.com/harshalkahar389)
- 📧 **Email**: harshalskahar389@gmail.com

## 🙏 Acknowledgments

- Apache Kafka community for the excellent message queue system
- Nodemailer team for the robust email library
- Docker team for containerization technology
- All contributors who help improve this project

## ⭐ Support the Project

If this project helped you land your dream job or streamline your application process:

- ⭐ **Star this repository** on GitHub
- 🍴 **Fork and contribute** to make it even better
- 📢 **Share it** with fellow job seekers
- 💬 **Provide feedback** and suggestions

---

**Happy Job Hunting! 🎯 May this tool help you land your dream job!**

---

*Built with ❤️ by [Harshal](https://github.com/harshal255) | Last updated: June 2025*
