
import bgImage from "./assets/chhath.jpg";
import Carousel from "./Carousel";
import { useState } from "react";

import { CheckCircle2, CircleX, Car, HandPlatter, Sunset, Sunrise, Menu, X } from "lucide-react";
import {
  FileText,
  Search,
  MessageCircle,
  BadgeCheck,
  CreditCard,
} from "lucide-react";


export default function LandingPage() {
const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="relative min-h-screen overflow-hidden text-white">
			{/* Background */}
			<div
				className="fixed inset-0 bg-cover bg-center scale-110"
				style={{
					backgroundImage: `url(${bgImage})`,
					filter: "blur(10px)",
				}}
			/>

			{/* Overlay */}
			<div className="fixed inset-0 bg-black/70" />

			{/* Content */}
			<div className="relative z-10">
				{/* Navbar */}
				<nav className="px-4 md:px-12 py-6">
				  <div className="flex items-center justify-between">

				    {/* Logo */}
				    <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-orange-400">
				      AANGAN
				    </h1>

				    {/* Desktop Menu */}
				    <div className="hidden md:flex gap-3">

				      <button
				        onClick={() =>
				          window.open(
				            "https://forms.gle/NSkR2jXBiQ6T91Bt9",
				            "_blank"
				          )
				        }
				        className="
				          bg-orange-500
				          hover:bg-orange-600
				          px-5
				          py-3
				          rounded-2xl
				          font-semibold
				          transition-all
				          duration-300
				        "
				      >
				        Apply for a Seat
				      </button>

				      <button
				        onClick={() => (window.location.href = "/host")}
				        className="
				          bg-white/20
				          hover:bg-white/30
				          backdrop-blur-md
				          px-5
				          py-3
				          rounded-2xl
				          font-semibold
				        "
				      >
				        Know Your Host
				      </button>

				    </div>

				    {/* Mobile Hamburger */}
					<button
					  onClick={() => setMenuOpen(!menuOpen)}
					  className="md:hidden"
					>
					  {menuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>

				  </div>

				  {/* Mobile Menu */}
				  {menuOpen && (
				    <div
				      className="
				        md:hidden
				        mt-4
				        bg-black/40
				        backdrop-blur-xl
				        border
				        border-white/20
				        rounded-2xl
				        p-4
				        flex
				        flex-col
				        gap-3
				      "
				    >
				      <button
				        onClick={() =>
				          window.open(
				            "https://forms.gle/NSkR2jXBiQ6T91Bt9",
				            "_blank"
				          )
				        }
				        className="
				          bg-orange-500
				          hover:bg-orange-600
				          py-3
				          rounded-xl
				          font-semibold
				        "
				      >
				        Apply for a Seat
				      </button>

				      <button
				        onClick={() => (window.location.href = "/host")}
				        className="
				          bg-white/10
				          hover:bg-white/20
				          py-3
				          rounded-xl
				          font-semibold
				        "
				      >
				        Know Your Host
				      </button>
				    </div>
				  )}
				</nav>

				{/* Hero Section */}
				<section className="min-h-[60vh] md:min-h-[85vh] flex flex-col justify-center items-center text-center px-6">
					<span className="border border-orange-400 px-4 py-2 rounded-full bg-orange-500/10 mb-6">
						Limited Pilot • Only 5–10 Guests
					</span>

					<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
						Experience
						<span className="text-orange-400"> Chhath Puja </span>
						with a Local Family in Bihar
					</h1>

					<p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
						Travel from Patna to our ancestral village and
						experience Chhath from the roots. Participate in
						traditions, enjoy home-cooked meals, witness
						sunrise and sunset Arghya, and take home
						authentic Chhath Prasad.
					</p>

					<p className="mt-8 text-2xl italic text-orange-300">
						Come as a guest. Leave as family.
					</p>

				</section>

				<section className="pb-24">
					<Carousel />
				</section>

				{/* Experience Card */}
				<section className="px-6 pb-20">
					<div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">

						<h2 className="text-3xl font-bold text-center mb-8">
							What You'll Experience!
						</h2>

						<div className="grid md:grid-cols-2 gap-4 text-lg">

							<div className="flex items-center gap-3">
								<CheckCircle2 size={18} className="text-green-400" />
								<span>Pickup & Drop from Patna/Gaya</span>
							</div>

							<div className="flex items-center gap-3">
								<CheckCircle2 size={18} className="text-green-400" />
								<span>Transportation to our village</span>
							</div>


							<div className="flex items-center gap-3">
								<CheckCircle2 size={18} className="text-green-400" />
								<span>3 nights family homestay</span>
							</div>

							<div className="flex items-center gap-3">
								<CheckCircle2 size={18} className="text-green-400" />
								<span>Home-Cooked Traditional Meals</span>
							</div>


							<div className="flex items-center gap-3">
								<CheckCircle2 size={18} className="text-green-400" />
								<span>Chhath Preparation Experience</span>
							</div>

							<div className="flex items-center gap-3">
								<CheckCircle2 size={18} className="text-green-400" />
								<span>Folk Songs & Stories</span>
							</div>


							<div className="flex items-center gap-3">
								<CheckCircle2 size={18} className="text-green-400" />
								<span>Thekua Making</span>
							</div>

							<div className="flex items-center gap-3">
								<CheckCircle2 size={18} className="text-green-400" />
								<span> Village Life Experience</span>
							</div>


							<div className="flex items-center gap-3">
								<CheckCircle2 size={18} className="text-green-400" />
								<span>Sandhya Arghya</span>
							</div>

							<div className="flex items-center gap-3">
								<CheckCircle2 size={18} className="text-green-400" />
								<span>Usha Arghya</span>
							</div>


							<div className="flex items-center gap-3">
								<CheckCircle2 size={18} className="text-green-400" />
								<span>Local host & coordination</span>
							</div>

							<div className="flex items-center gap-3">
								<CheckCircle2 size={18} className="text-green-400" />
								<span>Authentic Chhath Prasad</span>
							</div>
						</div>
					</div>
				</section>

				{/* Journey */}
				<section className="px-6 pb-24">
					<div className="max-w-5xl mx-auto">

						<h2 className="text-5xl font-bold text-center mb-4">
							Your Chhath Journey
						</h2>

						<p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
							For four unforgettable days, you'll become part of a Bihari
							family's celebration, experiencing traditions that have been
							passed down through generations.
						</p>

						<div className="space-y-8">

							{/* Day 1 */}
							<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
							<Car size={24} className="text-orange-300" />
								<h3 className="text-2xl font-bold text-orange-300 mb-4">
									Day 1 • Arrival & Village Welcome
								</h3>

								<p className="text-gray-200 leading-8">
									Your journey begins in Patna. From there, we'll travel together
									to our ancestral village where you'll be welcomed into our home.
									Spend the evening meeting family members, exploring the village,
									enjoying traditional home-cooked food, and understanding the
									significance of Chhath Puja.
								</p>

								<div className="mt-5 text-gray-300">

									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Pickup & Drop from Patna/Gaya</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Village Tour </span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Family Introduction</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Traditional Dinner</span>
									</div>
								</div>

							</div>

							{/* Day 2 */}
							<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
							<HandPlatter size={24} className="text-orange-300" />
								<h3 className="text-2xl font-bold text-orange-300 mb-4">
									Day 2 • Preparations & Traditions
								</h3>

								<p className="text-gray-200 leading-8">
									Witness how an entire household prepares for Chhath.
									Learn about the festival's history, help prepare offerings,
									observe traditional customs, and experience local culture
									through stories, music, and conversations with elders.
								</p>

								<div className="mt-5 text-gray-300">

									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Thekua Making</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Puja Basket Preparation</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Family Traditions & Stories</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Village Life Experience</span>
									</div>
								</div>

							</div>

							{/* Day 3 */}
							<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
							<Sunset size={24} className="text-orange-300" />
								<h3 className="text-2xl font-bold text-orange-300 mb-4">
									Day 3 • Sandhya Arghya
								</h3>

								<p className="text-gray-200 leading-8">
									Experience the most beautiful evening of the festival.
									Accompany the family to the ghat, witness devotional songs,
									observe centuries-old rituals, and watch thousands gather
									to offer prayers to the setting sun.
								</p>

								<div className="mt-5 text-gray-300">

									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span> Visit the Ghat</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Sunset Arghya Ceremony </span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Chhath Folk Songs</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Photography Opportunities</span>
									</div>
								</div>

							</div>

							{/* Day 4 */}
							<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
							<Sunrise size={24} className="text-orange-300" />
								<h3 className="text-2xl font-bold text-orange-300 mb-4">
									Day 4 • Usha Arghya & Celebration
								</h3>

								<p className="text-gray-200 leading-8">
									Wake up before sunrise and join the family as the festival
									reaches its most emotional and spiritual moment. Watch the
									first rays of the sun illuminate the river while devotees
									offer prayers. Return home for blessings, celebration,
									and sharing authentic Chhath Prasad.
								</p>

								<div className="mt-5 text-gray-300">

									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Sunrise Arghya</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Festival Conclusion </span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Family Celebrations</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={18} className="text-green-400" />
										<span>Take Home Authentic Prasad</span>
									</div>
								</div>

							</div>

						</div>

						{/* What This Is Not */}
						<section className="px-6 pb-24 mt-20">
							<div className="max-w-5xl mx-auto">

								<div className="bg-red-500/10 backdrop-blur-xl border border-red-300/20 rounded-3xl p-8">

									<h2 className="text-4xl font-bold text-center mb-4 text-red-200">
										What This Experience Is Not
									</h2>

									<p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
										We believe in setting clear expectations. This is a family-hosted
										cultural immersion, not a luxury travel package.
									</p>

									<div className="grid md:grid-cols-2 gap-4">

										<div className="flex items-center gap-3">
											<CircleX size={18} className="text-red-400" />
											<span>Luxury Hotel Accommodation</span>
										</div>

										<div className="flex items-center gap-3">
											<CircleX size={18} className="text-red-400" />
											<span>Air-Conditioned Resort Stay</span>
										</div>

										<div className="flex items-center gap-3">
											<CircleX size={18} className="text-red-400" />
											<span>Professional Tour Guides</span>
										</div>

										<div className="flex items-center gap-3">
											<CircleX size={18} className="text-red-400" />
											<span>Tourist-Style Sightseeing Packages</span>
										</div>

										<div className="flex items-center gap-3">
											<CircleX size={18} className="text-red-400" />
											<span>Commercial Entertainment Programs</span>
										</div>

										<div className="flex items-center gap-3">
											<CircleX size={18} className="text-red-400" />
											<span>Five-Star Hospitality Services</span>
										</div>
									</div>

								</div>
							</div>
						</section>

						{/* What You Will Get Instead */}
						<section className="px-6 pb-24">
							<div className="max-w-5xl mx-auto">

								<div className="bg-green-500/10 backdrop-blur-xl border border-green-300/20 rounded-3xl p-8">

									<h2 className="text-4xl font-bold text-center mb-6 text-green-200">
										What You Get Instead
									</h2>
									
									<p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
										This experience is for people who value authenticity over luxury,
										connection over convenience, and culture over tourism.
									</p>

									<div className="grid md:grid-cols-2 gap-4">

										<div className=" flex items-center gap-3">
											<CheckCircle2 size={18} className="text-green-400" />
											<span> Simple but confortable accommodation</span>
										</div>

										<div className=" flex items-center gap-3">
											<CheckCircle2 size={18} className="text-green-400" />
											<span> Homemade vegetarian meals</span>
										</div>

										<div className=" flex items-center gap-3">
											<CheckCircle2 size={18} className="text-green-400" />
											<span>Shared family spaces</span>
										</div>

										<div className=" flex items-center gap-3">
											<CheckCircle2 size={18} className="text-green-400" />
											<span>Rural surroundings</span>
										</div>

										<div className="flex items-center gap-3">
											<CheckCircle2 size={18} className="text-green-400" />
											<span>  A genuine family environment</span>
										</div>

										<div className="flex items-center gap-3">
											<CheckCircle2 size={18} className="text-green-400" />
											<span> Memories That Can't Be Bought</span>
										</div>

									</div>

								</div>

							</div>
						</section>

						<div className="text-center mt-10">
							<p className="text-2xl text-orange-300 italic">
								If you're looking for a hotel, this may not be for you.
							</p>

							<p className="text-3xl font-bold mt-4">
								If you're looking for a family, you're in the right place.
							</p>
						</div>

						{/* How It Works */}
						<section className="px-6 pt-16 pb-24">
							<div className="max-w-6xl mx-auto">

								<h2 className="text-5xl font-bold text-center mb-4">
									How It Works
								</h2>

								<p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
									We personally review every application to ensure a safe,
									comfortable, and meaningful experience for everyone.
								</p>

								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">

									<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 text-center flex flex-col items-center border border-white/20">
										<FileText size={42} className="text-orange-300  mb-3" />
										<h3 className="font-bold">Apply</h3>
										<p className="text-sm text-gray-300 mt-2">
											Fill out the interest form.
										</p>
									</div>

									<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 text-center flex flex-col items-center border border-white/20">
										<Search size={42} className="text-orange-300 mb-3" />
										<h3 className="font-bold">Review</h3>
										<p className="text-sm text-gray-300 mt-2">
											We review applications personally.
										</p>
									</div>

									<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 text-center flex flex-col items-center border border-white/20">
										<MessageCircle size={42} className="text-orange-300  mb-3" />
										<h3 className="font-bold">Connect</h3>
										<p className="text-sm text-gray-300 mt-2">
											WhatsApp or call with the host.
										</p>
									</div>

									<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 text-center flex flex-col items-center border border-white/20">
										<BadgeCheck size={42} className="text-orange-300  mb-3" />
										<h3 className="font-bold">Confirm</h3>
										<p className="text-sm text-gray-300 mt-2">
											Finalize your participation.
										</p>
									</div>
 
									<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 text-center flex flex-col items-center border border-white/20">
										<CreditCard size={42} className="text-orange-300  mb-3" />
										<h3 className="font-bold">Reserve</h3>
										<p className="text-sm text-gray-300 mt-2">
											Pay a small advance to secure your seat.
										</p>
									</div>

									<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 text-center flex flex-col items-center border border-white/20">
										<Sunrise size={42} className="text-orange-300  mb-3" />
										<h3 className="font-bold">Experience</h3>
										<p className="text-sm text-gray-300 mt-2">
											Join us for Chhath and become part of the family.
										</p>
									</div>

								</div>

							</div>
						</section>

						{/* Seat rservation policy */}
						<div className="max-w-4xl mx-auto bg-green-500/10 border border-green-300/20 rounded-3xl p-8 text-center">

							<h3 className="text-3xl font-bold text-green-200">
								Seat Reservation Policy
							</h3>

							<p className="mt-4 text-gray-200 leading-8">
								Once your application is approved, you can reserve your seat with
								a small advance payment. The remaining amount can be paid before
								arrival or at the start of the experience.
							</p>

							<div className="mt-6 bg-orange-500/10 border border-orange-400/20 rounded-2xl p-5">

								<h4 className="text-xl font-semibold text-orange-300">
									Advance Payment Policy
								</h4>

								<p className="mt-3 text-gray-200 leading-7">
									As we are hosting a very limited group of guests (only 5-10 people),
									your seat is reserved exclusively for you once the advance payment
									is received.
								</p>

								<p className="mt-3 text-gray-200 leading-7">
									For this reason, the advance payment is non-refundable in case of
									cancellation. This helps us plan accommodation, meals,
									transportation, and ensures that another interested guest does not
									miss the opportunity due to limited availability.
								</p>

							</div>

							<p className="mt-6 text-gray-300">
								We appreciate your understanding and commitment to keeping this
								experience personal, authentic, and well-organized.
							</p>

						</div>

						{/* Closing Note */}
						<div className="mt-10 text-center bg-orange-500/10 border border-orange-400/20 rounded-3xl p-8">

							<h3 className="text-2xl font-bold text-orange-300 mb-4">
								What Makes This Different?
							</h3>

							<p className="max-w-3xl mx-auto text-gray-200 leading-8">
								This is not a commercial group tour. You'll stay with a local family,
								participate in authentic traditions, and experience Chhath exactly as
								it has been celebrated in our village for generations.
							</p>

						</div>

					</div>
				</section>

				<div className="mt-10 text-center mb-10">

					<h2 className="text-4xl font-bold">
						Come as a Guest.
					</h2>

					<h2 className="text-4xl font-bold text-orange-300 mt-2">
						Leave as Family.
					</h2>

					<button
						onClick={() =>
							window.open(
								"https://forms.gle/NSkR2jXBiQ6T91Bt9",
								"_blank"
							)
						}
						className="mt-8 bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
					>
						Apply For A Seat
					</button>

				</div>

				<div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
					<button
						onClick={() =>
							window.open(
								"https://forms.gle/NSkR2jXBiQ6T91Bt9",
								"_blank"
							)
						}
						className="
				      backdrop-blur-2xl
					  bg-white/10
					  backdrop-blur-xl
				      border
				      border-orange-300/20
				      text-white

				      px-4 py-2.5
				      md:px-7 md:py-4

				      text-sm
				      md:text-base

				      rounded-full
				      font-medium
				      tracking-wide

				      shadow-[0_8px_32px_rgba(0,0,0,0.25)]

				      hover:bg-orange-500/20
				      hover:border-orange-300/40
				      hover:scale-105

				      transition-all
				      duration-300
				    "
					>
						Apply for a Seat
					</button>
				</div>
			</div>
		</div>
	);
}