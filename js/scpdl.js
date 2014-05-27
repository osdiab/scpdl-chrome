chrome.tabs.executeScript({ file: '/js/scrape.js' }, function(result) {
    var generateCode = function(urls) {
        var code = [];
        for (var i = 0; i < urls.length; ++i) {
            code[i] = ['wget -O', urls[i].date, urls[i].url].join(' ');
            console.log(code[i]);
        }

        return code.join('\n');
    };

    document.getElementById('result').innerText = generateCode(result[0]);
});
