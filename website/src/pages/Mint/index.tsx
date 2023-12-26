import { useNavigate } from 'react-router-dom'

import banner from 'assets/images/mint-banner.png'

import { Dashbooard } from './Dashboard'

const Mint = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/marketplace')
  }

  return (
    <div className="flex w-full flex-col items-center justify-between gap-[36px] px-8 py-10 lg:px-20">
      <div className="relative">
        <img src={banner} alt="banner" />

        <div className="frc-center absolute left-0 top-0 h-full w-full">
          <h1 className="mt--40 text-[64px] font-bold text-white">$SEEU</h1>
        </div>
      </div>

      <div className="w-full text-center text-[30px] uppercase">
        <p className="mb-4 font-[600]">Supply: 21,000,000,000</p>

        <p className="mb-4 h-[20px] w-full bg-black" />

        <p className="text-[16px]">Minted: 100%</p>
      </div>

      <div>
        <p className="mb-2 w-full text-center">
          Mint out! Valid inscription block range:{' '}
        </p>

        <p className="w-full text-center">[49925873 ~ 50070419]</p>
      </div>
      <Dashbooard />
      <div>
        <button
          onClick={() => {
            handleNavigate()
          }}
          type="button"
          className="mt-10 rounded-2xl border border-black px-4 py-1 font-[600] text-black transition-all hover:border-black hover:bg-[#dddddd] hover:text-black"
        >
          Get $seeu from marketpalce
        </button>
      </div>
    </div>
  )
}

export default Mint
