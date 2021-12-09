import styled from "styled-components";
import "../App.css";
import background from "../assets/Background.png";
import cover from "../assets/bg.png";
import frame from "../assets/frame.png";
import circle from "../assets/circle.png";
import bitcoin from "../assets/bitcoin.png";
import mail from "../assets/mail.png";
import Navbar from "../Navbar";
import Footer from "../Footer/footer";
import Container from "../components/Container";
import { Nav } from "../Navbar/NavbarElements";

<ul>
	<li>
		<a href="about-us">About</a>
	</li>
</ul>

const Home = () => {
	return (
		<div>
			<Navbar />

			<div class=''>
				<div style={{ backgroundImage: `url(${background})` }} class='h-screen'>
					<div>
						<div class='w-2/3 flex  md:justify-center '>
							<div class=' '>
							<h3 className='text-xl font-museo w-2/3 text-blue-700 text-left mt-24'>Welcome to Currenxi.ng</h3>
								<h1 className='text-4xl font-museo w-2/3 text-blue-700 text-left mt-3'>
									Buying & Selling Digital Assets Made Easy.
								</h1>
								<button class='bg-blue-500 hover:bg-blue-700 mt-5 mb-20 text-white font-bold rounded-full py-3 px-6'>
									Get Started
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			
			<Container>
				<div class='flex flex-col md:flex-row w-full text-center lg:flex-row items-center justify-center'>
					<div class=''>
						<h4 className='text-4xl text-left font-Museo-Sans-Bold'>
							About Currenxi.ng
						</h4>

						<p class='w-2/3 text-left mt-5'>
							Currenxi.ng is a highly secured platform where you trade digital
							assets such as gift cards, cryptocurrencies and NFTs without any
							difficulty. Whether it is Bitcoin, Ethereum, Litecoin, or USDT, we
							will pay you fast in your bank account or cryptocurrency.{" "}
						</p>

						<p class='w-4/5 mt-5 text-left'>
							We are registered by regulatory authorities and also adopt
							industry's best practices.{" "}
						</p>
					</div>
					<div class='w-full flex justify-center md:justify-center mt-10'>
						<img src={frame} alt='frame' />
					</div>
				</div>
			</Container>

			<div class='flex flex-col bg-blue-900 mt-20 md:flex-row w-full text-center lg:flex-row items-center justify-center'>
				<div class='w-full flex justify-center md:justify-center mt-10'>
					<img src={circle} alt='circle' />
				</div>

				<div>
					<h4 className='text-5xl text-left text-yellow-300 font-bold w-11/12 lg:w-8/12 '>
						Our Story
					</h4>

					<p class='w-3/4 mt-5 text-left text-white'>
						Our work with block chain is one of the inspirations for founding
						currenxi.ng. We know what crypto can power, so we decide to create a
						platform that unleashes the power of block chain.
					</p>

					<p class='w-3/4  mt-5 text-left text-white'>
						We are working to ensure that our users do more and get
						mouthwatering profits on any deal.{" "}
					</p>
				</div>
			</div>
			
			<Cont style={{ backgroundImage: `url(${cover})` }} className='mb-5'>
				<h2 class='text-3xl mb-5 text-center'>
					Why You Should Choose Currenxi.ng
				</h2>
				<div class='flex  md:flex-row w-full text-center items-center justify-center'>
					<div class='flex items-center justify-center'>
						<div class='grid grid-rows-6 grid-cols-2 items-center gap-12'>
							<div class='col-start-1 col-end-2 row-span-2 px-7 py-5 rounded bg-white h-45'>
								<h3 class='font-bold'>Multiple Payment Options </h3>
								<p className='text-center'>
									You can get paid in any payment method of your choice when you
									exchange your gift cards and cryptocurrencies with us. Whether
									ETH, Bitcoin, Litecoin or even your local bank account
									Currenxi.ng got you covered. You can also buy crypto
									currencies on our websites{" "}
								</p>
							</div>
							<div class='col-start-1 col-end-2 row-span-2 px-7 py-5 rounded mt-6 bg-white'>
								<h3 class='font-bold'>Industry Best Practices </h3>
								<p>
									{" "}
									Our Operations follow FINTECH international standards. We keep
									track of our operations from time to time to ensure that we
									get rid of any unauthorized transactions{" "}
								</p>{" "}
							</div>

							<div class='col-start-1 col-end-2 row-span-2 px-7 py-5 rounded mt-6 bg-white mb-10'>
								<h3 class='font-bold'>
									You Can Build Your Trading Reputation{" "}
								</h3>
								<p>
									{" "}
									The Currenxi.ng is built in a way that allows you to have a
									strong reputation as you trade on theplatform. The more you
									trade without issues, the more you get visible on the
									platform. One day, you might get featured on Currenxi.ng
								</p>{" "}
							</div>

							<div class='col-start-2 col-end-3 row-start-2 row-span-2 px-7 py-5 rounded bg-white'>
								<h3 class='font-bold'>
									Mouthwatering Rates and Top-Notch Security{" "}
								</h3>
								<p className='text-center'>
									{" "}
									At currenxi.ng, we offer you the most competitive rates you
									can't get anywhere else. When you trade your gift cards and
									crypto with us, we are ready to pay you at the top rates of
									the day. When it comes to seccurity, your details and assets
									are safe. We employ the best industry-standard security to
									help keep our customers' information and transaction safe. You
									can never get it wrong when you work with us.{" "}
								</p>
							</div>
							<div class='col-start-2 col-end-3 row-start-4 row-span-2 px-7 py-5 rounded mt-6 mb-7 bg-white'>
								<h3 class='font-bold'>24/7 Support </h3>
								<p>
									At currenxi.ng, our team is always available to help whenever
									you are facing any difficulty. With round-the-clock and
									immediate assistance, we are ready to help you overcome any
									issue you might be facing. It doesn't matter if it is 2 AM or
									7 Pm. We're always available.{" "}
								</p>{" "}
							</div>
						</div>
					</div>
				</div>
			</Cont>

			<Container className='bg-white mt-5 mb-5'>
				<div class='flex flex-col md:flex-row w-full gap-12 text-center'>
					<div class='flex justify-center md:justify-center mt-10'>
						<div class='flex gap-12'>
							<div class='rounded bg-blue-900'>
								<h3 class='font-bold text-yellow-300'>Get Started Today </h3>
								<p className='pl-4 text-left text-white'>
									It is high time you started trading without any restriction
									whatsoever. If you want to experience trading without
									complexity, then you should go for currenxi.ng{" "}
								</p>
								<p className='pl-4 text-left text-white'>
									{" "}
									We have made the user experience accessible and navigation f
									the website as simple as possible. That is, you don't need any
									technical skills before you can get the best trading
									experience. This simplicity is extended to registration. You
									can easily sign up and create a new account on the website.{" "}
								</p>

								<div class='w-full flex justify-left md:justify-left pl-4 mt-10'>
									<img src={bitcoin} alt='bitcoin' />
								</div>
							</div>
						</div>
					</div>

					<div>
						<div class='flex align-center md:align-center mt-10'>
							<div class=' grid grid-rows-3 grid-flow-col gap-4'>
								<div class='rounded bg-gray-100 px-2'>
									<h3 class='font-bold'>1. Create Account </h3>
									<p className='text-center'>
										{" "}
										To carry out any transaction on currenxi.ng you need to
										create an account. Creating an account is easy. Follow this
										link to create an account.{" "}
									</p>
								</div>

								<div class='rounded bg-gray-100 px-2'>
									<h3 class='font-bold'>2. Start Trading </h3>
									<p className='text-center'>
										{" "}
										You can start trading the moment you sign in to currenxi.ng.
										Choose whatever you want to trade. Whether you want to buy
										cryptocurrency or sell gift cards, the process is easy to
										follow.{" "}
									</p>
								</div>
								<div class='rounded mt-6 bg-gray-100 px-2'>
									<h3 class='font-bold'>3. Complete Transaction </h3>
									<p>
										{" "}
										Once you have put up a trade, you will have to confirm the
										transaction to complete the process. For instance if you
										sell on the website, the amount will be paid into your
										wallet - crypto or bank account within seconds. It is as
										fast as that.
									</p>{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>

			<Container className='bg-yellow-400 rounded'>
				<h2 class='text-center py-10'>
					A Better Way to Exchange Digital Assets
				</h2>
				<p class='mt-5 ml-10 pl-10 text-left w-3/4'>
					Currenxi.ng offers one of the simplest ways of exchanging your digital
					assetss. A whole lot of scams and out there, and you wouldn't want to
					be a victim. This is another reason why you should work with us when
					you want to:
				</p>

				<div class='grid grid-cols-2 pl-10 pr-10 items-center gap-12'>
					<div class='col-start-1 col-end-2 mt-7 px-7 pl-7 py-5 rounded bg-white mb-10 h-45'>
						<h3 class='font-bold'>Exchange Gift Cards </h3>
						<p className='text-left'>
							We buy a lot of gift cards from the USA and other countries.
							iTunes, Amazon, Steam, Walmart, Google, Sephora, Nordstrom, Visa,
							Nike, Amex, eBay, Home, Depot, OffGamers, Best Buy, Vanilla, Apple
							Store, Target and Marcy are other gift cards we buy.{" "}
						</p>
					</div>
					<div class='col-start-2 col-end-3 px-7 py-2 h-40 rounded bg-white'>
						<h3 class='font-bold mt-5'>Buy/Sell Cryptocurrencies </h3>
						<p className='text-left'>
							You can buy or sell cryptocurrencies on Currenxi.ng. The
							cryptocurrencies are limited to Bitcoin, Litecoin, Ethereum, and
							USDT.{" "}
						</p>
					</div>
				</div>
			</Container>
			<Container>
				<div>
					<h1 class='text-center text-blue-900 text-3xl'>
						{" "}
						Frequently Asked Questions
					</h1>
				</div>
				<div class='flex flex-col md:flex-row w-full gap-12 text-center'>
					<div class='flex justify-center md:justify-center mt-10'>
						<div class='flex gap-12'>
							<div class='grid grid-rows-4 grid-cols-2 items-center gap-12'>
								<div class='col-start-1 col-end-10 row-span-2 px-7 py-5 rounded bg-white h-45'>
									<h3 class=' text-left pt-5 font-bold rounded bg-blue-900 text-yellow-400'>
										1. Why should I trust Currenxi.ng?{" "}
									</h3>
									<h3 class='text-left pt-5 font-bold rounded bg-gray-100 '>
										2. How do I register an account?{" "}
									</h3>
									<h3 class='text-left pt-5 font-bold rounded bg-gray-100'>
										3. What can I trade on Currenxi.ng?{" "}
									</h3>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div class='flex align-center md:align-center mt-10'>
							<div class=' grid grid-flow-col'>
								<div class='rounded bg-gray-100 mt-5 mb-5 px-2'>
									<p className='text-left'>
										{" "}
										Currenxi is more than a website where you can exchange gift
										cards and cryptocurrencies. In our short time of inception,
										we have managed to change the game of crypto trading with
										our automated exchange system.{" "}
									</p>

									<p className='text-left mt-6'>
										{" "}
										Our minimum sell limit is $1. This gives you the chance to
										try out our system and see how fast we will process your
										payment. When we say fast, we do not mean hours or minutes,
										but seconds. It is unbelievable, right? This is why you
										should take action and get the best trading experience with
										us.{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>

			<Container className='rounded'>
				<div class='flex flex-col bg-yellow-400 md:flex-row w-full text-center  lg:flex-row items-center justify-center'>
					<div class='w-full flex justify-center md:justify-center mt-20'>
						<img src={mail} alt='mail' />
					</div>

					<div>
						<h4 className='text-2xl text-left text-blue-900 font-bold w-11/12 lg:w-8/12 '>
							Stay Up to date
						</h4>

						<p class='w-3/4 mt-5 text-left text-blue-900'>
							Signup for our newsletter. Then you get regular news, bitcoin
							exchange rates and available gift cards, etc.
						</p>

						<p class='w-3/4  mt-5 text-left text-blue-900'>
							Looking for help? Contact Us here.{" "}
						</p>
					</div>
				</div>
				
			</Container>
		</div>
	);
};

export default Home;

const Cont = styled.div`
	padding-top: 50px;
	padding-right: 120px;
	padding-left: 120px;

	@media (min-width: 1500px) {
		padding-top: 50px;
		padding-right: 250px;
		padding-left: 250px;
	}
`;

