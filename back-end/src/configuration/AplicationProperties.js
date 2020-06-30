import 'dotenv/config';

//ML API URL
const BASE_API_URL= process.env['BASE_API_URL'];
//APP port
const APP_PORT = process.env.PORT;
//App author
const AUTHOR_NAME = "Mariano";
const AUTHOR_LAST_NAME = "Lopez";

export {
    BASE_API_URL, AUTHOR_NAME, AUTHOR_LAST_NAME, APP_PORT
}