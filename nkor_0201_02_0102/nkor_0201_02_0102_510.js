function addModules() {
    var modules = {
        video: function(modules, page) {
            var module = createVideoContent({
                moduleName: "VIDEO_CONTENT",
                box: page,
                src: "./media/videos/nkor_0201_02_0102_510.mp4",
            })
            module.start();
            modules.push(module);
        }
    }
    return modules;
}
