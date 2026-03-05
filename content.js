let settings = { removeShorts: true, removeRelevant: true, removeBreakingNews: false, removeTrending: false, removeTopNews: false,  removeExploreMoreTopics: false};
// Sets browser api
const api = typeof browser !== "undefined" ? browser : chrome;

// Get settings from storage
api.storage.sync.get(settings).then((data) => {
    settings = data;
    console.log("✅ YouTube Feed Cleaner: Initialized with settings", settings);
    removeFilteredSections();
});

const removeFilteredSections = () => {
    const sections = document.querySelectorAll("ytd-rich-section-renderer");

    sections.forEach(section => {
        const text = section.innerText;
        
        if (settings.removeShorts && text.includes("Shorts")) {
            section.remove();
            console.log("🚫 YouTube Feed Cleaner: Removed Shorts");
        }
        if (settings.removeRelevant && text.includes("Most relevant")) {
            section.remove();
            console.log("🚫 YouTube Feed Cleaner: Removed Most Relevant");
        }
        if (settings.removeBreakingNews && text.includes("Breaking news")) {
            section.remove();
            console.log("🚫 YouTube Feed Cleaner: Removed Breaking News");
        }
        if (settings.removeTrending && text.includes("Trending")) {
            section.remove();
            console.log("🚫 YouTube Feed Cleaner: Removed Trending");
        }
        if (settings.removeTopNews && text.includes("Top news")) {
            section.remove();
            console.log("🚫 YouTube Feed Cleaner: Removed Top news");
        }
        if (settings.removeExploreMoreTopics && text.includes("Explore more topics")) {
            section.remove();
            console.log("🚫 YouTube Feed Cleaner: Removed Explore more topics");
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
