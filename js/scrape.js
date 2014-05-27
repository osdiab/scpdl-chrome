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
            alert('Error: no video found for this link!');
            continue;
        }

        var date = new Date(buttons[i].getAttribute('data-lecturedate'));
        var dateStr = [date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()].join('-');
        videoUrls.push({
            date: dateStr,
            url: videos[maxResIndex]['mp4-url']
        });
    }

    return videoUrls;
})();
