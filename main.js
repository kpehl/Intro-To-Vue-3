const app = Vue.createApp({
        data() {
        return {
            product: 'Socks',
            description: 'Warm fuzzy socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://smile.amazon.com/s?k=socks',
            inventory: 8,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' },
            ],
            sizes: [
                { id: 1, size: 'Kids Small' },
                { id: 2, size: 'Kids Large' },
                { id: 3, size: 'Adult Small' },
                { id: 4, size: 'Adult Medium' },
                { id: 5, size: 'Adult Large' }
            ]
        }
    }
})
