var player = videojs(
    'my-video',
    {
        controls: true,
        fluid: true,
        html5: {
            vhs: {
                overrideNative: true
            }
        }
    },
    function () {
        var player = this;
        player.eme();
        player.src({
            src: 'https://cdn.bitmovin.com/content/assets/art-of-motion_drm/mpds/11331.mpd',
            type: 'application/dash+xml',
            keySystems: {
                'com.widevine.alpha': 'https://cwip-shaka-proxy.appspot.com/no_auth',
            }
        });


        player.ready(function () {

            player.tech(true).on('keystatuschange', function (event) {
                console.log("event: ", event);

            });

        });
    }

);

const chapter1 = {start: 0, end: 60, description: "This is first Chapter"}
const chapter2 = {start: 60, end: 120, description: "This is second Chapter"}
const chapter3 = {start: 120, end: 210, description: "This is the last Chapter"}

scrollToSegment = (segmentNum) => {
    switch(segmentNum){
        case 0:
            player.currentTime(chapter1.start)
            break;
        case 1:
            player.currentTime(chapter2.start)
            break;
        case 2:
            player.currentTime(chapter3.start)
            break;
    }
}