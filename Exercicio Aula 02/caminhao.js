class Caminhao extends Veiculo{
    
    axle;

    constructor(plate,year,axle){
        super(plate,year);
        this.axle = axle;
    }

    setEixos(newAxle){
        this.axle = newAxle;
    }

    getEixos(){
        this.axle;
    }

    exibirDados(){
        console.log('Dados do caminhão: ');
        super.exibirDados();
        console.log('Eixos do veículo: ',this.axle);
    }
}

var newTruck = new Caminhao(2014,'ABC-123',5);
newTruck.exibirDados();