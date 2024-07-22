export const categoryTabReducer = (state, action) => {
    switch(action.type){
      case 'SELECT_TAB':
        return { ...state, selectedTab: action.payload };
      default:
        return state;
    }
  }
  
  export const initialTabState = {
    selectedTab: 'Tab1',
  };
  