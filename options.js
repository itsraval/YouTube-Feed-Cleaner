// Sets browser api
const api = typeof browser !== "undefined" ? browser : chrome;

// Saves options to storage
const saveOptions = () => {
    const removeShorts = document.getElementById('shorts').checked;
    const removeRelevant = document.getElementById('relevant').checked;
    const removeBreakingNews = document.getElementById('breakingNews').checked;
    const removeTrending = document.getElementById('trending').checked;
    const removeTopNews = document.getElementById('topNews').checked;
    const removeExploreMoreTopics = document.getElementById('exploreMoreTopics').checked;

    api.storage.sync.set({
            removeShorts,
            removeRelevant,
            removeBreakingNews,
            removeTrending,
            removeTopNews,
            removeExploreMoreTopics
    }).then(() => {
        let ss = document.getElementById("settingsSaved")
        ss.style.transition = 'opacity 1s ease';
        ss.style.opacity = "1";
        setTimeout(() => {
            ss.style.transition = 'opacity 1s ease';
            ss.style.opacity = '0';
        }, 3500);
    });
};

// Restores checkbox state
const restoreOptions = () => {
    api.storage.sync.get({
        removeShorts: true,
        removeRelevant: true,
        removeBreakingNews: false,
        removeTrending: false,
        removeTopNews: false,
        removeExploreMoreTopics: false
    }).then((items) => {
        document.getElementById('shorts').checked = items.removeShorts;
        document.getElementById('relevant').checked = items.removeRelevant;
        document.getElementById('breakingNews').checked = items.removeBreakingNews;
        document.getElementById('trending').checked = items.removeTrending;
        document.getElementById('topNews').checked = items.removeTopNews;
        document.getElementById('exploreMoreTopics').checked = items.removeExploreMoreTopics;
    });
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);