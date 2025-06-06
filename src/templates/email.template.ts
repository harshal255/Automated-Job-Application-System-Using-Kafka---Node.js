import config from "../config";

export const getJobApplicationTemplate = (recipientName?: string) => ({
  subject: 'Full Stack Developer | Open to New Opportunities',
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto;">
      <p>Dear ${recipientName || 'Hiring Team'},</p>

      <p>I’m <strong>Harshal Kahar</strong>, a Full Stack Developer with <strong>1.5 years of frontend</strong> and <strong>6 months of backend</strong> experience. I specialize in building responsive, scalable web applications using <strong>React.js, Next.js, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS</strong>, and more.</p>

      <p>I have hands-on experience building modern web apps from scratch and collaborating across frontend and backend teams to deliver secure, performant, and user-friendly experiences.</p>

      <h3 style="color: #2d3748;">🧠 Skills & Tools:</h3>
      <ul style="margin-left: 16px;">
        <li><strong>Frontend:</strong> React.js, Next.js, Tailwind CSS, Bootstrap, HTML5, CSS3, JavaScript</li>
        <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, MySQL, PostgreSQL, Sequelize, Redis</li>
        <li><strong>Tools:</strong> Swagger, Postman, Docusaurus, Prompt Engineering, Figma, Lighthouse/Web Vitals</li>
      </ul>

      <h3 style="color: #2d3748;">🚀 Featured Projects:</h3>

      <div style="background: #f7fafc; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="margin-top: 0; color: #2c5282;">1. Next GenArt – AI-Powered Image Generator (June 2025)</h4>
        <ul style="margin-left:15px;">
          <li>AI-based image generation with a credit model using ClipDrop API</li>
          <li>Secure user sessions with JWT auth and cookie storage</li>
          <li>Integrated Razorpay for real-time credit purchases</li>
          <li>Achieved 99/100 Lighthouse score via optimization</li>
          <li><strong>Tech:</strong> Next.js 15, React 19, Node.js (TS), Express, MongoDB</li>
        </ul>
        <a href="https://www.linkedin.com/posts/harshal-kahar-4115a321b_developers-nextjs-react-activity-7335961256215900160-jNAO" style="color: #3182ce;">🔗 View Project Post</a>
      </div>

      <div style="background: #f7fafc; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="margin-top: 0; color: #2c5282;">2. Automated Job Application System (May 2025)</h4>
        <ul style="margin-left:15px;">
          <li>Automates 500+ job applications/day using Kafka queues</li>
          <li>CSV-to-email pipeline + Nodemailer + Dockerized microservices</li>
          <li><strong>Tech:</strong> Node.js (TS), Express, Apache Kafka, Docker, REST APIs</li>
        </ul>
        <a href="https://www.linkedin.com/posts/harshal-kahar-4115a321b_developers-nodejs-kafka-activity-7326165083288436736-npYZ" style="color: #3182ce;">🔗 View Project Post</a>
      </div>

      <h3 style="color: #2d3748;">🎓 My Journey:</h3>
      <p>I’m a self-motivated developer with a strong foundation in software development. You can read more about my school and college journey here:</p>
      <a href="https://harshalkahar.vercel.app/schoolandcollegejourney" style="color: #3182ce;">📘 Read My Story</a>

      <h3 style="color: #2d3748;">🔗 Links & Resources:</h3>
      <ul style="margin-left:15px;">
        <li>🌐 Portfolio: <a href="https://harshalkahar.vercel.app" style="color: #3182ce;">harshalkahar.vercel.app</a></li>
        <li>📂 GitHub: <a href="https://github.com/harshal255" style="color: #3182ce;">github.com/harshal255</a></li>
        <li>🔗 LinkedIn: <a href="https://www.linkedin.com/in/harshal-kahar-4115a321b" style="color: #3182ce;">linkedin.com/in/harshal-kahar-4115a321b</a></li>
        <li>🐦 Twitter: <a href="https://twitter.com/harshalkahar389" style="color: #3182ce;">@harshalkahar389</a></li>
        <li>📄 Resume: <a href="https://drive.google.com/file/d/1Om2U-iRkeDxi1bgzlbEiybsDJ6_xsTGp/view?usp=drive_link" style="color: #3182ce;">Download Resume</a></li>
      </ul>

      <p>I’m actively exploring <strong>Full Stack / Frontend / Backend Developer</strong> roles (full-time or freelance) and would love to contribute to your team. Let’s connect!</p>

      <p>Best regards,<br/>
      <strong>Harshal Kahar</strong></p>

      <div style="margin-top: 32px; font-size: 14px; color: #718096;">
        <p>📧 Email: ${config.email_user}</p>
        <p>📱 Mobile: +91 95374 07968</p>
        <p>🌐 Portfolio: <a href="https://harshalkahar.vercel.app" style="color: #3182ce;">harshalkahar.vercel.app</a></p>
        <p>📄 Resume: <a href="https://drive.google.com/file/d/1Om2U-iRkeDxi1bgzlbEiybsDJ6_xsTGp/view?usp=drive_link" style="color: #3182ce;">My Resume</a></p>
      </div>
    </div>
  `
});
