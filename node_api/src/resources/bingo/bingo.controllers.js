function newNumber(generatedNumbers) {
    const n = Math.ceil(Math.random() * 75);

    if (generatedNumbers.indexOf(n) === -1) {
        return n;
    } else {
        newNumber(generatedNumbers);
    }
}

function generateNewNumber() {
    const generatedNumbers = [];

    return function innerGenerateNewNumber() {
        const n = newNumber(generatedNumbers);

        generatedNumbers.push(n);

        return {
            previousNumbers: generatedNumbers,
            newNumber: n,
        };
    };
}

function getNewNumber(req, res) {
    const data = generateNewNumber();

    res.json({ msg: 'success', data: { ...data() } });
}

export { getNewNumber };
