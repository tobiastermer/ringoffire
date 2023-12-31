export class Game {

    public players: string[] = ['Hans', 'Tobi', 'Peter', 'Freddy'];
    public stack: string[] = [];
    public playedCards: (string | undefined)[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i <= 13; i++) {
            this.stack.push('ace_' + i)
            this.stack.push('clubs_' + i)
            this.stack.push('diamonds_' + i)
            this.stack.push('hearts_' + i)
        }

        shuffle(this.stack);
    }


}

function shuffle(array:string[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}