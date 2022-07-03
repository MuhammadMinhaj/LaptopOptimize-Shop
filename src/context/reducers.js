import constant from "./constant";

const {
  APP_SET_ALERT_MESSAGE,
  APP_CLOSE_ALERT_MESSAGE,
  SET_LOADING_STATUS,
  SET_ADMIN_LOGGED_IN,
  FETCH_PRODUCTS_DATA_SUCCESS,
  FETCH_SINGLE_PRODUCT_DATA_SUCCESS,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  USER_CHANGE_PRODUCT_QUANTITY,
  USER_ORDER_CONFIRM_SUCCESS,
  FETCH_USER_ORDERS_SUCCESS,
  ORDER_DELETE_SUCCESS,
  FETCH_ALL_ORDERS_SUCCESS,
  CHANGE_ORDER_STATUS_SUCCESS,
  FETCH_REVIEWS_SUCCESS,
  ADD_REVIEW_SUCCESS,
  FETCH_ALL_ADMIN_SUCCESS,
  ADMIN_SIGNUP_SUCCESS,
  DELETE_ADMIN_SUCCESS,
} = constant;

const reducer = (state, actions) => {
  switch (actions.type) {
    case APP_SET_ALERT_MESSAGE:
      state = {
        ...state,
        messageInfo: {
          isOpen: true,
          ...actions.payload,
        },
      };
      return state;
    case APP_CLOSE_ALERT_MESSAGE:
      state = {
        ...state,
        messageInfo: {
          isOpen: false,
          status: null,
          message: null,
        },
      };
      return state;
    case SET_LOADING_STATUS:
      state = {
        ...state,
        isLoading: actions.payload,
      };
      return state;
    case SET_ADMIN_LOGGED_IN:
      state = {
        ...state,
        admin: {
          ...state.admin,
          ...actions.payload,
        },
      };
      return state;
    case FETCH_PRODUCTS_DATA_SUCCESS:
      state = {
        ...state,
        products: [...actions.payload],
      };
      return state;
    case FETCH_SINGLE_PRODUCT_DATA_SUCCESS:
      state = {
        ...state,
        singleProduct: actions.payload,
      };
      return state;
    case ADD_PRODUCT_SUCCESS:
      state = {
        ...state,
        products: [...state.products, { ...actions.payload }],
      };
      return state;

    case UPDATE_PRODUCT_SUCCESS:
      const updatedBicycles = state.products.map((food) => {
        if (food._id === actions.payload._id) {
          return {
            ...food,
            ...actions.payload,
          };
        }
        return { ...food };
      });
      state = {
        ...state,
        products: updatedBicycles,
      };
      return state;
    case DELETE_PRODUCT_SUCCESS:
      let filteredBicycles = state.products.filter(
        (food) => food._id !== actions.payload
      );
      state = {
        ...state,
        products: filteredBicycles,
      };
      return state;
    case USER_CHANGE_PRODUCT_QUANTITY:
      state = {
        ...state,
        orderProductQuantity: actions.payload,
      };
      return state;
    case USER_ORDER_CONFIRM_SUCCESS:
      state = {
        ...state,
        userOrders: [...state.userOrders, { ...actions.payload }],
        orderProductQuantity: 1,
      };
      return state;
    case FETCH_USER_ORDERS_SUCCESS:
      state = {
        ...state,
        userOrders: [...actions.payload],
      };
      return state;
    case ORDER_DELETE_SUCCESS:
      let filteredOrders = state.userOrders.filter(
        (order) => order._id !== actions.payload
      );
      let orders = state.orders.filter(
        (order) => order._id !== actions.payload
      );
      state = {
        ...state,
        userOrders: filteredOrders,
        orders,
      };
      return state;
    case FETCH_ALL_ORDERS_SUCCESS:
      state = {
        ...state,
        orders: [...actions.payload],
      };
      return state;
    case CHANGE_ORDER_STATUS_SUCCESS:
      const updatedOrders = state.orders.map((order) => {
        if (order._id === actions.payload.id) {
          return {
            ...order,
            status: actions.payload.status,
          };
        }
        return { ...order };
      });

      state = {
        ...state,
        orders: updatedOrders,
      };
      return state;
    case FETCH_REVIEWS_SUCCESS:
      state = {
        ...state,
        reviews: [...actions.payload],
      };
      return state;
    case ADD_REVIEW_SUCCESS:
      state = {
        ...state,
        reviews: [...state.reviews, { ...actions.payload }],
      };
      return state;
    case FETCH_ALL_ADMIN_SUCCESS:
      state = {
        ...state,
        admins: actions.payload,
      };
      return state;
    case ADMIN_SIGNUP_SUCCESS:
      state = {
        ...state,
        admins: [
          ...state.admins,
          {
            ...actions.payload,
          },
        ],
      };
      return state;
    case DELETE_ADMIN_SUCCESS:
      const admins = state.admins.filter(
        (admin) => admin._id !== actions.payload
      );
      state = {
        ...state,
        admins,
      };
      return state;
    default:
      return state;
  }
};

export default reducer;
