class Select {
    constructor(main) {
        this.main = main
    };

    send() {
        return console.log(this.main);
    };

    static randint(max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    randnum(max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    output(msg) {
        return console.log(msg);
    }
};

