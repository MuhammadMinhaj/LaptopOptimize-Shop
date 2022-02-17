import { useReducer } from "react";
import actions from "./actions";
import Context from "./context";
import reducer from "./reducers";

const initState = {
  messageInfo: {
    isOpen: false,
    status: null,
    message: null,
  },
  admin: {
    isLoggedIn: false,
  },
  products: [],
  singleProduct: null,
  orderProductQuantity: 1,
  userOrders: [],
  orders: [],
  isLoading: false,
  reviews: [],
  admins: [],
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const applicationActions = actions(dispatch, state);
  return (
    <Context.Provider value={{ state, ...applicationActions }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
