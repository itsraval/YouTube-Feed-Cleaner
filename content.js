let settings = { removeShorts: true, removeRelevant: true, removeBreakingNews: false, removeTrending: false };

// Get settings from storage
chrome.storage.sync.get(settings, (data) => {
    settings = data;
    removeFilteredSections();
});

const removeFilteredSections = () => {
    const sections = document.querySelectorAll("ytd-rich-section-renderer");

    sections.forEach(section => {
        const text = section.innerText;
        
        if (settings.removeShorts && text.includes("Shorts")) {
            section.remove();
            console.log("🚫 YT Cleaner: Removed Shorts");
        }
        if (settings.removeRelevant && text.includes("Most relevant")) {
            section.remove();
            console.log("🚫 YT Cleaner: Removed Most Relevant");
        }
        if (settings.removeBreakingNews && text.includes("Breaking news")) {
            section.remove();
            console.log("🚫 YT Cleaner: Removed Breaking News");
        }
        if (settings.removeTrending && text.includes("Trending")) {
            section.remove();
            console.log("🚫 YT Cleaner: Removed Trending");
        }
    });
};

const observer = new MutationObserver(() => {
    removeFilteredSections();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});