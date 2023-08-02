class UserModel {
    find = (id) => {
        return new Promise(resolve =>
            resolve({ id, name: 'User', dateOfBirth: new Date() }));
    };

    create = (body) => {
        return new Promise(resolve =>
            resolve({ id: +new Date(), ...body }));
    };

    delete = (id) => {
        return new Promise(resolve =>
            resolve({ code: "Complete" }));
    };

    create = (id, body) => {
        return new Promise(resolve =>
            resolve({ id, ...body }));
    };
}


module.exports = new UserModel();