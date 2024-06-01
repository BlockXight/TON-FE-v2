import { useState, useEffect } from 'react';
import { getMock } from '../utils/newapi';
import TempGraph from './tempGraph';
import { amountAtom } from '../core/atom';
import { useRecoilValue } from 'recoil';
import '../css/additional-styles/graph.css'; 

const CurrentTransaction = () => {
    const [txData, setTxData] = useState([]);
    const [loading, setLoading] = useState(true);
    const amount = useRecoilValue(amountAtom);

    useEffect(() => {
        const init = async () => {
            console.log('Fetching data...');
            setLoading(true);
            getFilteredNodes(amount).then(data => {
                setTxData(data);
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            });
        }
        init();
    }, [amount]);

    return (
        <div className="relative w-[100%] h-[600px] bg-black">
            {loading ? (
                <div className="flex justify-center items-center absolute inset-0 bg-opacity-80">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className="w-full h-full bg-gray-800">
                    <TempGraph data={txData} uid="tx"/>
                </div>
            )}
        </div>
    );
}

export default CurrentTransaction;
