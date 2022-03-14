class Onibus extends Veiculo{

    seat;

    constructor(plate,year,seat){
        super(plate,year);
        this.seat = seat;
    }

    setAssentos(newSeat){
        this.seat = newSeat;
    }

    getAssentos(){
        this.seat;
    }

    exibirDados(){
        console.log('Dados do ônibus: ');
        super.exibirDados();
        console.log('Assentos:',this.seat)
    }
}

var newBus = new Onibus(2000,'DEF-456',15);
newBus.exibirDados();