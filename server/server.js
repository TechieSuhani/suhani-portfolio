import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const clientDist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../client/dist')

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json({ limit: '20kb' }))
app.use('/api/contact', rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false }))

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'Suhani portfolio API' }))

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {}
  if (![name, email, message].every(v => typeof v === 'string' && v.trim())) {
    return res.status(400).json({ message: 'Please complete all fields.' })
  }
  if (name.length > 100 || email.length > 254 || message.length > 4000) {
    return res.status(400).json({ message: 'One or more fields are too long.' })
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) return res.status(400).json({ message: 'Please enter a valid email address.' })

  const safeName = name.trim().replace(/[<>]/g, '')
  const safeMessage = message.trim()
  try {
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.CONTACT_TO) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
      })
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.CONTACT_TO,
        replyTo: email,
        subject: `Portfolio message from ${safeName}`,
        text: `Name: ${safeName}\nEmail: ${email}\n\n${safeMessage}`
      })
      return res.status(200).json({ message: 'Message sent successfully.' })
    }
    console.log('Portfolio contact message:', { name: safeName, email, message: safeMessage })
    return res.status(200).json({ message: 'Message received. Email delivery is not configured yet.' })
  } catch (error) {
    console.error('Contact email error:', error)
    return res.status(500).json({ message: 'Unable to send your message right now.' })
  }
})

app.use(express.static(clientDist))
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api/')) return next()
  res.sendFile(path.join(clientDist, 'index.html'), error => {
    if (error) next(error)
  })
})

app.listen(PORT, '0.0.0.0', () => console.log(`Portfolio app running on port ${PORT}`))
