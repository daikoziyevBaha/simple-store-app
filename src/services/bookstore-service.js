export default class BookstoreService {

    data = [
        {
            id: 1,
            name: "1984",
            author: "Gearge Orwell",
            price: 2500,
            image: 'https://m.media-amazon.com/images/I/514CVwOrybL.jpg'
        },
        {
            id: 2,
            name: "Farenheit 452",
            author: "Random Author 2",
            price: 921,
            image: 'https://m.media-amazon.com/images/I/41gIrr4WtQL.jpg'
        },
        {
            id: 3,
            name: "Farenheit 451",
            author: "Random Author 2",
            price: 1000,
            image: 'https://m.media-amazon.com/images/I/41gIrr4WtQL.jpg'
        }
    ];

    getBooks() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (Math.random() < 0.75){
                    resolve(this.data)
                } else {
                    reject(new Error('Something got wrong!'))
                }
            }, 700)
        })
    }
}