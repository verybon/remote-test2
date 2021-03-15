function addModules() {
    var modules = {
        video: function(modules, page) {
            var module = createVideoContent({
                moduleName: "VIDEO_CONTENT",
                box: page,
                src: "./media/videos/nkor_0201_06_0304_530.mp4",
                sceneTimes: [
                    { start: 1, end: 24 },
                    { start: 24, end: 41 },
                    { start: 85, end: 1000 }
                ]
            })
            module.start();
            modules.push(module);
        }
    }
    return modules;
}
