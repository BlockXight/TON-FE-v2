import { atomFamily, atom } from 'recoil';
export const amountAtom = atom ({
    key: "gg",
    default: 100
  });
export const graphMetaAtomF = atomFamily ({
    key: "gg",
    default: {
        tx_amount_max: 0,
        tx_amount_min: 0,
        receive_count_max: 0,
        tx_total: 0,
        node_total: 0
    }
  });

