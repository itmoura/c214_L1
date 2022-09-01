const validate = require('validate.js');
const Constraint = require('./validate');

const validateNumber = {
    validate(num1, num2){
        const validateNumber = validate({num1, num2}, Constraint.calcConstraint);
        if(validateNumber !== undefined){
            return 'Error';
        }
        return
    }
}

module.exports = validateNumber;