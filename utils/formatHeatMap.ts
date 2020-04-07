type DataType = {
  出発駅: string
  到着駅: string
  '7:00 - 7:29': string
  '7:30 - 7:59': string
  '8:00 - 8:29': string
  '8:30 - 8:59': string
  '9:00 - 9:29': string
  '9:30 - 9:59': string
}

type GraphDataType = {
  lineName: string
  startStation: string
  endStation: string
  firstTimeRange: []
  secondTimeRange: []
  thirdTimeRange: []
  fourTimeRange: []
  fiveTimeRange: []
}

export default (data: DataType[]) => {
  return data
}
