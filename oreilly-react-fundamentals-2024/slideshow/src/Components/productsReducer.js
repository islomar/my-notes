// Step 2: define what happens when an action is fired.

cont productsReducer = (state, action) => {
    switch (action.type) {
        case "delete":
            const newProducts = [...state];
            newProducts.splice(action.index, 1);
            return [...newProducts]
            break;
        case "fetchProducts":
            return [...action.payload];
        case "SET_PRODUCTS":
        return { ...state, products: action.payload };
        case "SET_LOADING":
        return { ...state, loading: action.payload };
        case "SET_ERROR":
        return { ...state, error: action.payload };
        default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
}