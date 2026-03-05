# 📺 YouTube Feed Cleaner

A lightweight, Browser Extension designed to declutter your YouTube experience. Take control of your feed by hiding "Shorts", "Most Relevant" and other sections automatically.

This extension targets `ytd-rich-section-renderer` containers specifically to avoid breaking the rest of the site.

## 🌐 Browser Support:
- Chrome
- Firefox
- Edge
- Brave
- Opera

---

## 🛠️ Chrome / Edge / Brave / Opera Installation (Developer Mode)
1.  **Clone or Download** this repository.
2.  Open your browser and navigate to `chrome://extensions/`.
3.  Enable **"Developer mode"** (usually in the top-right corner).
4.  Click **"Load unpacked"** and select the folder containing these files.
5.  Refresh YouTube and enjoy the silence.

## 🛠️ Firefox Installation
1.  **Download** the file `YouTubeFeedCleaner.xpi` from this repository.
2.  Open Firefox and navigate to `about:addons`.
3.  Click **"Setting wheel"** (in the top-right corner).
4.  Click **"INstall Add-on From File..."** and select `YouTubeFeedCleaner.xpi` file.
5.  Refresh YouTube and enjoy the silence.

## ⚙️ How to Customize
Once installed, you can tailor the experience:
1. Right-click the extension icon in your toolbar.
2. Select **Options**.
3. Toggle the sections you want to hide:
   - [ ] **Shorts** (Removes the horizontal Shorts shelf)
   - [ ] **Most relevant** (Removes "Most relevant" algorithm picks)
   - [ ] **Breaking news** (Removes the horizontal "Breaking news" shelf)
   - [ ] **Trending** (Removes the horizontal "Trending" shelf)
   - [ ] **Top news** (Removes the horizontal "Top news" shelf)
   - [ ] **Explore more topics** (Removes the horizontal "Explore More Topics" shelf)
4. Hit **Save** and refresh YouTube.

## 🤝 Contributing

Have a specific section you want to block? 
Feel free to fork this repo, add your logic to `content.js`, `options.js` and `options.html`, and submit a PR!
