import { MerlinDetail } from 'api/merlin/merlin.model'
import ReactECharts from 'echarts-for-react'
import { graphic } from 'echarts'

type TransactionTableProps = {
  rawData: MerlinDetail
}

const BlockTxChart = ({ rawData }: TransactionTableProps) => {
  // 使用 Set 确保区块高度唯一
  const uniqueBlockHeightSet = new Set(
    rawData.items.map((item) => item.block_height)
  )
  const uniqueBlockHeight: number[] = Array.from(uniqueBlockHeightSet)

  // 使用 reduce 计算每个区块的交易数量
  const transactionCount: number[] = rawData.items.reduce(
    (acc, item) => {
      const index = uniqueBlockHeight.indexOf(item.block_height)
      if (index !== -1) {
        acc[index]++
      }
      return acc
    },
    Array(uniqueBlockHeight.length).fill(0) // 初始化一个长度为 uniqueBlockHeight.length 的数组，初始值为 0
  )

  const getOption = () => {
    return {
      title: {
        text: 'BlockHeight vs TransactionCount',
        textStyle: {
          color: '#d3d3d3' // 设置标题文字颜色为白色
        }
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          // 只显示第一个系列的信息
          const seriesIndexToShow = 0
          const seriesName = params[seriesIndexToShow].seriesName
          const value = params[seriesIndexToShow].value

          return `${seriesName}: ${value}`
        }
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
        right: '16%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: uniqueBlockHeight,
        name: 'BlockHeight'
      },
      yAxis: {
        type: 'value',
        name: 'TransactionCount'
      },
      series: [
        {
          name: 'transactions count',
          data: transactionCount,
          type: 'bar',
          smooth: true,
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgb(99, 227, 255)' }, // 渐变起始色
              { offset: 1, color: 'rgb(135, 208, 104)' } // 渐变结束色
            ])
          }
        }
        // {
        //   name: 'transactions(bar)',
        //   data: transactionCount,
        //   type: 'bar',
        //   barWidth: '30%', // 设置柱状图宽度
        //   itemStyle: {
        //     color: new graphic.LinearGradient(0, 0, 0, 1, [
        //       { offset: 0, color: 'rgb(99, 227, 255)' }, // 渐变起始色
        //       { offset: 1, color: 'rgb(135, 208, 104)' } // 渐变结束色
        //     ])
        //   }
        // }
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

export default BlockTxChart
