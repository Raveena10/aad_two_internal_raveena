const initialstate = {
  contacts: [
    {
      id:1,
      Name: "sample",
      MobileNumber: 0,
      DebitCardNumber: "sample",
      Gender:"sample"
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