import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction('contacts/add', data => {
    return {
        payload: {
            id: nanoid(),
            ...data,
        }
    }
});
export const deleteContact = createAction('contacts/delete');