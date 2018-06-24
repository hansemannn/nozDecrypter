chrome.runtime.onMessage.addListener(
    function (request, sender) {
        //alert(request);
        var element = document.getElementById('content-jump-to');
        element.classList.remove("blurred");
        var child = element.children;
        var zahler = 0;
        console.log(child);
        
        for (var i = 0; i < child.length; i++){
            //console.log(child[i].tagName);
            var text = child[i].textContent;
            var result = "";
            for (var j = 0; j < text.length; j++){
                if (text.charCodeAt(j) != 32){
                    var char = text.charCodeAt(j) + 2;
                } else {
                    var char = text.charCodeAt(j);
                }
                result += String.fromCharCode(char);
            }
            child[i].innerHTML = result;
        }
        console.log(zahler);
    });