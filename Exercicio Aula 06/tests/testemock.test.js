const Users = require('../src/application/users_service');
const Constants = require('../src/utils/Constants');
const Utils = require('../src/utils/utils');
const UsersRepository = require('../src/port/users_repository');
jest.mock('../src/port/users_repository');

test('CREATE - Criacao do nome', async () => {
    const data = {
        nome: "Nome teste",
        email: "teste1@gmail.com",
        forca: "Força 1",
        poder: "poder teste"
    }
    const id = Utils.generateUuid();
    UsersRepository.create.mockResolvedValue({ ...data, id });
    const result = await Users.create(data);
    expect(result).toEqual({ ...data, id });
})

test('UPDATE - Dado atualizado', async () => {
    const data = {
        nome: "Nome de teste",
        email: "testedenome@gmail.com",
        forca: "Força de teste",
        poder: "poder de teste"
    }

    const id = Utils.generateUuid();

    UsersRepository.update.mockResolvedValue({ ...data, id });

    const result = await Users.update(data);
    expect(result).toEqual({...data,id});
})


test('DELETE - Dado deletado', async () => {
    const data = {
        nome: "Nome de teste"
    }

    const id = Utils.generateUuid();

    UsersRepository.delete.mockResolvedValue({ ...data, id });

    const result = await Users.delete(data);
    expect(result).toEqual({...data, id});
})

