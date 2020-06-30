import {AUTHOR_NAME, AUTHOR_LAST_NAME} from "../configuration/AplicationProperties";

export const getAuthor = () => {
    return {
        name: AUTHOR_NAME,
        lastname: AUTHOR_LAST_NAME
    }
};