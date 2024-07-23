import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { getAll , getAllTags ,  getAllByTag } from '../../services/foodService';
import Thumbnails from '../../components/thumbnails/Thumbnails';
import Search from '../../components/search/Search';
import Tags from '../../components/Tags/Tags';


const initialState = { foods: [], tags: [] };

const reducer = (state,action) => {
  switch (action.type) {
    case 'FOODS_LOADED' :
      return { ...state, foods: action.payload };
    case 'TAGS_LOADED' :
        return { ...state, tags: action.payload };
      default:
        return state;
        }
};
export default function Homepage() {
  const [state,dispatch] = useReducer(reducer, initialState);
  const { foods, tags } = state;
  const { searchTerm, tag } = useParams();

  useEffect(() => {
    getAllTags().then(tags => dispatch({ type:'TAGS_LOADED', payload: tags }));
    const loadFoods =
    tag? getAllByTag(tag) 
    : searchTerm ? Search(searchTerm) : getAll();
    loadFoods.then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }));

  }, [searchTerm , tag]);


return (
  <>
  <Search />
  <Tags tags={tags} />
  <Thumbnails foods={foods} />
  </>
);
}

