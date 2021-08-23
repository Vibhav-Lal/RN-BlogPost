import blogData from '../../data/blogdata/blogData'

const blogs = (state = blogData, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            state.unshift(action.payload)
            return state
        default:
            return state;
    }
}

export default blogs;
