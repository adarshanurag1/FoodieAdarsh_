import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import {getAll} from '../../services/foodService';
import Thumbnails from '../../components/thumbnails/Thumbnails';
import Search from '../../components/search/Search';


const initialState = { foods: [] , tags: [] };

const reducer = (state,action) => {
  switch (action.type) {
    case 'FOODS_LOADED' :
      return {...state, foods: action.payload };
      default:
        return state;
        }
};
export default function Homepage() {
  const [state,dispatch] = useReducer(reducer,initialState);
  const { foods } = state;
  const { searchTerm } = useParams();

  useEffect(() => {
    const loadedFoods = searchTerm ? Search(searchTerm) : getAll();
    getAll().then(foods => dispatch({ type: 'FOODS_LOADED',payload: foods }));

  }, [searchTerm]);


return (
  <>
  <Search />
  <Thumbnails foods={foods} />
  </>
);
}

