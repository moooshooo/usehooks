type networkObject = {
  online: boolean;
  downlink: number | null;
  downlinkMax: number | null;
  effectiveType: string | null;
  rtt: number | null;
  saveData: boolean | null;
  type: string | null;
};

const NetStats = ({ network }: { network: networkObject }) => {
  return (
    <>
      <p>
        <strong>Online: </strong>
        {network.online.toString()}
      </p>
      <p>
        <strong>Downlink: </strong>
        {network.downlink} mbit/s
      </p>
      <p>
        <strong>Downlink max: </strong>
        {network.downlinkMax} mbit/s
      </p>
      <p>
        <strong>Effective type: </strong>
        {network.effectiveType} 
      </p>
      <p>
        <strong>Round trip latency: </strong>
        {network.rtt} ms
      </p>
      <p>
        <strong>Saved data: </strong>
        {network.saveData?.toString() ?? "N/A"} 
      </p>
      <p>
        <strong>Type: </strong>
        {network.type ?? "N/A"} 
      </p>
    </>
  );
};

export default NetStats;