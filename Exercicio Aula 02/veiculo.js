class Veiculo{

    year;
    plate;

    constructor(year, plate){
        this.year = year;
        this.plate = plate;
    }

    setAno(newYear){
        this.year = newYear;
    }
    setPlaca(newPlate){
        this.plate = newPlate;
    }
    getAno(){
        this.year;
    }
    getPlaca(){
        this.plate;
    }


    exibirDados(){
        console.log('Placa: ',this.plate)
        console.log('Ano: ',this.year)
    }
}