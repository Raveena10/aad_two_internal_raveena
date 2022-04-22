const initialstate = {
  contacts: [
    {
      id:1,
      Name: "fgfdg",
      MobileNumber: 6464564564,
      DebitCardNumber: "4325354354325",
      Gender:"female"
    }
  ]
}
export const FormReducer = (state = initialstate, action) => {

    switch (action.type) {
      case "CREATE_CONTACT":
        {
          console.log("addReducer", action)
          console.log("state", state)
          return {
            ...state,
            contacts: [action.payload, ...state.contacts],
          };
  
        }
        default:
      return state;

    }
    
}  