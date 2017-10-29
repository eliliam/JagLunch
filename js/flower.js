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
        this.GrayLight = "#9E9E9E";
        this.GrayDark = "#757575";
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
    error(){
        this.setColor('trash', 9.0);
        this.setColor('tardy', 9.0);
        this.setColor('safety', 9.0);
    }

    setColor(petal, color) {
        if (petal === 'safety'){
            switch (color) {
                case 0.0:
                    this.petals[petal].attr('fill', this.BlueLight);
                    break;
                case 0.5:
                    this.petals[petal].attr('fill', this.OrangeLight);
                    break;
                case 1.0:
                    this.petals[petal].attr('fill', this.RedLight);
                    break;
                case 9.0:
                    this.petals[petal].attr('fill', this.GrayLight);
                    $('.petal-back').attr('fill', this.GrayDark);
            }
        } else {
            switch (color) {
                case 0.0:
                    this.petals[petal].attr('fill', this.BlueDark);
                    break;
                case 0.5:
                    this.petals[petal].attr('fill', this.OrangeDark);
                    break;
                case 1.0:
                    this.petals[petal].attr('fill', this.RedDark);
                case 9.0:
                    this.petals[petal].attr('fill', this.GrayDark)
            }
        }
    }
}