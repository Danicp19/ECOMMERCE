import { configureStore } from '@reduxjs/toolkit';
import booksReducer from "../slices/bookSlice";
import shoppingCartReducer, { getTotals } from '../slices/shoping.slice';
import genreReducer from '../slices/genreSlice';
<<<<<<< HEAD
=======
import wishListReducer from '../slices/wishListSlice';
import userReducer from '../slices/userSlice';
import tokenReducer from '../slices/tokenSlice';
>>>>>>> develop


const store = configureStore({
  reducer: {
    books: booksReducer,
    shoppingCart: shoppingCartReducer,
    genres: genreReducer,
<<<<<<< HEAD
=======
    wishList: wishListReducer,
    users: userReducer,
    token: tokenReducer,
>>>>>>> develop
  }
})
store.dispatch(getTotals())

export default store;
