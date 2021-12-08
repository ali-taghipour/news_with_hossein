export default function fakeImage(width, height, range, square, avtar) {
    const randomWidth = randomIntFromInterval(width - range, width + range);
    const randomHeight = randomIntFromInterval(height - range, height + range);
    return `${avtar ? 'https://i.pravatar.cc/' : 'https://picsum.photos/'}${randomWidth}${
        square ? '' : `/${randomHeight}`
    }`;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
