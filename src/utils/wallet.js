import jettonTable from '../core/jetton_table.json';
import accounts from '../core/accounts.json';

export const getOfficialName = (jettonAddress) => {
    for (let i =0; i< jettonTable.length; i++) {
        if (jettonAddress === jettonTable[i].address) {
            return jettonTable[i].symbol;
        }
    }
}

export const getOfficialData = (jettonAddress) => {
    for (let i =0; i< jettonTable.length; i++) {
        if (jettonAddress === jettonTable[i].address) {
            return jettonTable[i];
        }
    }
}

export const getAccountOfficialName = (accountAddress) => {

    for (let i = 0; i < accounts.length; i++) {
        if (accountAddress === accounts[i].address) {
            return accounts[i].name;
        }
    }

    return accountAddress;
}