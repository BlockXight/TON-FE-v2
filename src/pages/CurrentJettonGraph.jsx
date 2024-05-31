import { useState, useEffect } from 'react';
import { getJettonNodes } from '../utils/api';
import TempJettonGraph from './tempJettonGraph';
import SliderComponent from '../partials/dashboard/Bars';
import { amountAtom } from '../core/atom';
import { useRecoilValue } from 'recoil';

const CurrentJettonTransaction = () => {
    const [txData, setTxData] = useState([]);
    const amount = useRecoilValue(amountAtom);
    useEffect(() => {
        const init = async () => {
            getJettonNodes(amount).then(data => setTxData(data));
        }
        init();
    }, [amount]);
    return (
        <div className="w-full">
            <TempJettonGraph data={txData} uid="example"/>
        </div>
    )
    
}

export default CurrentJettonTransaction;