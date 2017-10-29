let f = new Flower();

let ws = new WebSocket("wss://smerkuosdavid.ddns.net");

let session = {};

ws.onerror = err => {
    f.error();
    $('#message').text("There was an error, please refresh and check your connection");
};

ws.onopen = conn => {
    ws.send({"exex": "auth", "user": "david.smerkous.1@mypisd.net", "key": "password"});
};
ws.onmessage = message => {

    switch (message.exec) {
        case auth:
            session.expiresAt = message.expiresAt;
            session.isAdmin = message.isAdmin;
            if (session.isAdmin) {
                adminify();
            }
            break;
        case "flower":
            if (message.flowers.length === 1){
                session.flower = message.flowers[0];
                f.setColor('trash', session.flower.trash.level);
                f.setColor('tardy', session.flower.tardies.level);
                f.setColor('safety', session.flower.safety.level);
            }
    }
};
