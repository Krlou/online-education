import * as actionTypes from "./actions";

const initialState = {
  mainPageContent: "get-started",
  homePageContent: "library",
  showGetStartedNav: false,
  libraryIsActive: false,
  isHome: false,
  isCreateBook: false,
  isBook: false,
  isLogged: false,
  userInfo: {},
  showModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STARTED:
      return {
        ...state,
        mainPageContent: "login",
        showGetStartedNav: true,
        libraryIsActive: false,
      };
    case actionTypes.SIGN_UP:
      return {
        ...state,
        mainPageContent: "register",
        showGetStartedNav: true,
        libraryIsActive: false,
      };
    case actionTypes.SHOW_LIBRARY:
      return {
        ...state,
        mainPageContent: "library",
        showGetStartedNav: true,
        libraryIsActive: true,
      };
    case actionTypes.HOME:
      return {
        ...state,
        mainPageContent: "get-started",
        showGetStartedNav: false,
        libraryIsActive: false,
      };
    case actionTypes.LOGGED:
      let userInfo = { ...state.userInfo };
      userInfo.firstName = action.userInfo.firstName;
      userInfo.lastName = action.userInfo.lastName;
      return {
        ...state,
        isLogged: true,
        userInfo: userInfo,
        isHome: true,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLogged: false,
        userInfo: {},
        mainPageContent: "get-started",
        showGetStartedNav: false,
        libraryIsActive: false,
        isHome: false,
        isCreateBook: false,
        isBook: false,
        homePageContent: "library",
        showModal: false,
      };
    case actionTypes.CREATE_BOOK:
      return {
        ...state,
        showGetStartedNav: false,
        libraryIsActive: false,
        isHome: false,
        isCreateBook: true,
        isBook: false,
        homePageContent: "create-book",
      };
    case actionTypes.USER_HOME:
      return {
        ...state,
        showGetStartedNav: false,
        libraryIsActive: false,
        isHome: true,
        isCreateBook: false,
        isBook: false,
        homePageContent: "library",
      };
    case actionTypes.SAVE_BOOK_START:
      return {
        ...state,
        showModal: true,
      };
    case actionTypes.CLOSE_BACKDROP:
      return {
        ...state,
        showModal: false,
      };
    case actionTypes.SAVE_BOOK_END:
      return {
        ...state,
        showGetStartedNav: false,
        libraryIsActive: false,
        isHome: true,
        isCreateBook: false,
        isBook: false,
        homePageContent: "library",
        showModal: false,
      };
    case actionTypes.OPEN_BOOK:
      return {
        ...state,
        showGetStartedNav: false,
        libraryIsActive: false,
        isHome: false,
        isCreateBook: false,
        isBook: true,
        homePageContent: "library",
        showModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
