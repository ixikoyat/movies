const initialState = [];

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            let datav = [...state];
            datav.push(...action.payload);
            return datav

        

        default:
            return state
    }
};


export default Reducer