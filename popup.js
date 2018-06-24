function sendMessage() {
    //Send Message to Content Script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'decrypt');
      });
}

document.getElementById('btnDecrypt').addEventListener('click', sendMessage);
