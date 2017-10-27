class Flower{
    constructor(){
        this.petals = {
            'tardy': $('#petal-tardy'),
            'safety': $('#petal-safety'),
            'trash': $('#petal-trash')
        };
        this.BlueDark = "#22A7F0";
        this.BlueLight = "#19B5FE";
        this.OrangeLight = "#F4B350";
        this.OrangeDark = "#F39C12";
        this.RedDark = "#E53935";
        this.RedLight = "#F44336";
    }
    reset() {
        for (let petal in this.petals){
            if (petal === 'safety') {
                this.petals[petal].attr('fill', this.BlueLight);
            } else {
                this.petals[petal].attr('fill', this.BlueDark);
            }
        }
    }
}



let f = new Flower();

