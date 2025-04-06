# Crunchy Comments <img src="src/icons/icon128.png" alt="logo" height="40"/>

💬 A browser extension that adds a comments section to Crunchyroll using the Disqus platform.  
Join discussions with other anime fans — right from the episode or series page!

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 🚀 Features

- 💬 Add comments to any anime series or episode on Crunchyroll
- 🧼 Minimal, floating comment button — non-intrusive and always accessible
- 🖥️ Currently works on series and episode pages, but technically compatible with any Crunchyroll page
- 🔗 Comments open in a styled popup (hosted via GitHub Pages)

---

## 🤔 Why Disqus?

- ✅ No backend setup required
- 🛡️ Built-in moderation and anti-spam tools
- 🔐 Handles login & authentication
- 🌍 Popular and widely trusted
- 💸 Free for basic use

---

## ⚙️ Technical Details

- The comments interface is hosted on **GitHub Pages**:
  - 💡 Reliable, fast, and zero-cost hosting
  - 🌐 Global CDN for speedy comment loading
- The extension passes metadata via query parameters to load the relevant thread in the Disqus embed.
- We chose **Disqus** and **GitHub Pages** because they require zero maintenance, making this solution lightweight and reliable — unlike other alternatives that depend on custom servers or APIs which can go down or break.

---

## 📥 Installation Guide

1. Clone or [download this repo as ZIP](https://github.com/crunchyroll-community/CrunchyComments/archive/refs/heads/main.zip)
2. Go to `chrome://extensions/`
3. Enable **Developer mode** (top-right)
4. Click **Load unpacked**
5. Select the unzipped extension folder
6. Visit Crunchyroll and click the 💬 button on any anime page

---

## 🛠 Contributing

We welcome contributions!  
Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

> 📢 Join us in making Crunchyroll a better place for fan discussions!

---

## 📄 License

Licensed under the **MIT License** — free to use, share, and improve.

---

Made by [Ayush](https://github.com/IkemenSenpai)
