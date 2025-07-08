# 🚀 MailForge - Dynamic Email Sending API

MailForge is a simple, secure, and reusable **Node.js API service** that allows you to send emails from your projects without writing email logic again and again.  
It supports both **default SMTP sending** and **custom SMTP servers**, and protects your APIs using **JWT authentication** and an **Admin API key** for secure token generation.

---

## 🔧 Features

- ✅ Send emails using a default SMTP server (configured via `.env`)
- ✅ Send emails using **custom SMTP configuration** (like Gmail, SendGrid, Mailgun, etc.)
- ✅ Secure token generation API with **Admin API key protection**
- ✅ JWT-based authorization for all email APIs
- ✅ Flexible for multiple projects and teams

---

## 📂 API Endpoints

### 🔑 Generate JWT Token (for your projects)

```
POST /api/v1/generate-token
```

#### ➤ Headers:
| Key        | Value                  |
|------------|------------------------|
| admin-key  | your-admin-api-key     |

#### ➤ Body (JSON):
```json
{
  "project": "your-project-name",
  "role": "email-sender"
}
```

#### ✔️ Response:
```json
{
  "token": "<jwt-token>"
}
```

---

### ✉️ Send Basic Email (default SMTP)

```
POST /api/v1/send-basic-email
```

#### ➤ Headers:
| Key            | Value                                  |
|----------------|----------------------------------------|
| Authorization  | Bearer `<your-jwt-token>`             |
| Content-Type   | application/json                      |

#### ➤ Body (JSON):
```json
{
  "to": "receiver@example.com",
  "subject": "Hello from MailForge",
  "text": "This is the plain text version of the email.",
  "html": "<p>This is the HTML body of the email.</p>",
  "replyTo": "support@example.com"
}
```

#### ✔️ Response:
```json
{
  "success": true,
  "messageId": "<some-id>"
}
```

---

### ✉️ Send Custom SMTP Email

```
POST /api/v1/send-custom-email
```

#### ➤ Headers:
| Key            | Value                                  |
|----------------|----------------------------------------|
| Authorization  | Bearer `<your-jwt-token>`             |
| Content-Type   | application/json                      |

#### ➤ Body (JSON):
```json
{
  "from": "youremail@gmail.com",
  "to": "receiver@example.com",
  "subject": "Test Email",
  "text": "This is the plain text version of the email.",
  "html": "<p>This is the HTML version.</p>",
  "replyTo": "support@example.com",
  "smtp": {
    "host": "smtp.gmail.com",
    "port": 587,
    "secure": false,
    "auth": {
      "user": "youremail@gmail.com",
      "pass": "your-gmail-app-password"
    }
  }
}
```

---

## 🔒 Security Flow Summary

| Step | Description |
|-----|-------------|
| 1. | Admin requests a JWT token using the Admin API Key |
| 2. | Receives a JWT token (valid for ~90 days by default) |
| 3. | Uses this token to call the email APIs |
| 4. | JWT gets validated for every API call |

---

## 🌱 .env Configuration for MailForge

Create a `.env` file in your project root with the following variables:

```env
# 🔑 Admin API Key (shared only with trusted people)
ADMIN_API_KEY=your-secure-admin-key

# 🔑 JWT Secret Key
JWT_SECRET=your-secret-jwt-key

# 📧 Default SMTP credentials (for send-basic-email)
EMAIL_USER=youremail@example.com
EMAIL_PASS=your-email-app-password

# 🌐 Server port
PORT=3000
```

### 🔍 Example for Gmail SMTP:
```env
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=abcdabcdabcdabcd  # Gmail App Password (not your Gmail password)
```

---

## ▶️ How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node server.js
   ```
   or
   ```bash
   nodemon server.js
   ```

3. Test the APIs using **Postman**, **Insomnia**, or your app.

---

## 🛡️ Recommended Deployment Platforms

| Platform | Recommended For |
|---------|-----------------|
| Railway | Easiest free Node.js deployment |
| Render  | Simple and fast for backend servers |
| AWS EC2 | Production-grade servers (manual setup) |
| Heroku  | Okay but limited free tier |

---

## 📨 Example Email Providers for Custom SMTP

- Gmail (with App Passwords)
- Outlook
- SendGrid
- Mailgun
- Zoho Mail
- Postmark

---

## ✨ Author
Made by [Sarthak]

