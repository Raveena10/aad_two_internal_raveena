export const AddContact = (contactdata) => (
    console.log("addContactAction", contactdata),
    {
        type: "CREATE_CONTACT",
        payload: contactdata,
    }
);
export const DeleteContact = (deletedata) => (
    console.log("DeleteContactAction", deletedata),
    {
        type: "DELETE_CONTACT",
        payload: deletedata,
    
    }
);
export const GetContact = (getdata) => (
    console.log("getContactAction", getdata),
    {
        type: "GET_DATA",
        payload: getdata,
    
    }
);
export const updateContact = (updatedata) => (
    {
        type: "UPDATE_DATA",
        payload: updatedata,
    
    }
);