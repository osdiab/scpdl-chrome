chrome.tabs.executeScript({ file: '/js/scrape.js' }, function(result) {
    var generateCode = function(urls) {
        var formatInteger = function(num, len) {
            var formatted = "" + num;
            while (formatted.length < len) {
                formatted = "0" + formatted;
            }
            return formatted;
        }

        var generateFilename = function(url, index) {
            var origFilename = url.split('/').slice(-1)[0];
            var withoutExt = origFilename.slice(
                0, origFilename.lastIndexOf('.'));
            var extension = origFilename.slice(withoutExt.length);
            return withoutExt + '_S01E' + formatInteger(i + 1, 2) + extension;
        };

        var code = [];
        for (var i = 0; i < urls.length; ++i) {
            var filename = generateFilename(urls[i].url, i);

            code[i] = ['wget -O', filename, urls[i].url].join(' ');
            console.log(code[i]);
        }

        return code.join('\n');
    };

    document.getElementById('result').innerText = generateCode(result[0]);
});
