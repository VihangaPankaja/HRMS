const bcrypt = require('bcrypt');

const checked_encrptd_crdntial = async (input, stored) => {

    const authentication = await bcrypt.compare(input, stored);
    return authentication;
};

const encrpt_crdntial = async (val) => {

    const salt = await bcrypt.genSalt();
    const hashed_val = await bcrypt.hash(val, salt);
    return hashed_val
}

module.exports = {
    checked_encrptd_crdntial,
    encrpt_crdntial
}