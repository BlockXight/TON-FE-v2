import { TARGET_URL } from '../core/setting';



const parse = (dataArray) => {
    return dataArray.map(data=>{
        return {
            tx_id: data["Transaction_id"],
            block_id: data["Block_id"],
            sender_address: data["Sender_address"],
            receiver_address: data["Receiver_address"],
            type: data["Type"],
            amount: data["Amount"],
            confirm_Time: data["Confirm_time"]
        }
    })
}
export const getFilteredNodes = async (amount) => {
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
export const getJettonNodes = async (amount) => {
    let data = "";
    await fetch(`${TARGET_URL}jetton/`)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        data = myJson;
    });
    console.log("data", data);
    return parse(data);
}


export const getNodeInfos = async () => {
    let data = "";
    await fetch(`${TARGET_URL}node_info`)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        data = myJson;
    });
    console.log("GGGG")
    console.log(data);
    return data;
}