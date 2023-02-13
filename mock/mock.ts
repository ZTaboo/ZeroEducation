import {MockMethod} from "vite-plugin-mock";
import * as data from "./data";

const res: MockMethod[] = [
    {
        url: '/list',
        method: "post",
        response: () => {
            return data.list
        }
    }
]

export default res