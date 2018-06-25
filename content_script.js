chrome.runtime.onMessage.addListener((request, sender) => {
    const element = document.getElementById('content-jump-to');
    const child = element.children;

    element.classList.remove('blurred');

    for (let i = 0; i < child.length; i++) {
        const text = child[i].textContent;
        let result = '';

        for (let j = 0; j < text.length; j++) {
            let char = text.charCodeAt(j);
            if (text.charCodeAt(j) !== 32) {
                char += 2;
            }
            result += String.fromCharCode(char);
        }
        child[i].innerHTML = result;
    }
});
