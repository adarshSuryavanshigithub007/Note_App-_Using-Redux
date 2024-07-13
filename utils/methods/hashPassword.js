const bcrypt = require('bcrypt');

const Hashpassword = async (password, genSaltNum) => {
    try {
        console.log(password);
        const salt = await bcrypt.genSalt(genSaltNum);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
};

const comparePassword = (password,hashedPassword)=>{
    return bcrypt.compare(password, hashedPassword)
}

module.exports = {Hashpassword,comparePassword};


