<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script>!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
        oldLoadAp && oldLoadAp();

        new APlayer({
            container: document.getElementById('aplayer'),
            fixed: true,
            autoplay: false,
            loop: 'all',
            order: 'random',
            theme: '#b7daff',
            preload: 'none',
            audio: [
                {
                    name: '一路向北',
                    artist: 'jay',
                    url: 'https://blogimgurl.oss-cn-hangzhou.aliyuncs.com/ylxb.mp3',
                    cover: 'https://blogimgurl.oss-cn-hangzhou.aliyuncs.com/img20201214132006.png'
                }
            ]
        });
    }
})();