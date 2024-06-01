import MOCK_DATA from '../dataset/mock_data.json';
import { ForceGraph3D } from 'react-force-graph';
import { useState, useEffect } from 'react';
import { getNodes, getEdges, getFormattedNodeLabel } from '../utils/graph';
import { graphMetaAtomF } from '../core/atom';
import { useRecoilState } from 'recoil';
import * as THREE from 'three';

const TempGraph = (props) => {
    const [good, setgood] =  useRecoilState(graphMetaAtomF(props.uid));
    const [mockData, setMockData] = useState({
        nodes: [],
        links: []
    });

    const getFormattedNodeLabel = (node) => {
        const labelContent = `
            <div style="color: #2f2f2f; background-color: rgba(255, 255, 255, 0.7); padding: 5px; border-radius: 5px;">
                ID: ${node.id}<br/>
                Type: ${node.type}<br/>
            </div>
        `;
        return labelContent;
    };

    useEffect(() => {
        console.log(getNodes(props.data));
        const nodes = getNodes(props.data);
        setMockData({
            nodes: nodes,
            links: getEdges(props.data)
        });
        setgood({
            tx_amount_max: props.data.reduce((prev, curr) => {
                if (curr.amount > prev) {
                    return prev = curr.amount;
                }
                return prev;
            }, 0),
            tx_amount_min: props.data.reduce( (prev, dd) => {
                if (dd.amount < prev) {
                    return prev = dd.amount;
                } else{
                    return prev;
                }
            }, 10000000000000),
            receive_count_max: nodes.reduce((prev,node)=>{
                if (node.rxTimes > prev) {
                    return prev = node.rxTimes;
                }
                return prev;
            }, 0),
            tx_total: props.data.length,
            node_total: nodes.length
        });
        }, [props.data])
    return (
        <div>
            <ForceGraph3D
                graphData={mockData}
                nodeOpacity={1}
                nodeResolution={8}
                linkColor={()=>"aqua"}
                linkWidth={.2}
                linkOpacity={1}
                linkCurvature={.1}
                nodeVal={node=>node.level*5}
                nodeLabel={node =>
                    `<div><span style="color: #2f2f2f">${getFormattedNodeLabel(node)}</span></div>`
                }
                linkLabel={link => link.amount}
                linkDirectionalArrowLength={()=>2}
                linkDirectionalArrowWidth={()=>1}
                linkDirectionalArrowRelPos={1}
                linkDirectionalParticles={0}
                linkDirectionalParticleColor={()=>"#4EFEB3"}
                linkDirectionalParticleWidth={2}
                onNodeClick={(node) => {
                    if(node.url){
                        window.open(node.url,"_blank")
                    } else {
                        window.open(`https://tonviewer.com/${node.address}`, "_blank")
                    }
                }}
                onLinkClick={(link) => {
                    window.open(`https://tonviewer.com/transaction/${link.tx_id}`, "_blank")
                }}
                nodeThreeObject={(node) => {
                    const size = (node.level+1)*2;
                    return new THREE.Mesh(
                        [
                        new THREE.BoxGeometry(size, size,size),
                        new THREE.ConeGeometry(size, size*2),
                        new THREE.CylinderGeometry(size, size, size*2),
                        new THREE.DodecahedronGeometry(size),
                        new THREE.SphereGeometry(size),
                        new THREE.TorusGeometry(size, size*2),
                        new THREE.TorusKnotGeometry(size, size*2)
                        ][(node.type === "GAMEFI" ? 1 : node.type === "DEFI" ? 2 : 4) % 5],
                        new THREE.MeshLambertMaterial({
                            color: node.color,
                            transparent: true,
                            opacity: 1
                        }))
                    }
                }
            />
        </div>
    )
}

export default TempGraph;