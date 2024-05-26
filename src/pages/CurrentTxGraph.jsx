// import { useState, useEffect } from 'react';
// import { getFilteredNodes } from '../utils/api';
// import TempGraph from './tempGraph';
// import SliderComponent from '../partials/dashboard/Bars';
// import { amountAtom } from '../core/atom';
// import { useRecoilValue } from 'recoil';

// const CurrentTransaction = () => {
//     const [txData, setTxData] = useState([]);
//     const amount = useRecoilValue(amountAtom);
//     useEffect(() => {
//         const init = async () => {
//             getFilteredNodes(amount).then(data => setTxData(data));
//         }
//         init();
//     }, [amount])
//     return (
//         <div className="w-full">
//             <TempGraph data={txData} uid="tx"/>
//         </div>
//     )
    
// }

// export default CurrentTransaction;

import { useState, useEffect } from 'react';
import { getFilteredNodes } from '../utils/api';
import TempGraph from './tempGraph';
import SliderComponent from '../partials/dashboard/Bars';
import { amountAtom } from '../core/atom';
import { useRecoilValue } from 'recoil';
import '../css/additional-styles/graph.css'; // 確保導入你的 CSS 文件

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
