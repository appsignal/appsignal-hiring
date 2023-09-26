const hostnameDistribution = {
  name: "hostname",
  total: 200,
  unique: 10,
  __typename: "MetadataDistribution",
  distributions: [
    {
      key: "frontend1",
      value: 20,
      __typename: "KeyStringValue",
    },
    {
      key: "frontend2",
      value: 20,
      __typename: "KeyStringValue",
    },
    {
      key: "frontend3",
      value: 20,
      __typename: "KeyStringValue",
    },
    {
      key: "frontend4",
      value: 20,
      __typename: "KeyStringValue",
    },
    {
      key: "frontend5",
      value: 20,
      __typename: "KeyStringValue",
    },
    {
      key: "frontend6",
      value: 20,
      __typename: "KeyStringValue",
    },
    {
      key: "frontend7",
      value: 20,
      __typename: "KeyStringValue",
    },
    {
      key: "frontend8",
      value: 20,
      __typename: "KeyStringValue",
    },
    {
      key: "frontend9",
      value: 20,
      __typename: "KeyStringValue",
    },
    {
      key: "frontend10",
      value: 20,
      __typename: "KeyStringValue",
    },
  ],
}

const revisionDistribution = {
  name: "revision",
  total: 220,
  unique: 20,
  __typename: "MetadataDistribution",
  distributions: [
    {
      key: "abc1234",
      value: 50,
      __typename: "KeyStringValue",
    },
    {
      key: "def123",
      value: 40,
      __typename: "KeyStringValue",
    },
    {
      key: "ghi123",
      value: 30,
      __typename: "KeyStringValue",
    },
    {
      key: "jkl123",
      value: 20,
      __typename: "KeyStringValue",
    },
    {
      key: "mno123",
      value: 18,
      __typename: "KeyStringValue",
    },
    {
      key: "pqr123",
      value: 11,
      __typename: "KeyStringValue",
    },
    {
      key: "stu123",
      value: 10,
      __typename: "KeyStringValue",
    },
    {
      key: "vwx123",
      value: 8,
      __typename: "KeyStringValue",
    },
    {
      key: "abc456",
      value: 7,
      __typename: "KeyStringValue",
    },
    {
      key: "def456",
      value: 6,
      __typename: "KeyStringValue",
    },
    {
      key: "def789",
      value: 4,
      __typename: "KeyStringValue",
    },
  ],
}

const dataFromGraphql = {
  app: {
    __typename: "App",
    metadataDistributions: [
      hostnameDistribution,
      revisionDistribution
    ],
  },
};

export default dataFromGraphql;
