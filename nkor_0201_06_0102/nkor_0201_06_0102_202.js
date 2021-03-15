function addModules() {
    var modules = {
        cutAni: function (modules, page) {
            var module = createCutAnimation({
                moduleName: "CUT_ANIMATION",
                box: page,
                audioList: ["./media/audios/nkor_0201_06_0102_202.mp3"],
                cutTimes: [
                    { start: 0, end: 20 },
                    { start: 20, end: 40 },
                    { start: 40, end: 60 }
                ],
            })
            module.start();
            modules.push(module);
        }
    }
    return modules;
}
