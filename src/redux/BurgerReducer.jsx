const initialState = {
    burger: { salad: 1, cheese: 1, beef: 1 },
    menu: {
        salad: 2000,
        cheese: 5000,
        beef: 20000
    },


}
export const BurgerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "INCREASE": {
            let burger = {...state.burger};
            burger[payload]++;
            
            return { ...state ,burger};
        }
        case "DECREASE":{
            let burger = {...state.burger};
            burger[payload] >0 && burger[payload]--;
            return {...state,burger}
        }
        default:
            return state;
    }
}