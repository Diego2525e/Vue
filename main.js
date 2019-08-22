var app = new Vue({
    el: '#app',
    data:{
        product: 'Virginia Limongi <3',
        image: './images/vir1.jpg',
        inventory: 100,
        details: ["80% contton", "20% polyester", "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]
        // inStock: false
    }
})