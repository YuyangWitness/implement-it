import Mock from 'mockjs'

Mock.mock("/dashboard/health", 'get', {
  isSuccess: true,
  result: [
      {
        "key": 1,
        "critical|1-100": 12,
        "error|1-100": 12,
        "warning|1-100": 12,
      }
    ],
  errorMsg: null
})

Mock.mock("/dashboard/capacity", 'get', {
  isSuccess: true,
  result: {
    used: {
      base: "5GB/10GB",
      base2: "5GB",
      base10: "10GB"
    },
    available: {
      base: "7GB/10GB",
      base2: "7GB",
      base10: "10GB"
    },
    reserved: {
      base: "10GB/9GB",
      base2: "10GB",
      base10: "9GB"
    },
  },
  errorMsg: null
})

Mock.mock("/dashboard/performance", 'get', {
  isSuccess: true,
  result: [
    {
      objectstore: "OS1",
      read50: "10ms",
      read90: "20ms",
      write50: "20ms",
      write90: "11ms",
      compression: 2.1
    },
    {
      objectstore: "OS2",
      read50: "10ms",
      read90: "20ms",
      write50: "20ms",
      write90: "11ms",
      compression: 2.1
    },
    {
      objectstore: "OS3",
      read50: "10ms",
      read90: "20ms",
      write50: "20ms",
      write90: "11ms",
      compression: 2.1
    }
  ],
  errorMsg: null
})

Mock.mock("/dashboard/performance/data", 'get', {
  isSuccess: true,
  result: {
    "OS1": {
      "read50|13": ['@integer(0, 20)'],
      "read90|13": ['@integer(0, 20)'],
      "write50|13": ['@integer(0, 20)'],
      "write90|13": ['@integer(0, 20)'],
    },
    "OS2": {
      "read50|13": ['@integer(0, 20)'],
      "read90|13": ['@integer(0, 20)'],
      "write50|13": ['@integer(0, 20)'],
      "write90|13": ['@integer(0, 20)'],
    },
    "OS3": {
      "read50|13": ['@integer(0, 20)'],
      "read90|13": ['@integer(0, 20)'],
      "write50|13": ['@integer(0, 20)'],
      "write90|13": ['@integer(0, 20)'],
    },
  },
  errorMsg: null
})