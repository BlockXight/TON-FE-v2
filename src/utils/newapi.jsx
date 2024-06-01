const apiurl = "http://18.183.21.224:3000/transactions";

export const getMock = async (amount) => {
    let data = "";
    await fetch(`${TARGET_URL}filteredNodes/?amount=${amount}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        data = myJson;
    });
    console.log("data", data);
    return parse(data);
}