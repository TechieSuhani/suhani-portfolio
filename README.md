# Suhani Maurya — Developer Portfolio

A responsive full-stack personal portfolio built with React + Vite, Framer Motion, Node.js and Express.

## Features
- Responsive dark portfolio with optional light mode
- Animated hero, scroll reveals, skill groups and project cards
- Project detail modal with technology tags and links
- Contact form connected to an Express API
- Download-resume button (add your PDF to `client/public/Suhani-Maurya-Resume.pdf`)
- SEO metadata and configurable portfolio content

## Requirements
- Node.js 18+
- npm

## Run locally

### 1. Backend
```bash
cd server
cp .env.example .env
npm install
npm run dev
```
The API runs at `http://localhost:5000`.

### 2. Frontend
Open a second terminal:
```bash
cd client
npm install
npm run dev
```
Open the Vite URL shown in the terminal (usually `http://localhost:5173`).

The Vite dev server proxies `/api` requests to the Express server.

## Configure your details
Edit `client/src/data/portfolio.js` to update:
- Social links
- Project live/GitHub URLs
- Skills and certifications
- Education details

Replace `client/public/Suhani-Maurya-Resume.pdf` with your actual resume PDF. Until then, the Resume button will not have a file to download.

## Contact form email setup (optional)
In `server/.env`, configure:
```env
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
EMAIL_USER=your-gmail-address
EMAIL_PASS=your-gmail-app-password
CONTACT_TO=work.suhanimau@gmail.com
```
Use a Gmail App Password, not your normal Gmail password. If email variables are not configured, the API validates the message and logs it to the server console instead of sending an email.

## Production deployment
- On Render, create a Blueprint from this repository and use the root `render.yaml` file. It creates the static frontend and Express API.
- The frontend is available at `https://suhani-portfolio.onrender.com`; the API health check is at `https://suhani-portfolio-api.onrender.com/api/health`.
- The free API service may spin down after inactivity, so its first request can take longer while it starts.
- To enable contact-form email delivery, add `EMAIL_USER`, `EMAIL_PASS`, and `CONTACT_TO` to the API service's environment in Render. Never commit `.env`.

## Before publishing
1. Verify every project description and date.
2. Add the real GitHub repository and live-demo URLs for each project.
3. Add the PDF resume.
4. Add project screenshots (recommended: `client/public/images/`).
5. Test the contact form on the deployed site.
