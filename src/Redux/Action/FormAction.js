export const AddContact = (contactdata) => (
    console.log("addContactAction", contactdata),
    {
        type: "CREATE_CONTACT",
        payload: contactdata,
    }
);
