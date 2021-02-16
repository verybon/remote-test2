function addModules() {
    var modules = {
        narration: function(modules, page) {
            var module = createNarration({
                moduleName: "NARRATION",
                box: amt.get(".narration", page),
                audioList: ["./media/audios/nkor_0501_02_0506_510.mp3"],
                sceneTimes: [
                    { start: 5, end: 10 },
                    { start: 10, end: 20 },
                    { start: 20, end: 30 }
                ],
                textTimes: [
                    { start: 5, end: 10},
                    { start: 10, end: 20},
                    { start: 20, end: 30}
                ]
            })
            module.start();
            modules.push(module);
        }
    }
    return modules;
}
