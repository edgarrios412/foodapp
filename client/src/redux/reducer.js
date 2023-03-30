import {
    GET_RECIPES,
    GET_DIETS,
    FILTER_RECIPES,
    FIND_RECIPES,
    PAGINATION,
    ORDER_BY,
    SET_PAGE,
    SET_LOGGED,
    USER_LOGGED,
  } from "./actions";
  
  const initialState = {
    user:{},
    recipes: [],
    filterRecipes: [],
    orderRecipes: [],
    recipe: {},
    pagination: [],
    diets:[],
    filtrado: false,
    order:"asc",
    health: "mayor",
    created: "api",
    isLogged: false,
    page: 1
  };
  
  const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case USER_LOGGED:{
        return{
          ...state,
          user: {...payload}
        }
      }
      case GET_RECIPES: {
        return {
          ...state,
          recipes: [...payload[0]],
          filterRecipes: [...payload[0]],
          diets: [...payload[1]]
        };
      }
      case GET_DIETS: {
        return {
          ...state,
          diets: state.recipes.diets.filter((item, index) => state.recipes.diets.indexOf(item) === index)
        };
      }
      case PAGINATION:{
          return{
            ...state,
            pagination: state.filterRecipes.slice(state.page*10-10,state.page*10),
          }
      }
      case SET_LOGGED:{
        return {
          ...state,
          isLogged:payload
        }
      }
      case SET_PAGE:{
        return{
          ...state,
          page: payload
        }
      }
      case FILTER_RECIPES: {
        if(payload === "all"){
          return {
            ...state,
            filterRecipes: [...state.recipes],
            filtrado: false
          };
        }
        return {
          ...state,
          filterRecipes: state.filterRecipes.filter(r => r.diets.includes(payload)),
          filtrado: true
        };
      }
      case FIND_RECIPES: {
        return {
          ...state,
          filterRecipes: [...payload]
        };
      }
      case ORDER_BY:{
        switch(payload){
        case "abc":{
        if(state.order === "asc"){
        return{
          ...state,
          filterRecipes: state.filterRecipes.sort((x, y) => x.title.localeCompare(y.title)),
          order: "desc"
        }
        }else{
          return{
            ...state,
            filterRecipes: state.filterRecipes.sort((x, y) => y.title.localeCompare(x.title)),
            order: "asc"
          }
        }
        }
        case "health":{
          console.log(state.filterRecipes)
          if(state.health === "mayor"){
            return{
              ...state,
              filterRecipes: state.filterRecipes.sort((x, y) => x.healthScore - y.healthScore),
              health: "menor"
            }
            }else{
              return{
                ...state,
                filterRecipes: state.filterRecipes.sort((x, y) => y.healthScore - x.healthScore),
                health: "mayor"
              }
            }
          }
        case "created":{
          if(state.created === "user"){
            return{
              ...state,
              filterRecipes: state.filterRecipes.sort((x, y) => x.created.localeCompare(y.created)),
              created: "api"
            }
            }else{
              return{
                ...state,
                filterRecipes: state.filterRecipes.sort((x, y) => y.created.localeCompare(x.created)),
                created: "user"
              }
            }
        }
        default:{break;}
      }break;
    }
      default:{
        return {
          ...state,
        };
      }
    }
  };
  
  export default reducer;
  