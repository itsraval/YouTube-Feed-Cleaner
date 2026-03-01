# 📺 YouTube Feed Cleaner

A lightweight Chrome Extension built to strip away the "Shorts" shelves, "Most Relevant" clutter and other sections from your YouTube.

This extension targets `ytd-rich-section-renderer` containers specifically to avoid breaking the rest of the site.

---

## 🛠️ Installation (Developer Mode)
1.  **Clone or Download** this repository.
2.  Open Chrome and navigate to `chrome://extensions/`.
3.  Enable **"Developer mode"** in the top-right corner.
4.  Click **"Load unpacked"** and select the folder containing these files.
5.  Refresh YouTube and enjoy the silence.

## ⚙️ How to Customize
Once installed, you can tailor the experience:
1. Right-click the extension icon in your toolbar.
2. Select **Options**.
3. Toggle the sections you want to hide:
   - [ ] **Shorts** (Removes the horizontal Shorts shelf)
   - [ ] **Most Relevant** (Removes "Most Relevant" algorithm picks)
   - [ ] **Breaking News** (Removes the horizontal "Breaking News" shelf)
   - [ ] **Trending** (Removes the horizontal "Trending" shelf)
4. Hit **Save** and refresh YouTube.

## 🤝 Contributing

Have a specific section you want to block? 
Feel free to fork this repo, add your logic to `content.js`, and submit a PR!
