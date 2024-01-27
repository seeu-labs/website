import Table, { TablePaginationConfig } from 'antd/es/table'
import Typography from 'antd/es/typography'
import { getShortString } from 'utils'
import { ExportOutlined } from '@ant-design/icons'
import { MerlinDetail } from 'api/merlin/merlin.model'
import { useEffect, useState } from 'react'

const { Paragraph } = Typography

type TransactionTableProps = {
  data: MerlinDetail
}

const TransactionTable = ({ data }: TransactionTableProps) => {
  const [tableData, setTableData] = useState(data.items)
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: Math.ceil(data.offset / 10) || 1,
    pageSize: 10,
    total: data.total,
    showSizeChanger: false
  })

  useEffect(() => {
    setTableData(data.items)
    setPagination({
      current: Math.ceil(data.offset / 10) || 1,
      pageSize: 10,
      total: data.total,
      showSizeChanger: false
    })
  }, [data])

  const handleTableChange = (_pagination: TablePaginationConfig) => {
    setPagination(_pagination)
    console.log('_pagination', _pagination)

    if (pagination?.pageSize !== _pagination?.pageSize) {
      setTableData([])
    }
  }

  const columns = [
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from',
      render: (from: string) => (
        <Paragraph copyable={{ tooltips: false }}>
          {getShortString(from, 6, 4)}
        </Paragraph>
      )
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: 'to',
      render: (to: string) => (
        <Paragraph copyable={{ tooltips: false }}>
          {getShortString(to, 6, 4)}
        </Paragraph>
      )
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: string) => parseInt(amount).toLocaleString()
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      render: (time: number) => new Date(time * 1000).toLocaleString()
    },
    {
      title: 'Block Height',
      dataIndex: 'block_height',
      key: 'block_height'
    },
    {
      title: 'TXID',
      dataIndex: 'txid',
      key: 'txid',
      render: (txid: string) => (
        <div className="flex gap-4">
          <Paragraph copyable={{ tooltips: false }}>
            {getShortString(txid, 6, 4)}
          </Paragraph>
          <a
            href={`https://www.blockchain.com/explorer/transactions/btc/${txid}`}
          >
            <ExportOutlined />
          </a>
        </div>
      )
    }
  ]

  return (
    <Table
      columns={columns}
      dataSource={tableData || []}
      pagination={pagination}
      onChange={handleTableChange}
    />
  )
}

export default TransactionTable
