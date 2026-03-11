# ZNE Dashboard - Vercel Ready

A beautiful Discord bot dashboard built with Next.js and Tailwind CSS, optimized for deployment on Vercel.

## Features

- 🎨 Slick, modern design with gradient accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js for optimal performance
- 🚀 One-click deployment to Vercel
- 📊 Command categories with organized sections
- 💎 Feature highlights and statistics

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open http://localhost:3000 in your browser.

### Deploy to Vercel

1. Push this code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/zne-dashboard
git push -u origin main
```

2. Go to [Vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. (Optional) Add custom domain under project settings

## File Structure

```
vercel-dashboard/
├── pages/
│   ├── index.js          # Main dashboard page
│   └── _document.js      # HTML wrapper
├── styles/
│   └── globals.css       # Tailwind CSS
├── next.config.js        # Next.js config
├── tailwind.config.js    # Tailwind config
├── vercel.json           # Vercel deployment config
└── package.json          # Dependencies
```

## Commands Listed

### Economy
balance, daily, work, treasure, gamble, leaderboard

### Fun
joke, roast, compliment, ship, waifu, iq, pp, rate, 8ball, flip, dice

### Moderation
kick, ban, clear, mute, unmute

### Server Setup
setup_verify, setup_automod, guild_config, send_verify

### Utility
ping, userinfo, serverinfo, snipe

### AI Features
imagine, ai_chat, devpanel

## Customization

Edit `pages/index.js` to:
- Change colors (update Tailwind classes)
- Add/remove command categories
- Update bot information
- Modify feature descriptions
- Add more statistics

## Support

For issues with the bot, see the main [ZNE Bot Documentation](../replit.md)

---

Made by **silkcord** with ❤️
if u see this u gay (geez running this through chatgpt to make me a text was totally hard)
