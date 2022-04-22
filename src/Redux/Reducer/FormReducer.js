const initialstate = {
  contacts: [
    {
      id:1,
      Name: "raveena",
      MobileNumber: 12345,
      DebitCardNumber: 1234,
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
        case "DELETE_CONTACT":
      {
        console.log("deleteReducer", action)
        console.log("deletestate", state)
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id != action.payload
          ),
        };

      }
      case "GET_DATA":
      {
        console.log("getdata", action.payload);
        let arr = state.contacts.filter(
          (contact) => contact.id == action.payload
        );

        arr = arr.values();
        
        for (let val of arr) {
          arr = val;
        }
        return {
          ...state,
          contact: arr,
        };

      }

        default:
      return state;

    }
    
    
}  