function addModules() {
    var modules = {
        narration: function(modules, page) {
            var module = createNarration({
                moduleName: "NARRATION",
                box: amt.get(".narration", page),
                audioList: ["./media/audios/nkor_0201_04_0304_510.mp3"],
                sceneTimes: [
                    { start: 5, end: 15 },
                    { start: 15, end: 30 }
                ],
                textTimes: [
                    { start: 5, end: 8},
                    { start: 8, end: 11},
                    { start: 11, end: 14},
                    { start: 14, end: 17},
                    { start: 17, end: 20},
                    { start: 20, end: 23},
                    { start: 23, end: 26},
                    { start: 26, end: 100}
                ]
            })
            module.start();
            modules.push(module);
        }
    }
    return modules;
}
