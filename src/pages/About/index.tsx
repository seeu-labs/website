import seeu from 'assets/images/SeeU.png'

const About = () => (
  <div className="fcc-center w-full gap-[36px] overflow-auto px-8 pb-10 text-[16px] md:px-20 md:text-[24px] lg:mt-[60px]">
    <div className="mb-[64px]">
      <div className="fcc-start md:frc-center mb-[40px]">
        <h1 className="mr-4 text-[40px]">What is</h1>
        <img src={seeu} alt="seeu" />
      </div>
      <p className="mb-[40px]">
        {`SeeU is the leading meme coin of the Chinese DAO. Our slogan is to
        create a cyberspace community and an online Qinghong gang, allowing
        companions who missed out on inscriptions to band together and strive
        for the top, achieving a new generation of a thousandfold coin. Don't
        get caught up in the fear of missing out among the elders in the
        inscriptions circle; follow a solid team instead of blindly rushing,
        targeting one is sufficient!`}
      </p>
      <p>
        {`On the night of December 21st, SeeU, without any promotion, burned over
        $1 million in just 1.5 hours to complete minting. Our goal for December
        22nd is to surge onto the OK BRC20 leaderboard and dominate. Let's keep
        pushing forward together! Step by step, let's create the miracle within
        the inscriptions circle!`}
      </p>
    </div>
    <div className="fcc-start md:fcs-start mb-[64px] w-full">
      <div className="fcc-start md:frc-center mb-[40px]">
        <img src={seeu} alt="seeu" className="mb-4 2xl:mr-10" />
        <h2>The first inscription of an old leek!</h2>
      </div>
      <div className="fcc-start md:frc-center mb-[40px] ml-0 2xl:ml-[30px]">
        <img src={seeu} alt="seeu" className="mb-4 2xl:mr-10" />
        <h2>The first inscription of a young person!</h2>
      </div>
      <div className="fcc-start md:frc-center mb-[40px] ml-0 2xl:ml-60">
        <img src={seeu} alt="seeu" className="mb-4 2xl:mr-10" />
        <h2>The first inscription of the space stepper!</h2>
      </div>
    </div>
  </div>
)

export default About
