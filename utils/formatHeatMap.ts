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
  name: string
  data: number[]
}

export default (data: DataType[]) => {
  const firstTimeRange: number[] = []
  const secondTimeRange: number[] = []
  const thirdTimeRange: number[] = []
  const fourTimeRange: number[] = []
  const fiveTimeRange: number[] = []
  const sixTimeRange: number[] = []
  data.forEach(d => {
    const firstTime = isNaN(Number(d['7:00 - 7:29']))
      ? 0
      : Number(d['7:00 - 7:29'])
    const secondTime = isNaN(Number(d['7:30 - 7:59']))
      ? 0
      : Number(d['7:30 - 7:59'])
    const thirdTime = isNaN(Number(d['8:00 - 8:29']))
      ? 0
      : Number(d['8:00 - 8:29'])
    const fourTime = isNaN(Number(d['8:30 - 8:59']))
      ? 0
      : Number(d['8:30 - 8:59'])
    const fiveTime = isNaN(Number(d['9:00 - 9:29']))
      ? 0
      : Number(d['9:00 - 9:29'])
    const sixTime = isNaN(Number(d['9:30 - 9:59']))
      ? 0
      : Number(d['9:30 - 9:59'])
    firstTimeRange.push(firstTime)
    secondTimeRange.push(secondTime)
    thirdTimeRange.push(thirdTime)
    fourTimeRange.push(fourTime)
    fiveTimeRange.push(fiveTime)
    sixTimeRange.push(sixTime)
  })
  const graphData: GraphDataType[] = [
    {
      name: '7:00 - 7:29',
      data: firstTimeRange
    },
    {
      name: '7:30 - 7:59',
      data: secondTimeRange
    },
    {
      name: '8:00 - 8:29',
      data: thirdTimeRange
    },
    {
      name: '8:30 - 8:59',
      data: fourTimeRange
    },
    {
      name: '9:00 - 9:29',
      data: fiveTimeRange
    },
    {
      name: '9:30 - 9:59',
      data: sixTimeRange
    }
  ]
  return graphData
}
