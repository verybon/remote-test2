function addModules() {
    var modules = {
        narration: function(modules, page) {
            var module = createNarration({
                moduleName: "NARRATION",
                box: amt.get(".narration", page),
                audioList: ["./media/audios/nkor_0501_08_0405_510.mp3"],
                sceneTimes: [
                    { start: 0, end: 15 },
                    { start: 15, end: 30 },
                    { start: 30, end: 45 },
                    { start: 45, end: 60 },
                    { start: 60, end: 75 },
                    { start: 75, end: 500 }
                ]
                // ,
                // textTimes: [
                //     { start: 5, end: 7},
                //     { start: 7, end: 8},
                //     { start: 8, end: 10},
                //     { start: 10, end: 12},
                //     { start: 12, end: 15},
                //     { start: 15, end: 100}
                // ]
            })
            module.start();
            modules.push(module);
        }
    }
    return modules;
}
