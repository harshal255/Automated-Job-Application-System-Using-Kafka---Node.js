import config from "../config";

export const getJobApplicationTemplate = (recipientName?: string) => ({
    subject: 'Job Application - Full Stack/MERN Developer',
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto;">
      <p>Dear ${recipientName || 'Hiring Team'},</p>
      
      <p>I am Harshal Kahar, skilled in Full Stack and MERN Stack development with expertise in modern technologies like Node.js, React.js and Next.js with Typescript. I also have strong knowledge of Tailwind CSS and CSS3 for building responsive layouts from Figma designs.</p>

      <h3 style="color: #2d3748; margin-top: 24px;">Professional Experience:</h3>
      <p>I have hands-on experience in:</p>
      <ul style="margin-left:15px;">
        <li>Translating Figma designs into pixel-perfect, responsive designs using React.js or Next.js frameworks with modern UI libraries, Tailwind CSS, or custom CSS.</li>
        <li>Building scalable frontend architectures with clean, modular code using ES6+ and TypeScript.</li>
        <li>Collaborating with backend teams to integrate RESTful APIs and optimize application performance.</li>
        <li>Creating RESTful APIs using Node.js and Express.js with MySQL, MongoDB, or PostgreSQL databases.</li>
      </ul>

      <p>In my previous experience, I worked in backend development for the last 8 months, and during my internship, I worked across the entire stack—from HTML, CSS, ES6+, database design, frontend, backend, to full stack development—for 8 months at eSparkBiz.</p>

      <h3 style="color: #2d3748; margin-top: 24px;">Key Projects:</h3>

      <div style="background: #f7fafc; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="margin-top: 0; color: #4a5568;">1. Project Library (L.D. College of Engineering)</h4>
        <ul style="margin-left:15px;">
          <li><strong>Responsible for front-end development</strong> of the Project Library web application</li>
          <li>Developed the web application to provide a platform for students of our computer department to <strong>find all, filter final year projects, and visualize the Dashboard with clickable filter pie chart</strong></li>
          <li>Implemented <strong>real-time data filtering and search</strong> using a modal filter and search filter that allows users to filter data by different categories and attributes</li>
          <li>Created innovative feature enabling users to <strong>click on pie chart segments to filter data</strong>, useful for drilling down into specific datasets</li>
        </ul>
        <p style="margin-top: 8px;">
          <a href="https://www.linkedin.com/posts/harshal-kahar-4115a321b_reactjs-django-activity-7040618417598382080-43uR" 
             style="color: #3182ce; text-decoration: none; font-weight: 500;">
            View Project Demonstration Video →
          </a>
        </p>
      </div>

      <div style="background: #f7fafc; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="margin-top: 0; color: #4a5568;">2. E-commerce Web App for Lehenga and Chaniya Choli</h4>
        <ul style="margin-left:15px;">
          <li><strong>Designed and developed various web pages and components</strong> for fashion e-commerce web application</li>
          <li><strong>Integrated APIs</strong> for payment processing (Razorpay) and shipping management (Shiprocket)</li>
          <li>Implemented <strong>React Context API</strong> for global state management</li>
          <li>Enhanced user communication with <strong>Nodemailer for email notifications</strong> and order confirmations</li>
          <li>Developed comprehensive <strong>Admin Panel</strong> for order tracking and product management</li>
          <li><strong>Tech Stack:</strong> React-Vite, Material-Tailwind Library, Tailwind CSS, NodeJS, ExpressJS, React Hooks, Session, Razor Pay, Axios, MongoDB</li>
        </ul>
        <p style="margin-top: 8px;">
          <a href="https://www.linkedin.com/posts/harshal-kahar-4115a321b_connections-webdevelopment-freelancedeveloper-activity-7080934560720388096-VeGH" 
             style="color: #3182ce; text-decoration: none; font-weight: 500;">
            View Project Demonstration Video →
          </a>
        </p>
      </div>

      <h3 style="color: #2d3748; margin-top: 24px;">Additional Resources:</h3>
      <div style="display: flex; gap: 12px; margin-bottom: 24px;">
        <a href="https://drive.google.com/file/d/1nKWgsUevG13pxmGzygsRy09x_kSBp_e6/view" 
         >
          View Resume
        </a>
        <a href="https://harshalkahar.vercel.app" 
         >
          Visit Portfolio
        </a>
        <a href="https://www.linkedin.com/in/harshal-kahar-4115a321b" 
         >
          LinkedIn Profile
        </a>
      </div>

      <p>I am actively seeking Frontend/Backend or Full Stack positions and would welcome the opportunity to discuss how my skills and experience align with your team's needs.</p>

      <p>Best regards,<br/>
      <strong>Harshal Kahar</strong></p>
      
      <div style="margin-top: 32px; font-size: 14px; color: #718096;">
        <p>Connect with me:</p>
        <p>Email: ${config.email_user}</p>
        <p>Portfolio: <a href="https://harshalkahar.vercel.app" style="color: #3182ce;">harshalkahar.vercel.app</a></p>
      </div>
    </div>
  `
});