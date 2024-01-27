import './index.css'

const Roadmap = () => (
  <div className="roadmap grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2 xl:grid-cols-3">
    <div className="col-span-1 mt-12">
      <div className="content">
        <p className="leading-[1.25rem]">
          SeeU is the leading meme coin of the Chinese DAO, which can drive the
          community-based BTC Layer2 in the future.
        </p>
        <p>
          Our slogan is to create a cyberspace community and an online Qinghong
          gang
        </p>
        <p>
          Our mission is to unite those who missed out on inscriptions,
          fostering a collective effort to reach new heights and achieve a
          thousandfold coin for the new generation.
        </p>
      </div>
      <h1 className="mt-4 h-[48px] w-[360px]">What</h1>
    </div>
    <div className="col-span-1 mt-12">
      <div className="content">
        <p>
          If we understand that success in all Layer N projects depends on
          ecosystem expansion and community consensus, we will comprehend the
          following:
        </p>
        <ol className="leading-[1.25rem]">
          <li className="mb-[10px]">
            1.The essence of the BTC Layer2 War lies in burning funds,
            attracting talent, and creating assets
          </li>
          <li>
            2.Diverse technical paths in BTC Layer2, yet the core revolves
            around community and ecosystem
          </li>
        </ol>
      </div>
      <h1 className="mt-4 h-[48px] w-[360px]">Why</h1>
    </div>
    <div className="col-span-1 mt-12">
      <div className="content">
        <ol className="mb-0">
          <li className="mb-[10px]">
            <h3>1.Technical implementation</h3>
            <p>
              We focus on longevity rather than speed. we plan to develop chain
              nodes,develop browsers,and applications such as DeFi and NFT.
            </p>
          </li>
          <li className="mb-[10px]">
            <h3>2.Economic model</h3>
            <p>
              We stake SeeU to become a BitFair POS block producer. The block
              reward is the L2 native token BitFair, and the GAS fee is SeeU.
            </p>
          </li>
          <li>
            <h3>3.Ecosystem development</h3>
            <p className="mb-0">We focus on community rather than money.</p>
          </li>
        </ol>
      </div>
      <h1 className="mt-4 h-[48px] w-[360px]">How</h1>
    </div>
  </div>
)

export default Roadmap
