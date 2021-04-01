import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        // بكتب ال بيرير ومسافه وبعدها ال اه بي اي كي 
        Authorization: 'Bearer m0CrGuIAvJFdi8yy6NLkzi1trOkrJzw9cG4Ss9qqcwjtROGvhIaxQuIxOjdXciJKTVszK6aGV2iWbEazdEC0vKQYLZ6jhU0GO9CSTL1Bc1IRgiB_G7pOevVA3gtYYHYx'
    }
})