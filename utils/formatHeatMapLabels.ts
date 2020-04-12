type DataType = {
  linename: string // 路線名
  date: string // xgatsuxsyu
  direction: string // left or right
}

type LabelDataType = {
  JPLineName: string // 路線名(日本語）
  ENLineName: string // 路線名(もとのやつ)
  OriginalDate: string // 元日付
  JPDate: string // 変換後日付
  OriginalDirection: string
  StationFrom: string
  StationTo: string
  Stations: string[]
}

const stations = {
  namboku: {
    left: [
      '麻生',
      '北34条',
      '北24条',
      '北18条',
      '北12条',
      'さっぽろ',
      '大通',
      'すすきの',
      '中島公園',
      '幌平橋',
      '中の島',
      '平岸',
      '南平岸',
      '澄川',
      '自衛隊前'
    ],
    right: [
      '自衛隊前',
      '澄川',
      '南平岸',
      '平岸',
      '中の島',
      '幌平橋',
      '中島公園',
      'すすきの',
      '大通',
      'さっぽろ',
      '北12条',
      '北18条',
      '北24条',
      '北34条',
      '麻生'
    ]
  }
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
  const labelData: LabelDataType[] = [
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
