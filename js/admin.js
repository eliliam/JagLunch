function adminify(){
    $("#message").toggleClass("hidden");
    $("#messageEdit").toggleClass("hidden");
    $("#adminHeader").toggleClass("hidden");
    $("#save-btn").toggleClass("hidden").on("click", event => {
        let message = $("#messageEdit").val();
        ws.send(JSON.stringify({
            "exec": "addFlower",
            "trash": {
                "level": f.trashVal,
                "message": ""
            },
            "safety": {
                "level": f.safetyVal,
                "message": ""
            },
            "tardies": {
                "level": f.tardyVal,
                "message":""
            }
        }));
        ws.send(JSON.stringify({"exec": "addAnnouncement", "message": message}));
    });
    $("#petal-trash").on("click", event => {
        switch (f.trashCur) {
            case f.BlueDark:
                f.setColor('trash', 0.5);
                break;
            case f.OrangeDark:
                f.setColor('trash', 1.0);
                break;
            case f.RedDark:
                f.setColor('trash', 0.0);
        }
    });
    $("#petal-tardy").on("click", event => {
        switch (f.tardyCur) {
            case f.BlueDark:
                f.setColor('tardy', 0.5);
                break;
            case f.OrangeDark:
                f.setColor('tardy', 1.0);
                break;
            case f.RedDark:
                f.setColor('tardy', 0.0);
        }
    });
    $("#petal-safety").on("click", event => {
        switch (f.safetyCur) {
            case f.BlueLight:
                f.setColor('safety', 0.5);
                break;
            case f.OrangeLight:
                f.setColor('safety', 1.0);
                break;
            case f.RedLight:
                f.setColor('safety', 0.0);
        }
    });
}