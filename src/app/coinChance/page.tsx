import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
export default function CoinChancePage() {
  return (
    <div>
      <div
        className="bg-gradient-to-b from-[#1A1D4D] to-[#070B2B] min-h-[900px] "
        style={{
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/412a/c1ab/a66456e17b8f6a8503f8618934b200a2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HBkeqGsUSu~sWOs4rIXET5rMwRqahzlMjbMs9-VhHW6CW08968KFo7uxn5Ckvr4NxId0mY7h5Xom3bSudk6tF~F2fpkgKdD-dAfn606FcZFCQz8xleG0yFYbsxqpLKDifBZNb1~3BzAngxjY3MfjJ-2TaPl8QhOFGFgHiYFDYPoJnwGCY~yXlLJ6HgtFb-Y35R71ZRi-fPxeyQWWxtWMRjb~mPB-Px1OVpb6moNXpXckx7vwfgK-nZhGy4Zcxb2B8RQB15g52KJqCfyDz6HSz1blvfgqrIFdcmfZ5fqb0zAsbhX2ye2fDl~hu6LW8BltfNZGZCKxd7zClmOojsiovg__")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <header className="flex items-center justify-between px-4 sm:px-8 py-4 text-white bg-[#0E1138] shadow-md">
          <div className="text-base sm:text-xl font-bold">CoinChance</div>
          <nav className="hidden sm:flex items-center gap-4">
            <a href="#presale" className="text-sm hover:text-gray-300 transition duration-300">Presale</a>
            <a href="/aggregator" className="text-sm hover:text-gray-300 transition duration-300">Aggregator</a>
            <a href="/play-game" className="text-sm hover:text-gray-300 transition duration-300">Play Game</a>
            <button className="bg-gradient-to-r from-[#2B1F6B] to-[#674EEB] px-3 sm:px-4 py-2 rounded-lg text-sm hover:opacity-90">Select Wallet</button>
          </nav>
          <div className="sm:hidden">
            <RxHamburgerMenu className="text-xl" />
          </div>
        </header>

        <main className="flex flex-col items-start text-left px-4 sm:ml-12">
          <h1 className="text-2xl sm:text-4xl text-white font-bold mb-4">Blast Off With Coin Chance</h1>
          <p className="text-sm sm:text-lg text-gray-300 mb-6">Are you ready to drip into the cloud and <br className="hidden sm:block" /> see your balance rise? Let's drip into success together!</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-[#2B1F6B] to-[#674EEB] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg hover:opacity-90">Play</button>
            <button className="bg-gradient-to-r from-[#2B1F6B] to-[#674EEB] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg hover:opacity-90">Join CoinChance</button>
          </div>
        </main>
      </div>

      {/* Current Price Section */}
      <div className="w-[100%] h-[100%] bg-gradient-to-r from-[#0d0a22]  to-[#312668] ">
        <br />
        <br />
        <br />
        <br />
        <section className=" hover:shadow-2xl  border-image-source-[radial-gradient(98%_49.86%_at_100.03%_100%,#674EEB_0%,rgba(103,78,235,0.05)_100%),radial-gradient(24.21%_39.21%_at_0%_0%,rgba(255,255,255,0.81)_0%,rgba(255,255,255,0.19)_100%),radial-gradient(21.19%_40.1%_at_100.03%_0%,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)] bg-gradient-to-r from-[#2B1F6B] to-[#674EEB] px-8 py-12  rounded-2xl mx-4 md:mx-auto max-w-3xl shadow-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-4 text-center text-[35px] text-white ">
            Current Price
          </h2>
          <p className="text-gray-300 text-center mb-6">
            $CHANCE Token: 0.05 USD
          </p>

          <div className="flex gap-4 justify-center mb-6">
            <button className="bg-gradient-to-r from-[#2B1F6B] to-[#5039c0] px-6 py-3 rounded-lg text-lg hover:opacity-90">
              <div>
                <Image
                width={25} height={25}
                  className="w-245px] h-[25px] "
                  src="https://cryptologos.cc/logos/solana-sol-logo.png"
                  alt="logo"
                />
              </div>
              Sol
            </button>
            <button className="bg-gradient-to-r from-[#2B1F6B] to-[#503bb8] px-6 py-3 rounded-lg text-lg hover:opacity-90">
              <div>
                <Image
                width={25} height={25}
                  className="w-[25px] h-[25px] "
                  src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                  alt="logo"
                />
              </div>
              Eth
            </button>
            <button className="bg-gradient-to-r from-[#2B1F6B] to-[#5437e9] px-6 py-3 rounded-lg text-lg hover:opacity-90">
              <div>
                <Image
                width={25}
                height={25}
                  className="w-[25px] h-[25px] "
                  src="https://cryptologos.cc/logos/bnb-bnb-logo.png"
                  alt="logo"
                />
              </div>
              BNB
            </button>
          </div>

          <div className="mb-6">
            <input
              type="number"
              placeholder="Enter Amount (Sol)"
              className="w-full px-4 py-3 rounded-lg bg-[#1A1D4D] border border-gray-600 focus:outline-none"
            />
          </div>
          <div className="text-white text-[17px]">Tokens Bought on Solana</div>
          <button className="w-full bg-gradient-to-r from-[#533eca] to-[#1e088b] px-4 py-3 rounded-lg text-lg hover:opacity-90">
            Connect Wallet
          </button>
        </section>

        {/* Giveaway Section */}
        <section
          id="presale"
          className="px-8 py-12 mt-12 text-white bg-[#141853] rounded-2xl mx-4 md:mx-auto max-w-4xl shadow-xl backdrop-blur-xl"
        >
          <h2 className="text-2xl text-[35px] text-white font-bold text-center mb-6">
            Participate In Giveaways
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="w-48 h-48 mx-auto md:mx-0">
                <div className="w-full h-full ">
                  <Image
                  width={1000} height={1000}
                    src="https://miro.medium.com/v2/resize:fit:1400/0*vaYFaucS716oqzy4"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-[#1A1D4D] p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-[#674EEB]">
                $DICE Has Total Supply Of 420,000,000
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                The Mega Dice token serves as the utility token of our platform,
                enabling users to access premium content, participate in
                community governance, and redeem exclusive rewards and benefits.
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left pb-2">Fund</th>
                    <th className="text-right pb-2">% Allocation</th>
                    <th className="text-right pb-2">Token</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Presale</td>
                    <td className="text-right">35%</td>
                    <td className="text-right">147,000,000</td>
                  </tr>
                  <tr>
                    <td>Airdrops For Players</td>
                    <td className="text-right">15%</td>
                    <td className="text-right">63,000,000</td>
                  </tr>
                  <tr>
                    <td>LP</td>
                    <td className="text-right">15%</td>
                    <td className="text-right">63,000,000</td>
                  </tr>
                  <tr>
                    <td>Casino $DICE Pool</td>
                    <td className="text-right">15%</td>
                    <td className="text-right">63,000,000</td>
                  </tr>
                  <tr>
                    <td>Staking Rewards</td>
                    <td className="text-right">10%</td>
                    <td className="text-right">42,000,000</td>
                  </tr>
                  <tr>
                    <td>Marketing/KOL Deals</td>
                    <td className="text-right">5%</td>
                    <td className="text-right">21,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <br />
        <br />
        <br />
        <section className="py-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Our Roadmap</h2>
          <div className="flex flex-wrap justify-center gap-6 px-6">
            {[
              "Presale and Marketing",
              "Allocated Liquidity Provision",
              "DEX Launch",
              "Presale Token Claiming",
              "Early Staking Incentive",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-[#1A1D4D] p-6 rounded-xl shadow-md w-full sm:w-1/2 lg:w-1/4"
              >
                <h3 className="text-lg font-bold mb-2">{step}</h3>
                <p className="text-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <br />
        <br />
        <br />
        <section className="px-8 py-12 text-white bg-[#0E1138] rounded-2xl mx-4 md:mx-auto max-w-6xl shadow-xl backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Meet The CoinChance Team
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Our team consists of experienced professionals dedicated to making
            CoinChance a success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1A1D4D] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Image
                src="https://s3-alpha-sig.figma.com/img/0c25/40d8/18481ad1ce3d571d47cbe64592492643?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B-itCSLpxl47jxrpVXNnJbHuwW2WY0Pgsboa1MyWXhcVuNdy30d-5LSxNizhw7qv3hRyaaKw~goCez0y36E3jcyAbvKTnLd0WRv6PJQEd~Ux1XiUn5JhTqreAWKnTxrgmosZHVDGP-TrWf6A-vrt-5gLbkt3-6aT6mBOYMJ6uSpyRj87uZmCiyWtWOxy~BURM44Zau07NgJ7OV30sZzlX-LVUv2wYB1mUnpmADLz7ck83SG~Fhh4sNyQ~BMCpRfXyL8IBvlM3vDqU7K0oq-wEOylNh6TKDHe0GUe5etv086ManXqgDteuxq5BiAgAEl7VrNcF5cCV2TSNk7k~DrDUA__"
                alt="Lindsey Dokidis"
                className="w-24 h-24 rounded-full mb-4"
                width={24} height={24}
              />
              <h3 className="text-xl font-bold">Lindsey Dokidis</h3>
              <p className="text-gray-300">Manager</p>
            </div>
            <div className="bg-[#1A1D4D] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Image
                src="https://s3-alpha-sig.figma.com/img/de2a/5f0f/7b341da4f10c34c8636d72ba12aa437b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VyQPuGRKbxtT0Mc5x7cQDkI2m8BQQKrIKS-aky6nKMOGw9~KIxKp-4Gbl2lRiYCaom8jJLH1gVxdiJiHCLtUdZ3AcyoV5EyiQwcs-wj3JIcXmS2eLapgLYjq~0cdUTpzsD1uKHfGi5gFLz0n2Jtw9WBMfx~AGp9qgJci0Z8~Wc-W5tgcgEhXWKvUbxXHW24266aEnvS30HF9bdfWTbhC5utygWEYc99wzq2PC0kD466zRBgfZlIxHefRcT94ZTguFnxmKTYlfBMkRLxVAQxf0luDkA78cuvdlZEIFWLFlZyh5PrfjRIOFk0OGswno6r2mRb6GHmF4wAMHpzdqp3qVQ__"
                alt="Hanna Dias"
                className="w-24 h-24 rounded-full mb-4"
                width={24} height={24}
              />
              <h3 className="text-xl font-bold">Hanna Dias</h3>
              <p className="text-gray-300">Senior Manager</p>
            </div>
            <div className="bg-[#1A1D4D] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Image
                src="https://s3-alpha-sig.figma.com/img/2032/145a/e3f736f94cf1062d4badbfa5ff68a775?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mc9~QDm1ADOrosKiZ-gN3Mqoc-9BeyFflZKG1b8fY4Z3aLk~~hX5eQOZxLucc1tdTLaXe23sODvKuEMzQSzPoJuhYt-fN-Vf40arR7maq2Lm~pwHDXIGV46~YK4KxH-cQzwcL23Dzq4gE-m6Femau5uPE17LxGWJNHU~2fOvbrOLP1F4uZIcyMIuoLZb50D4cK~WCscuXgZ-5jeLb7LrEhKwktBZo19fxEasFNuwPxJ1oO4oSj9Zso8VcfbyqegZv0PJmF3VN4VtrRsccH1Pgh8jmGSpMT3xOG06z0x1DFDWVdGJtEEEDeBdfAC-4vEoM21phUOl6f1AfgtVlZ3I7g__"
                alt="Ryan Gouse"
                className="w-24 h-24 rounded-full mb-4"
                width={24} height={24}
              />
              <h3 className="text-xl font-bold">Ryan Gouse</h3>
              <p className="text-gray-300">Manager</p>
            </div>
          </div>
        </section>

        {/* What People Are Saying*/}
        <br />
        <br />
        <br />
        <br />
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          What People Are Saying
        </h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="bg-[#1A1D4D] p-6 rounded-2xl shadow-md text-sm md:text-base"
            >
              <div className="flex items-center mb-3">
                <Image
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                  width={10} height={10}
                />
                <div>
                  <p className="font-semibold text-white">User Name</p>
                  <p className="text-gray-400 text-xs">Job Title</p>
                </div>
              </div>
              <p className="text-gray-300">
                This is a sample review. The layout, font sizes, and spacing
                match the reference image.
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* email Section */}
        <br />
        <br />
        <br />
        <div className="mt-16 bg-[#1A1D4D] p-6 md:p-10 rounded-xl text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl text-white font-semibold">
            Start mining now
          </h3>
          <p className="text-white mt-2">
            Join now with COINCHANCE to get the latest news and start mining now
          </p>
          <div className="mt-4 flex flex-col md:flex-row justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none w-full md:w-auto"
            />
            <button className="bg-gradient-to-r from-[#2B1F6B] to-[#674EEB] px-6 py-2 rounded-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* footer */}
        <br />
        <br />
        <br />
        <br />
        <footer className="bg-[#0E1138] text-gray-400 py-12 px-6 md:px-16 lg:px-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center space-x-2">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/1948/bec5/220034df6dc94f9002ea827c561eb9e6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NfW9OX6MaqQbN~~m2oZ1r1T~BOlLJFMGIbMmhFMLzHi3ZdcnlQnH9fbOsCt0zxyfe5P5dHjMjR0ooAAZ-AZmE-ISpho3AvGis7m7O0BV8xS8Uaz8pLl1uyY1yae9SAQbS-dCSvbERQ18luQGzHZozPsYmHttR2iJJR0xsrqvGKAAjB3YOtZ8IfTr35dpMcu5P8GlQCipGwp1EM0Dn~Hv6xWKg9WZUUO18hINOG6xMRrqtiJAYuOTT7Wjjfms-j4WALcg3UpAWmarF7F-MmtV410CSVs6fAkfnEffTlp66Jjx0Pceh-VDh1N3BBcbUlE422Kv5G2NT0gzbIUBMdMeRw__"
                  alt="Logo"
                  className="w-8 h-8"
                  width={8} height={8}
                />
                <h2 className="text-white text-xl font-semibold">Coin Shake</h2>
              </div>
              <p className="mt-4 text-sm leading-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </p>
              <p className="mt-2 text-sm">
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
              <div className="flex space-x-4 mt-4">
                <button className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
                  Ⓧ
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
                  🔵
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
                  ✈
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
                  🔗
                </button>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Copyright 2024 © CoinChance
              </p>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Merch</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold">
                Privacy Policy and Terms of Service
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Legal & Privacy</li>
                <li>Documentation</li>
                <li>Giveaway Submission Form</li>
                <li>Terms of Service</li>
                <li>Trade Desk Terms of Service</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
