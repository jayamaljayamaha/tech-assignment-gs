
// validate not null, not empty, not blank and string type value
export const validateString = (value: string | boolean, parameterName: string): string => {
    if(typeof value != "string" || value.trim().length == 0) {
        throw new Error(`${parameterName} should not be null`)
    } else {
        return value.trim();
    }
}

// validate not null, not empty, not blank and string or number type numeric value
export const validateNumber = (value: any, parameterName: string): number => {
    if(typeof value == "boolean") {
        throw new Error(`${parameterName} should not be empty`)
    }
    const parsedInt = Number(value);
    if (isNaN(parsedInt)) {
        throw new Error(`${parameterName} should be a non empty number`)
    }
    return parsedInt;
}
