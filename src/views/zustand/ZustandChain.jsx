import React, { useEffect } from "react";
import useChainStore from "../../stores/chain/chain.store";

function ZustandChain() {
  const { chainedData, dependentEvent, resetData } = useChainStore();

  useEffect(() => {
    resetData();
  }, []);

  return (
    <div>
      <button onClick={() => dependentEvent()} title="Trigger Chain Event">
        🔗
      </button>
      <button onClick={() => resetData()} title="Reset data">
        🔄
      </button>
      {chainedData &&
        chainedData.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
}

export default ZustandChain;
