export const mixLetters = (letters: string[]) => {
    let currentIndex = letters.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        [letters[currentIndex], letters[randomIndex]] = [
            letters[randomIndex], letters[currentIndex]];
    }

    return letters;
}
