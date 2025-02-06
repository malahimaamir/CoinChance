"use client";
import { useState } from "react";
import { FaCloud } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaRocketSolid } from "react-icons/lia";
import Image from "next/image";
export default function CoinChancePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div
        className="min-h-screen bg-gradient-to-b from-[#1A1D4D] to-[#070B2B] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/412a/c1ab/a66456e17b8f6a8503f8618934b200a2?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HBkeqGsUSu~sWOs4rIXET5rMwRqahzlMjbMs9-VhHW6CW08968KFo7uxn5Ckvr4NxId0mY7h5Xom3bSudk6tF~F2fpkgKdD-dAfn606FcZFCQz8xleG0yFYbsxqpLKDifBZNb1~3BzAngxjY3MfjJ-2TaPl8QhOFGFgHiYFDYPoJnwGCY~yXlLJ6HgtFb-Y35R71ZRi-fPxeyQWWxtWMRjb~mPB-Px1OVpb6moNXpXckx7vwfgK-nZhGy4Zcxb2B8RQB15g52KJqCfyDz6HSz1blvfgqrIFdcmfZ5fqb0zAsbhX2ye2fDl~hu6LW8BltfNZGZCKxd7zClmOojsiovg__")',
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <header className="flex items-center justify-between px-4 py-3 text-white bg-[#0E1138] shadow-md">
          <div className="text-lg font-bold">CoinChance</div>
          <nav
            className={`sm:flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <a href="#presale" className="hover:text-gray-300 transition">
              Presale
            </a>
            <a href="/aggregator" className="hover:text-gray-300 transition">
              Aggregator
            </a>
            <a href="/play-game" className="hover:text-gray-300 transition">
              Play Game
            </a>
            <button className="bg-gradient-to-r from-[#2B1F6B] to-[#674EEB] px-4 py-2 rounded-lg hover:opacity-90">
              Select Wallet
            </button>
          </nav>
          <div className="sm:hidden">
            <RxHamburgerMenu
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </header>

        <main className="flex flex-col items-center text-center px-6 py-24 sm:items-start sm:text-left">
          <h1 className="text-2xl sm:text-4xl text-white font-bold mb-4">
            Blast Off With Coin Chance
          </h1>
          <p className="text-sm sm:text-lg text-gray-300 mb-6 max-w-md">
            Are you ready to drip into the cloud and see your balance rise? Lets
            drip into success together!
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#aea9ca] to-[#2c2b30] px-6 py-3 rounded-lg text-sm sm:text-lg hover:opacity-90">
              <FaCloud className="text-white" /> Play
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#2B1F6B] to-[#674EEB] px-6 py-3 rounded-lg text-sm sm:text-lg hover:opacity-90">
              <LiaRocketSolid className="text-white" /> Join CoinChance
            </button>
          </div>
        </main>

        <section className="w-full max-w-md sm:max-w-3xl mx-auto mt-10 sm:mt-32 px-4 py-8 bg-gradient-to-r from-[#2B1F6B] to-[#674EEB] rounded-2xl shadow-xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Current Price
          </h2>
          <p className="text-sm text-gray-300 mb-6">$CHANCE Token: 0.05 USD</p>
          <div className="flex justify-center gap-4 mb-6">
            {[
              {
                name: "Sol",
                src: "https://cryptologos.cc/logos/solana-sol-logo.png",
              },
              {
                name: "Eth",
                src: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
              },
              {
                name: "BNB",
                src: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
              },
            ].map((token) => (
              <button
                key={token.name}
                className="flex flex-col items-center bg-gradient-to-r from-[#2B1F6B] to-[#5039c0] px-6 py-3 rounded-lg hover:opacity-90 text-sm"
              >
                <Image
                  width={25}
                  height={25}
                  src={token.src}
                  alt={token.name}
                  unoptimized={true}
                />
                {token.name}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Enter Amount (Sol)"
            className="w-full px-4 py-3 rounded-lg bg-[#1A1D4D] border border-gray-600 focus:outline-none text-sm text-gray-300 mb-4"
          />
          <button className="w-full bg-gradient-to-r from-[#533eca] to-[#1e088b] px-4 py-3 rounded-lg text-sm sm:text-lg hover:opacity-90">
            Connect Wallet
          </button>
        </section>
      </div>

      {/* Giveaway Section */}
      <div
        className="w-[100%] h-[100%] border-transparent "
        style={{
          background:
            "linear-gradient(90deg, #110b2e, #100a2c, #221660, #251869, #0a061b)",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <section
          id="presale"
          className="flex flex-col items-center mt-10 justify-center min-h-min px-8 py-12 text-white bg-[#141853] rounded-2xl mx-4 md:mx-auto max-w-6xl shadow-xl backdrop-blur-xl"
        >
          <h2 className="text-2xl md:text-[35px] text-white font-bold text-center mb-8">
            Participate In Giveaways
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-full">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-72 h-72 md:w-[400px] md:h-[350px]">
                <Image
                  width={1000}
                  height={1000}
                  src="https://github.com/malahimaamir/CoinChance/blob/main/src/app/coinChance/pngtree-colorful-pie-chart-png-image_4406767-removebg-preview.png?raw=true"
                  alt="Graph Image"
                  className="w-full h-full object-cover"
                  unoptimized={true}
                />
              </div>
            </div>

            {/* Table Section */}
            <div className="w-full md:w-1/2 bg-[#1A1D4D] p-6 md:p-8 rounded-2xl shadow-lg border border-[#674EEB]">
              <h3 className="text-lg md:text-xl font-bold text-[#674EEB] mb-3">
                $DICE Has Total Supply Of 420,000,000
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-6">
                The Mega Dice token serves as the utility token of our platform,
                enabling users to access premium content, participate in
                community governance, and redeem exclusive rewards and benefits.
              </p>
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left pb-3 text-gray-400">Fund</th>
                    <th className="text-right pb-3 text-gray-400">
                      % Allocation
                    </th>
                    <th className="text-right pb-3 text-gray-400">Token</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      fund: "Presale",
                      allocation: "35%",
                      token: "147,000,000",
                    },
                    {
                      fund: "Airdrops For Players",
                      allocation: "15%",
                      token: "63,000,000",
                    },
                    { fund: "LP", allocation: "15%", token: "63,000,000" },
                    {
                      fund: "Casino $DICE Pool",
                      allocation: "15%",
                      token: "63,000,000",
                    },
                    {
                      fund: "Staking Rewards",
                      allocation: "10%",
                      token: "42,000,000",
                    },
                    {
                      fund: "Marketing/KOL Deals",
                      allocation: "5%",
                      token: "21,000,000",
                    },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-700">
                      <td className="py-2">{row.fund}</td>
                      <td className="text-right py-2">{row.allocation}</td>
                      <td className="text-right py-2">{row.token}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <br />
        <br />
        <br />
        <section className="py-12 text-center">
          <h2 className="text-4xl text-white  font-bold mb-6">Our Roadmap</h2>
          <p className="text-gray-400 mb-12 px-6 max-w-2xl mx-auto">
            Cryptocurrency is a digital form of currency that utilizes
            cryptography to secure transactions, control the creation of new
            units, and verify the transfer of assets.
          </p>

          {/* <!-- Roadmap Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
            {/* <!-- Card 1 --> */}
            <div className="relative bg-[#1A1D4D] p-6 rounded-xl shadow-md text-left">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                1
              </div>
              <h3 className="text-lg text-white font-bold mt-6 mb-2">
                Presale and Marketing
              </h3>
              <p className="text-gray-300 text-sm">
                Mega Dice starts on a level playing field with a fair presale.
                The team will allocate a portion of funds raised towards a
                professional marketing strategy.
              </p>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="relative bg-[#1A1D4D] p-6 rounded-xl shadow-md text-left">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                2
              </div>
              <h3 className="text-lg text-white font-bold mt-6 mb-2">
                Allocated Liquidity Provision
              </h3>
              <p className="text-gray-300 text-sm">
                The Mega Dice team will add a substantial liquidity pool. For
                this purpose, 10% of the total token supply has been set aside.
              </p>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="relative bg-[#1A1D4D] p-6 rounded-xl shadow-md text-left">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                3
              </div>
              <h3 className="text-lg text-white font-bold mt-6 mb-2">
                DEX Launch
              </h3>
              <p className="text-gray-300 text-sm">
                Mega Dice will launch on DEX. This will provide the best trading
                environment and early liquidity.
              </p>
            </div>

            {/* <!-- Card 4 (Row Below) --> */}
            <div className="relative bg-[#1A1D4D] p-6 rounded-xl shadow-md text-left md:col-span-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                4
              </div>
              <h3 className="text-lg text-white font-bold mt-6 mb-2">
                Presale TOken Claiming
              </h3>
              <p className="text-gray-300 text-sm">
                To ensure a fair launch for Mega Dice, presale buyers will be
                able to claim their tokens from the website at the same time as
                the DEX listing.
              </p>
            </div>

            {/* <!-- Card 5 --> */}
            <div className="relative bg-[#1A1D4D] p-6 rounded-xl shadow-md text-left">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                5
              </div>
              <h3 className="text-lg font-bold text-white mt-6 mb-2">
                Early Staking Incentive
              </h3>
              <p className="text-gray-300 text-sm">
                Presale buyers of Mega Dice will be able to stake their tokens
                into the smart contract before listing day to benefit from the
                high early rewards opportunity.
              </p>
            </div>
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
                src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                alt="Lindsey Dokidis"
                className="w-24 h-24 rounded-full mb-4"
                width={24}
                height={24}
                unoptimized={true}
              />
              <h3 className="text-xl font-bold">Lindsey Dokidis</h3>
              <p className="text-gray-300">Manager</p>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
                officia et sint laboriosam sed ipsa sint ut volup.
              </p>
            </div>
            <div className="bg-[#1A1D4D] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Image
                src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
                alt="Hanna Dias"
                className="w-24 h-24 rounded-full mb-4"
                width={24}
                height={24}
                unoptimized={true}
              />
              <h3 className="text-xl font-bold">Hanna Dias</h3>
              <p className="text-gray-300">Senior Manager</p>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
                officia et sint laboriosam sed ipsa sint ut volup.
              </p>
            </div>
            <div className="bg-[#1A1D4D] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Image
                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Ryan Gouse"
                className="w-24 h-24 rounded-full mb-4"
                width={24}
                height={24}
                unoptimized={true}
              />
              <h3 className="text-xl font-bold">Ryan Gouse</h3>
              <p className="text-gray-300">Manager</p>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
                officia et sint laboriosam sed ipsa sint ut volup.
              </p>
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
                  width={10}
                  height={10}
                  unoptimized={true}
                />
                <div>
                  <p className="text-gray-400 text-xs">
                    CoinChance is the future of cryptocurrency. Their innovative
                    approach is unmatched.
                  </p>
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
          <p className="text-gray-400 mt-2">
            Join now with COINCHANCE to get the latest news and start mining now
          </p>

          {/* <!-- Input & Button Wrapper --> */}
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4 w-full">
            <div className="relative w-full md:w-2/3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 bg-[#1E2139] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md transition hover:bg-gray-200">
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
                  width={8}
                  height={8}
                  unoptimized={true}
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
