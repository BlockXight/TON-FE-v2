const apiurl = "http://18.183.21.224:3000/transactions/mock";
import { mockParse } from "./api";

export const getMock = async (amount) => {
    let data = "";
    await fetch(`\mock`)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        data = myJson;
    });
    console.log("fk", data);
    return mockParse(data);
    return []
}