// Saves options to chrome.storage
const saveOptions = () => {
    const removeShorts = document.getElementById('shorts').checked;
    const removeRelevant = document.getElementById('relevant').checked;
    const removeBreakingNews = document.getElementById('breakingNews').checked;
    const removeTrending = document.getElementById('trending').checked;

    chrome.storage.sync.set({
            removeShorts,
            removeRelevant,
            removeBreakingNews,
            removeTrending
        },
        () => {
            let ss = document.getElementById("settingsSaved")
            ss.style.transition = 'opacity 1s ease';
            ss.style.opacity = "1"
            setTimeout(() => {
                ss.style.transition = 'opacity 1s ease';
                ss.style.opacity = '0';
            }, 3500);

        }
    );
};

// Restores checkbox state using the preferences stored in chrome.storage.
const restoreOptions = () => {
    chrome.storage.sync.get({
            removeShorts: true,
            removeRelevant: true,
            removeBreakingNews: true,
            removeTrending: true
        }, // Default values
        (items) => {
            document.getElementById('shorts').checked = items.removeShorts;
            document.getElementById('relevant').checked = items.removeRelevant;
            document.getElementById('breakingNews').checked = items.removeBreakingNews;
            document.getElementById('trending').checked = items.removeTrending;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);