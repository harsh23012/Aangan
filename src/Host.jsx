import hostImage from "./assets/host.png";

export default function Host() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-amber-700 to-orange-600" />

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-black/30" />

      <div className="relative z-10 px-6 py-12">

        <div className="max-w-6xl mx-auto">

          {/* Top Buttons */}

          <div className="flex justify-between flex-wrap gap-4 mb-10">

            <button
              onClick={() => (window.location.href = "/")}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl font-semibold border border-white/10"
            >
              ← Back To Home
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://forms.gle/NSkR2jXBiQ6T91Bt9",
                  "_blank"
                )
              }
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-2xl font-semibold shadow-xl"
            >
              Apply For A Seat
            </button>

          </div>

          {/* Hero Card */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Photo */}

			  <div className="flex justify-center">
			      <img src={hostImage} className="rounded-full"/>
			  </div>

              {/* Details */}

			  <div>
			    <span className="bg-orange-500/20 border border-orange-300 px-4 py-2 rounded-full">
			      Meet Your Host
			    </span>

			    <h1 className="text-5xl font-bold mt-6">
			      Hi, I'm Harsh Kumar
			    </h1>

			    <p className="mt-6 text-lg text-gray-200 leading-8">
			      I'm an Associate Software Engineer based in Bangalore,
			      originally from Bihar. Every year, my family celebrates
			      Chhath Puja in our ancestral village approximately
			      100 km from Patna.
			    </p>

			    <p className="mt-4 text-gray-200 leading-8">
			      Growing up, Chhath was never just a festival for us.
			      It is a time when families come together, traditions
			      are passed on, and entire communities participate
			      in something much larger than themselves.
			    </p>

			    <p className="mt-4 text-gray-200 leading-8">
			      Over the years, I noticed that many people outside
			      Bihar are deeply interested in experiencing Chhath
			      but often don't have access to a local family or
			      community. This experience was created to bridge
			      that gap.
			    </p>

			    <p className="mt-4 text-gray-200 leading-8">
			      Along with my family, I personally host this
			      experience and remain your point of contact
			      before, during, and after your visit.
			    </p>

			    <div className="mt-6 grid md:grid-cols-2 gap-4">

			      <div className="bg-white/10 rounded-xl p-4 border border-white/10">
			        <p className="text-orange-300 font-semibold">
			          Profession
			        </p>
			        <p>Associate Software Engineer</p>
			      </div>

			      <div className="bg-white/10 rounded-xl p-4 border border-white/10">
			        <p className="text-orange-300 font-semibold">
			          Based In
			        </p>
			        <p>Bangalore, India</p>
			      </div>

			      <div className="bg-white/10 rounded-xl p-4 border border-white/10">
			        <p className="text-orange-300 font-semibold">
			          Native Place
			        </p>
			        <p>Bihar, India</p>
			      </div>

			      <div className="bg-white/10 rounded-xl p-4 border border-white/10">
			        <p className="text-orange-300 font-semibold">
			          Hosting Style
			        </p>
			        <p>Family Hosted Cultural Experience</p>
			      </div>

			    </div>
			  </div>
            </div>

          </div>

          {/* Why We Are Doing This */}

          <div className="mt-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">

            <h2 className="text-3xl font-bold mb-6">
              Why We Are Doing This
            </h2>

            <p className="text-gray-200 leading-8">
              Growing up, Chhath was never just a festival for us.
              It brought families together, connected generations,
              and created memories that lasted a lifetime.
            </p>

            <p className="text-gray-200 mt-4 leading-8">
              We want people from different parts of India and beyond
              to experience this tradition in the most authentic way
              possible not as tourists, but as welcomed guests.
            </p>

          </div>

          {/* Contact Card */}

          <div className="mt-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">

            <h2 className="text-3xl font-bold mb-6">
              Contact Information
            </h2>

            <div className="space-y-4 text-lg">

              <p>
                📧 Email: craftmytrail@gmail.com
              </p>

              <p>
                📱 WhatsApp: +91 84345 80656
              </p>

              <p>
                📍 Location: Vill- Sachai, Kurtha, Arwal (Patna: 70 KMs & Gaya: 50 KMs)
              </p>

            </div>

          </div>

          {/* Expectations Card */}

          <div className="mt-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">

            <h2 className="text-3xl font-bold mb-6">
              Before You Apply
            </h2>

            <ul className="space-y-4 text-lg text-gray-200">

              <li>✅ Respect local traditions and customs</li>

              <li>✅ Be comfortable staying with a family</li>

              <li>✅ Be open to village life experiences</li>

              <li>✅ Small group only (5-10 guests)</li>

              <li>✅ Photography should be respectful</li>

              <li>✅ Come with curiosity and an open mind</li>

            </ul>

          </div>

          {/* Closing Section */}

          <div className="mt-10 text-center">

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

    </div>
  );
}