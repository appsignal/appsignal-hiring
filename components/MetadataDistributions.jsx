import Tooltip from  "@/components/Tooltip"

export default function MetadataDistributions({ distributions }) {
  return (
    <div>
      <Tooltip content="I'm a tooltip" ><h2>Metadata distributions</h2></Tooltip>

      <pre>{JSON.stringify(distributions, null, 2)}</pre>
    </div>
  );
}
