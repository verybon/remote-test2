function addModules() {
    var modules = {
        cutAni: function (modules, page) {
            var module = createCutAnimation({
                moduleName: "CUT_ANIMATION",
                box: page,
                audioList: ["./media/audios/nkor_0201_10_0304_201.mp3"],
                cutTimes: [
                    { start: 5, end: 10 },
                    { start: 11, end: 15 },
                    { start: 16, end: 20 },
                    { start: 21, end: 26 }
                ],
            })
            module.start();
            modules.push(module);
        }
    }
    return modules;
}
