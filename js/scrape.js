(function() {
    var videoUrls = [];

    var buttons = document.querySelectorAll('a.btn[data-resolution]');
    for (var i = 0; i < buttons.length; ++i) {
        var videos = JSON.parse(buttons[i].getAttribute('data-resolution')).url;
        var maxRes = -1;
        var maxResIndex = -1;
        for (var j = 0; j < videos.length; ++j) {
            var resolution = parseInt(videos[j].title);
            if (resolution > maxRes) {
                maxResIndex = j;
                maxRes = resolution;
            }
        }

        if (maxRes === -1) {
            alert(
                'Error: no video found for a link! Please tell the developer!');
            continue;
        }

        var formatNumber = function(num, length) {
            var result = '' + num;
            while (result.length < length) {
                result = '0' + result;
            }
            return result;
        };

        var date = new Date(buttons[i].getAttribute('data-lecturedate'));
        var dateStr = [date.getFullYear(),
            formatNumber(date.getMonth() + 1, 2),
            formatNumber(date.getDate(), 2)].join('-');
        videoUrls.push({
            date: dateStr,
            url: videos[maxResIndex]['mp4-url']
        });
    }

    return videoUrls.reverse();
})();
