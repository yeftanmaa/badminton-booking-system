export const NameValidator = (inputValue) => {
    const allowLetters = /^[a-zA-Z\s]*$/;

    if (!allowLetters.test(inputValue)) {
        return inputValue.replace(/[^a-zA-Z\s]/g, '');
    }

    return inputValue;
};