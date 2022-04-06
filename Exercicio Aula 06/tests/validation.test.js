const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Invalid case', () => {
    const result = Validation.create({
        nome: "Pessoa",
        forca: "10",
        poder: "100%",
    });
    expect(result).toEqual(undefined);
});

test('Invalid case - without forca', () => {
    const result = Validation.create({
        nome: "Pessoa",
        poder: "100%",
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});