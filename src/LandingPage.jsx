
import bgImage from "./assets/chhath.jpg";
import Carousel from "./Carousel";

export default function LandingPage() {
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
        <nav className="flex items-center justify-between px-6 md:px-12 py-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-orange-400">
            AANGAN
          </h1>

		  <button
		    onClick={() =>
		      window.open(
		        "https://forms.gle/NSkR2jXBiQ6T91Bt9",
		        "_blank"
		      )
		    }
		    className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition shadow-lg"
		  >
		    Apply for a Seat
		  </button>
		  
		  <button
		  onClick={() => window.location.href = "/host"}
		  className="bg-white/20 hover:bg-white/30 px-8 py-4 rounded-2xl font-semibold"
		  >
		  Know Your Host
		  </button>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">
          <span className="border border-orange-400 px-4 py-2 rounded-full bg-orange-500/10 mb-6">
            Limited Pilot • Only 5–10 Guests
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
            Experience
            <span className="text-orange-400"> Chhath Puja </span>
            with a Real Bihari Family
          </h1>

          <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-200">
            Travel from Patna to our ancestral village and experience
            Chhath from the roots. Participate in traditions, enjoy
            home-cooked meals, witness sunrise and sunset Arghya,
            and take home authentic Chhath Prasad.
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

              <div>✅ Pickup from Patna</div>
              <div>✅ Travel to Our Village</div>

              <div>✅ Stay with a Bihari Family</div>
              <div>✅ Home-Cooked Traditional Meals</div>

              <div>✅ Chhath Preparation Rituals</div>
              <div>✅ Folk Songs & Stories</div>

              <div>✅ Thekua Making</div>
              <div>✅ Village Life Experience</div>

              <div>✅ Sandhya Arghya</div>
              <div>✅ Usha Arghya</div>

              <div>✅ Authentic Prasad</div>
              <div>✅ Lifelong Memories</div>

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

		        <h3 className="text-2xl font-bold text-orange-300 mb-4">
		          🌆 Day 1 • Arrival & Village Welcome
		        </h3>

		        <p className="text-gray-200 leading-8">
		          Your journey begins in Patna. From there, we'll travel together
		          to our ancestral village where you'll be welcomed into our home.
		          Spend the evening meeting family members, exploring the village,
		          enjoying traditional home-cooked food, and understanding the
		          significance of Chhath Puja.
		        </p>

		        <div className="mt-5 text-gray-300">
		          ✅ Patna Pickup <br />
		          ✅ Village Tour <br />
		          ✅ Family Introduction <br />
		          ✅ Traditional Dinner
		        </div>

		      </div>

		      {/* Day 2 */}
		      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

		        <h3 className="text-2xl font-bold text-orange-300 mb-4">
		          🌾 Day 2 • Preparations & Traditions
		        </h3>

		        <p className="text-gray-200 leading-8">
		          Witness how an entire household prepares for Chhath.
		          Learn about the festival's history, help prepare offerings,
		          observe traditional customs, and experience local culture
		          through stories, music, and conversations with elders.
		        </p>

		        <div className="mt-5 text-gray-300">
		          ✅ Thekua Making <br />
		          ✅ Puja Basket Preparation <br />
		          ✅ Family Traditions & Stories <br />
		          ✅ Village Life Experience
		        </div>

		      </div>

		      {/* Day 3 */}
		      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

		        <h3 className="text-2xl font-bold text-orange-300 mb-4">
		          🌅 Day 3 • Sandhya Arghya
		        </h3>

		        <p className="text-gray-200 leading-8">
		          Experience the most beautiful evening of the festival.
		          Accompany the family to the ghat, witness devotional songs,
		          observe centuries-old rituals, and watch thousands gather
		          to offer prayers to the setting sun.
		        </p>

		        <div className="mt-5 text-gray-300">
		          ✅ Visit the Ghat <br />
		          ✅ Sunset Arghya Ceremony <br />
		          ✅ Chhath Folk Songs <br />
		          ✅ Photography Opportunities
		        </div>

		      </div>

		      {/* Day 4 */}
		      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">

		        <h3 className="text-2xl font-bold text-orange-300 mb-4">
		          ☀️ Day 4 • Usha Arghya & Celebration
		        </h3>

		        <p className="text-gray-200 leading-8">
		          Wake up before sunrise and join the family as the festival
		          reaches its most emotional and spiritual moment. Watch the
		          first rays of the sun illuminate the river while devotees
		          offer prayers. Return home for blessings, celebration,
		          and sharing authentic Chhath Prasad.
		        </p>

		        <div className="mt-5 text-gray-300">
		          ✅ Sunrise Arghya <br />
		          ✅ Festival Conclusion <br />
		          ✅ Family Celebrations <br />
		          ✅ Take Home Authentic Prasad
		        </div>

		      </div>

		    </div>

		    {/* Closing Note */}
		    <div className="mt-10 text-center bg-orange-500/10 border border-orange-400/20 rounded-3xl p-8">

		      <h3 className="text-2xl font-bold text-orange-300 mb-4">
		        What Makes This Different?
		      </h3>

		      <p className="max-w-3xl mx-auto text-gray-200 leading-8">
		        This is not a commercial group tour. You'll stay with a real family,
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
		              className="mt-8 bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl"
		            >
		              Apply For A Seat
		            </button>

		          </div>
		
		

      </div>
    </div>
  );
}