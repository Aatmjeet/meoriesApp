export default (posts = [], action) =>{
    switch (action.type) {
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
        
        // Two nested cases will have the same return
        case 'UPDATE':
        case 'LIKEPOST':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...posts, action.payload];
        default:
            return posts;
    }
}