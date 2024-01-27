import { useEffect, useState } from 'react'
import type { MerlinResponse } from 'api/merlin/merlin.model'
import api from 'api'
import TransactionTable from './components/TransactionTable'
import TimeBlockChart from './components/TimeBlockChart'
import BlockTxChart from './components/BlockTxChart'

const Charts: React.FC = () => {
  const [data, setData] = useState<MerlinResponse>({
    err: 0,
    msg: 'success',
    data: {
      total: 0,
      height: 0,
      offset: 0,
      items: []
    }
  })

  useEffect(() => {
    api.merlin
      .getMerlinDetails({
        tick: 'seeu'
      })
      .then((res) => {
        console.log(res)
        setData(res)
      })
      .catch(() => {
        setData({
          err: 0,
          msg: 'success',
          data: {
            total: 2183,
            height: 826193,
            offset: 0,
            items: [
              {
                inscription_id:
                  '68ccc3cd460368ddcf6848905bbda2c2606a93a2d6fbbc6ceb236a00d5c27f9ai0',
                from: 'bc1pm6ryzq7xqw58fe6cmx4r2htd3dp9pygdrl657jphw4wr7ck28frqq35t55',
                to: 'bc1plr4gz7l0uvc0ec79tan2g9cx64zkktv48v0pu9qfn6xxyqa6vgtsajg8ex',
                amount: '10000000',
                time: 1704644399,
                txid: '813d314db7a0aea5794c466502ae563f33ddd58fb74a62b8f7303197443d2890',
                block_height: 824764
              },
              {
                inscription_id:
                  'f75a8fc10d4cbe255290f3e70e4b7738cde31f9ff8e78037496fa51e2073b5cfi0',
                from: 'bc1q97nkccpsp2mq4ty2f7e3fdxg3uce7hg563puku',
                to: 'bc1ps8xl0mlgcfutj3kgxvnpy3gkccjatqvv24kw3f3cxfclptfhv4vs6w3v42',
                amount: '31000000',
                time: 1704640896,
                txid: 'e5332b34677889bda5d6df7e755f315d22aa317586e5a677441b249e866193af',
                block_height: 824757
              },
              {
                inscription_id:
                  '0998efcc45704ca3dae3ed9447e476f2d501dcc240bda20be7b59452f57233a3i0',
                from: 'bc1p26xs549upmd6ddf352sqhtutqhcg0jtz0ef6pyepfsts82sxr8fq3lukj3',
                to: 'bc1p26xs549upmd6ddf352sqhtutqhcg0jtz0ef6pyepfsts82sxr8fq3lukj3',
                amount: '3000000',
                time: 1704638159,
                txid: '34f1088110a4ee0156b9814e478e1a06f71adacce283442058fa72ab61269e32',
                block_height: 824755
              },
              {
                inscription_id:
                  'c7aae24de0f397de9f6ab6c6201ebb6c42b6463e09a4e39d7d9e97f5f40fef8fi0',
                from: 'bc1py8lnstudrwjutmzm4q20kfmpmjsngml4x2zxrxm2apy29k0ppz5qr56l2v',
                to: 'bc1pc4wmvyva8snhq72hz3hgwv3cmvqdppel0sqk0elj059vjmszur0sd6j4lr',
                amount: '5000000',
                time: 1704626490,
                txid: 'b24df70d3919beff32cbc13f0ce970cceee9188576e05d725d670ea83ffaef6f',
                block_height: 824733
              },
              {
                inscription_id:
                  '083a33c7220304657129bbaa2be45f9081e1958e489bbb6a7922f4c9c9aec43ci0',
                from: 'bc1pdm4c983kyph8a4t0ayk8mkczuxkt4gahhdhkg0vkee4u4zdz4t7q42d7ky',
                to: 'bc1p0276ul83t88pyz2hfllm3xe3shr6w8n4f2hwzpehew5sl0elzv2s48dmjn',
                amount: '10000000',
                time: 1704614018,
                txid: '9e441e3427e24c45f34316901d0dc4cf6187aa242df0f62f10dab7de79df6496',
                block_height: 824718
              },
              {
                inscription_id:
                  'd10a90c64c9a6b0049d1f0033d7d250da08f243917290a27d93637c54fa276efi0',
                from: 'bc1qquewyas6d70sm7wegyldge3rtgql308d44ldp6',
                to: 'bc1plxxl8q9u0hv09dy6vujcsc38wj697fs9z9fuhv6kds3wwhc5hjvshd09gx',
                amount: '100000',
                time: 1704596763,
                txid: '966ea0ab122cfa5f44c6ead63b5dd5fce6cc4ea1977c93ab967969c45aa07b85',
                block_height: 824701
              },
              {
                inscription_id:
                  '2e5d42fb47c24f4dfd34a991d853d9d7a63edd4a8ba69766e38ba361349c2d40i0',
                from: 'bc1ppg3kqvpgl4h2et40wnnnaq2zcntay53t4sftugw98jwm5cdpa0eqqwk3h0',
                to: 'bc1p79cezphmd6pvetzawnvxueq40dnkd93kmjs54h3kfqvgdd9ugdasksfl53',
                amount: '10000000',
                time: 1704560417,
                txid: '4f25f6c3725deaf66e4e8373619c270f7c5e1b1864896487e6e721c8682fa534',
                block_height: 824639
              },
              {
                inscription_id:
                  '2072f79d936c468a9139a734e046639dfa677179a213d704942f1cdfe4f8ddbbi0',
                from: 'bc1qxl9mfaz949qqve8rmsqc09wpzz0axdqfym9qqe',
                to: 'bc1p79cezphmd6pvetzawnvxueq40dnkd93kmjs54h3kfqvgdd9ugdasksfl53',
                amount: '10000000',
                time: 1704560417,
                txid: '4f25f6c3725deaf66e4e8373619c270f7c5e1b1864896487e6e721c8682fa534',
                block_height: 824639
              },
              {
                inscription_id:
                  '3d0ebd24c54cc98db015e4720e981d9d6281c4b740738f6198d43ee20cd9c131i0',
                from: 'bc1qkz8pgu9mlclruhlx2x869c5hwktl7nkkgy0ft6',
                to: 'bc1p79cezphmd6pvetzawnvxueq40dnkd93kmjs54h3kfqvgdd9ugdasksfl53',
                amount: '9000000',
                time: 1704560417,
                txid: '4f25f6c3725deaf66e4e8373619c270f7c5e1b1864896487e6e721c8682fa534',
                block_height: 824639
              },
              {
                inscription_id:
                  '825746b9aed92873efc870357affd83e6b7d865708a2494ac467bbb8ca462fcdi0',
                from: 'bc1p9z6syw4aphu6s3dr4h8fqf6sze8jfug0hmc6s3p9pup8nmprk44qpjwvuc',
                to: 'bc1p5hd7s8h4pfsktvk7q5sxksv0ze86zngnm4yl84ucn5fpf2t2ug9ssshrau',
                amount: '5000000',
                time: 1704555000,
                txid: '6c3710575476791eb971e94f1d77e4dd6661fa1e02abd1fa481acb5f0f59b0e7',
                block_height: 824630
              }
            ]
          }
        })
      })
  }, [])

  return (
    <div>
      {/* 交易记录表 */}
      <TransactionTable data={data.data} />
      {/* 区块交易记录折线图 */}
      <div className="mt-[30px] flex flex-wrap gap-10">
        <BlockTxChart rawData={data.data} />
        <TimeBlockChart rawData={data.data} />
      </div>
    </div>
  )
}

export default Charts
