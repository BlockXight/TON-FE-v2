import { useState, useEffect } from 'react';
import { getFilteredNodes } from '../utils/api';
import TempGraph2D from './tempGraph2D';
import SliderComponent from '../partials/dashboard/Bars';
import { amountAtom } from '../core/atom';
import { useRecoilValue } from 'recoil';

const CurrentTransaction2D = () => {
    const [txData, setTxData] = useState([]);
    const amount = useRecoilValue(amountAtom);
    useEffect(() => {
        const init = async () => {
            getFilteredNodes(amount).then(data => setTxData(data));
        }
        init();
    }, [amount])
    return (
        <div className="w-full">
            <SliderComponent />
            <TempGraph2D data={txData} uid="tx"/>
        </div>
    )
    
}

export default CurrentTransaction2D;