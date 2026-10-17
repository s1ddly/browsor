// 1. Tell Firefox which file to use for the sidebar action
browser.sidebarAction.setPanel({ panel: browser.runtime.getURL("browsor.html") });

// 2. Listen for clicks on the extension's toolbar icon
browser.action.onClicked.addListener(() => {
  // Toggles the sidebar open if closed, or closed if open
  browser.sidebarAction.toggle();
});