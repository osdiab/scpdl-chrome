chrome.tabs.executeScript({ file: '/js/scrape.js' }, function(result) {
    var generateCode = function(urls) {
        var code = [];
        for (var i = 0; i < urls.length; ++i) {
            var filename = urls[i].date + '.mp4';
            code[i] = ['wget -O', filename, urls[i].url].join(' ');
            console.log(code[i]);
        }

        return code.join('\n');
    };

    document.getElementById('result').innerText = generateCode(result[0]);
});
