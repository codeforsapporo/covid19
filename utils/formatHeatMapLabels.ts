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
  },
  tozai: {
    left: [
      '宮の沢',
      '発寒南',
      '琴似',
      '二十四軒',
      '西28丁目',
      '円山公園',
      '西18丁目',
      '西11丁目',
      '大通',
      'バスセンター前',
      '菊水',
      '東札幌',
      '白石',
      '南郷7丁目',
      '南郷13丁目',
      '南郷18丁目',
      '大谷地',
      'ひばりが丘',
      '新さっぽろ'
    ],
    right: [
      '新さっぽろ',
      'ひばりが丘',
      '大谷地',
      '南郷18丁目',
      '南郷13丁目',
      '南郷7丁目',
      '白石',
      '東札幌',
      '菊水',
      'バスセンター前',
      '大通',
      '西11丁目',
      '西18丁目',
      '円山公園',
      '西28丁目',
      '二十四軒',
      '琴似',
      '発寒南',
      '宮の沢'
    ]
  },
  toho: {
    left: [
      '栄町',
      '新道東',
      '元町',
      '環状通東',
      '東区役所前',
      '北13条東',
      'さっぽろ',
      '大通',
      '豊水すすきの',
      '学園前',
      '豊平公園',
      '美園',
      '月寒中央',
      '福住'
    ],
    right: [
      '福住',
      '月寒中央',
      '美園',
      '豊平公園',
      '学園前',
      '豊水すすきの',
      '大通',
      'さっぽろ',
      '北13条東',
      '東区役所前',
      '環状通東',
      '元町',
      '新道東',
      '栄町'
    ]
  }
}

export default (data: DataType) => {
  let jplinename: string = ''
  let jpstations: string[] = []
  let jpdate: string = ''
  const dates: RegExpMatchArray | null = data.date.match(/(\d+)\D+(\d+)\D+$/)
  if (dates) {
    jpdate = dates[1] + '月第' + dates[2] + '週'
  }
  if (data.linename === 'namboku') {
    jplinename = '南北線'
    if (data.direction === 'left') {
      jpstations = stations.namboku.left
    } else {
      jpstations = stations.namboku.right
    }
  } else if (data.linename === 'tozai') {
    jplinename = '東西線'
    if (data.direction === 'left') {
      jpstations = stations.tozai.left
    } else {
      jpstations = stations.tozai.right
    }
  } else {
    jplinename = '東豊線'
    if (data.direction === 'left') {
      jpstations = stations.toho.left
    } else {
      jpstations = stations.toho.right
    }
  }

  const labelData: LabelDataType = {
    JPLineName: jplinename,
    ENLineName: data.linename,
    OriginalDate: data.date,
    JPDate: jpdate,
    OriginalDirection: data.direction,
    StationFrom: jpstations[jpstations.length - 1],
    StationTo: jpstations[0],
    Stations: jpstations
  }
  return labelData
}
