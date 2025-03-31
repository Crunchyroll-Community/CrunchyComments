# Crunchy Comments <img src="src/icons/icon48.png" alt="logo" width="32"/>

A browser extension that adds community comments to Crunchyroll anime series and episodes using Disqus. Discuss your favorite shows with other anime fans!

## Features
- Comment on any Crunchyroll anime series or episode
- Floating comment button that's non-intrusive
- Works on series pages, episode pages, and homepage
- Comments open in a separate window for better viewing experience

## Why Disqus?
- Ready-to-use commenting system with moderation tools
- Handles user authentication and spam protection
- No backend maintenance required
- Free for basic usage
- Widely used and trusted platform

## Technical Implementation
We use GitHub Pages to host our comment interface because:
- Zero hosting costs
- Reliable uptime
- No maintenance required
- Fast loading times globally

## Installation Guide
1. Download the extension files
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The comment button (💬) should now appear on Crunchyroll pages

## Future Scalability
If the extension grows significantly:
- Comments interface can be moved to Cloudflare Pages
- Can implement our own comment system if needed
- Multiple fallback options available for hosting

## Potential Challenges
While unlikely, here are some scenarios and solutions:
- If Disqus service changes: Can migrate to alternative comment systems
- If hosting needs change: Can move to Cloudflare/Vercel/similar services
- If Crunchyroll updates their site: Extension can be updated to match changes

## Contributing
Feel free to contribute to this project by submitting issues or pull requests!

## License
MIT License - feel free to use and modify as needed.
