export const FullNameSeparator = (input) => {
    const parts = input.split(' ');

    let firstName, lastName;

    if (parts.length > 2) {
        // If the name has more than three words, combine the first two words for the first name
        firstName = parts.slice(0, 2).join(' ');
        lastName = parts.slice(2).join(' ');
    } else {
        // Otherwise, the first name is the first word and the rest is the last name
        firstName = parts.shift();
        lastName = parts.join(' ');
    }
    
    return [firstName, lastName];
}
