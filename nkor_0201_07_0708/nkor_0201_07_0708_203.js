function addModules() {
    var modules = {
        cutAni: function (modules, page) {
            var module = createCutAnimation({
                moduleName: "CUT_ANIMATION",
                box: page,
                audioList: ["./media/audios/nkor_0201_07_0708_203.mp3"],
                cutTimes: [
                    { start: 0, end: 36 },
                    { start: 36, end: 53 },
                    { start: 53, end: 100 }
                ],
            })
            module.start();
            modules.push(module);
        }
    }
    return modules;
}
