async function duplicateActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab && tab.id !== undefined) {
    await chrome.tabs.duplicate(tab.id);
  }
}

chrome.commands.onCommand.addListener((command) => {
  if (command === "duplicate-tab") duplicateActiveTab();
});

// Clicking the toolbar icon does the same thing.
chrome.action.onClicked.addListener(duplicateActiveTab);
