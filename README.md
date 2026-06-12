# Sri Sai Balaji Xerox — Full Website

**Print. Sip. Done.** | Balaji Colony, Tirupati

---

## Project Structure

```
ssb/
├── frontend/
│   └── index.html          ← Complete website (open this in browser)
├── backend/
│   ├── server.js           ← Node.js + Express + MongoDB API
│   ├── package.json
│   └── .env.example        ← Copy to .env and fill in your MongoDB URI
└── README.md
```

---

## Frontend — Zero Setup Needed

Just open `frontend/index.html` in any browser. That's it.

- No build step required
- All CDN dependencies load automatically
- Works offline for all sections except the contact form API

**Features included:**
- Three.js multicolor particle hero
- Scroll progress bar
- Sticky navbar (transparent → dark on scroll)
- Mobile hamburger menu
- Scroll reveal animations
- Animated stat counters
- Today's hours auto-highlighted
- Click-to-call: 099495 42232
- WhatsApp chat link
- Google Maps directions
- Contact form (connects to backend when running)

---

## Backend Setup

### 1. Install dependencies
```bash
cd backend
npm install
```

### 2. Set up MongoDB
- Create a free cluster at https://www.mongodb.com/atlas
- Get your connection string
- Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
- Edit `.env` and paste your MongoDB URI:
```
MONGO_URI=mongodb+srv://YOUR_USER:YOUR_PASS@cluster0.mongodb.net/ssb_xerox
PORT=5000
```

### 3. Start the backend
```bash
npm run dev       # Development (with auto-reload)
npm start         # Production
```

### 4. API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Save a new enquiry |
| GET | `/api/contact` | View all enquiries |

**POST /api/contact — Request body:**
```json
{
  "name": "Ravi Kumar",
  "phone": "9876543210",
  "service": "Xerox & Printing",
  "message": "Need 50 color copies"
}
```

---

## Deployment Options

### Frontend
- Upload `frontend/index.html` to any web host
- Or use **Netlify**: drag & drop the frontend folder at netlify.com/drop
- Or use **GitHub Pages**: push to repo, enable Pages

### Backend
- **Render.com** (free): connect GitHub repo, set environment variables
- **Railway.app**: one-click Node.js deploy
- **Vercel**: works with Express

### Update API URL in frontend
Once backend is deployed, update this line in `index.html`:
```javascript
const res = await fetch('http://localhost:5000/api/contact', {
```
Change to your deployed backend URL:
```javascript
const res = await fetch('https://your-backend.onrender.com/api/contact', {
```

---

## Business Info

- **Phone:** 099495 42232
- **WhatsApp:** +91 99495 42232
- **Address:** 1-2-190/1, Indera Colony, Balaji Colony, Tirupati, AP 517501
- **Hours:** Mon–Sat 10:00 AM – 9:00 PM
- **Google Rating:** 4.8 ★ (12 reviews)

---

## Sections

1. Hero — Three.js particles + headline + CTAs
2. Marquee — Scrolling ticker
3. Why Choose Us — 6 feature cards
4. Stats — Animated counters
5. Print Services — 6 service cards
6. Juice & Beverages — Full menu with photos
7. Reviews — 3 Google reviews
8. Hours & Location — Table + map
9. Contact — Form + direct contact
10. Footer

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JS |
| 3D Animation | Three.js r128 |
| Icons | Tabler Icons |
| Fonts | Google Fonts (Playfair Display + Poppins + Inter) |
| Backend | Node.js + Express.js |
| Database | MongoDB (via Mongoose) |
| HTTP Client | Fetch API |