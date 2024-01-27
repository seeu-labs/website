import { MerlinDetail } from 'api/merlin/merlin.model'
import ReactECharts from 'echarts-for-react'
import { graphic } from 'echarts'
import moment from 'moment'

type TransactionTableProps = {
  rawData: MerlinDetail
}

const TimeBlockChart = ({ rawData }: TransactionTableProps) => {
  // 使用 moment 库格式化时间戳
  const formattedTime: string[] = rawData.items
    .reverse()
    .map((item) => moment(item.time * 1000).format('YYYY-MM-DD HH:mm:ss'))

  // 每个数据一笔交易
  const amount: string[] = rawData.items.map((item) => item.amount)

  const getOption = () => {
    return {
      title: {
        text: 'Time vs Amount',
        textStyle: {
          color: '#d3d3d3' // 设置标题文字颜色为白色
        }
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a}: {c}'
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: formattedTime,
        name: 'Time',
        boundaryGap: false // 不显示轴上的间隔
      },
      yAxis: {
        type: 'value',
        // min: 824500, // 设置Y轴的起始点
        name: 'Amount'
      },
      series: [
        {
          name: 'Amount',
          data: amount,
          type: 'line',
          smooth: true,
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgb(99, 227, 255)' }, // 渐变起始色
              { offset: 1, color: 'rgb(135, 208, 104)' } // 渐变结束色
            ])
          }
        }
      ]
    }
  }

  return (
    <ReactECharts
      option={getOption()}
      style={{ height: '400px', width: '100%', minWidth: '480px', flex: 1 }}
    />
  )
}

export default TimeBlockChart
