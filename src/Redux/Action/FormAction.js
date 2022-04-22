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