import dataFromGraphql from "@/data/graphql"
import MetadataDistributions from "@/components/MetadataDistributions"

export default function Home() {
  const { app: distributions } = dataFromGraphql

  return <MetadataDistributions distributions={distributions} />
}
