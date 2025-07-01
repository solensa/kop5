import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen  relative overflow-hidden ">
      {/* Centered content container */}
      <div className="container mx-auto px-4 py-0 flex justify-center">
        <div className="flex max-w-[1024px] relative">
          {/* Flow line - bottom layer */}
          <div className="relative w-[150px] h-[1214px] flex-shrink-0 z-0">
            <Image
              src="/flow-line3.svg"
              alt="Flow line"
              width={150}
              height={1200}
              className="w-[150px] h-[1214px] object-contain"
              priority
              style={{ maxWidth: "150px", maxHeight: "1214px" }}
            />
          </div>

          {/* Guide images - middle layer */}
          <div className="absolute z-10 -top-5 right-[-200px]">
            <Image
              src="/pic1.png"
              alt="Colleague Guide"
              width={425}
              height={270}
              className="transform rotate-6"
            />
          </div>

          <div className="absolute z-10 bottom-[-190px] left-[-130px]">
            <Image
              src="/pic2.png"
              alt="Manager Guide"
              width={500}
              height={270}
              className="transform -rotate-12"
            />
          </div>

          {/* Next Steps content - top layer */}
          <div className="max-w-6xl z-20 relative pt-[90px] pl-2">
            <h1 className="text-white text-3xl font-bold mb-8">Next Steps</h1>

            {/* Column Headers */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <h2 className="text-white text-2xl font-semibold">Participants</h2>
              <h2 className="text-white text-2xl font-semibold">People Ops</h2>
            </div>

            {/* 2x4 Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Row 1 */}
              <div className="bg-white rounded-lg p-6 relative hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-300">
                <h2 className="font-semibold text-lg text-black">Enter talent data</h2>
                <ul className="text-sm my-2 text-black list-disc pl-5">
                  <li>
                    Update the talent data in SuccessFactors to represent a holistic view of
                    colleagues.​
                  </li>
                  <li>
                    Enter comments related to development needs, key person dependency, talent pool
                    nomination, and flight risk (where high)
                  </li>
                </ul>
                <Link
                  href="https://laingorourke-my.sharepoint.com/:b:/p/pmeiring/EedhYyGUei1GnoK6ulgxf_oBFnOW3jVZN4L0UBI9f7EW1w?e=lodHW3"
                  target="_blank"
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md text-sm mt-2"
                >
                  How to Access Sessions
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 relative hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-300">
                <h2 className="font-semibold text-lg text-black">
                  Support data entry (where needed)
                </h2>
                <p className="text-sm my-2 text-black">
                  Support participants to use holistic data, reduce bias, share briefing materials,
                  and navigate the system as needed
                </p>
              </div>

              {/* Row 2 */}
              <div className="bg-white rounded-lg p-6 hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-300">
                <h2 className="font-semibold text-lg text-black">Prep for meeting</h2>
                <p className="text-sm my-2 text-black">
                  <ul className="text-sm my-2 text-black list-disc pl-5">
                    <li>Participants prep for meetings based on the agenda.</li>
                    <li>Share with People Ops an overview before the meeting</li>
                  </ul>
                </p>
                <div className="mt-4 flex gap-4">
                  <Link
                    href="https://lorprod.workzonehr.cfapps.eu10.hana.ondemand.com/site#workzone-home&/groups/fPQkxGea8XlNv7aSFinMfZ/documents/RyHr2U3bG201OQnqhpOz0x/slide_viewer"
                    target="_blank"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md text-sm"
                  >
                    Meeting Agenda Template
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-300">
                <h2 className="font-semibold text-lg text-black">Schedule meeting</h2>
                <p className="text-sm my-2 text-black">
                  <ul className="text-sm my-2 text-black list-disc pl-5">
                    <li>People Ops organise meeting for all participants using agenda template.</li>
                    <li>
                      People Ops to help participants prepare insights for the meeting based on what
                      they saw, and what they&apos;d like support with
                    </li>
                  </ul>
                </p>
                <div className="mt-4">
                  <Link
                    href="https://lorprod.workzonehr.cfapps.eu10.hana.ondemand.com/site#workzone-home&/groups/fPQkxGea8XlNv7aSFinMfZ/documents/RyHr2U3bG201OQnqhpOz0x/slide_viewer"
                    target="_blank"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md text-sm"
                  >
                    Meeting Agenda Template
                  </Link>
                </div>
              </div>

              {/* Row 3 */}
              <div className="bg-white rounded-lg p-6 hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-300">
                <h2 className="font-semibold text-lg text-black">
                  Share during meeting and agree actions
                </h2>
                <ul className="text-sm my-2 text-black list-disc pl-5">
                  <li>
                    Work through the agenda bringing a view of your team, and what you&apos;d like
                    the group to know, provide input, or help shape.
                  </li>
                  <li>Discuss collective items if you notice any</li>
                  <li>Agree on actions and deadline</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-300">
                <h2 className="font-semibold text-lg text-black">Host meeting</h2>
                <p className="text-sm my-2 text-black">
                  <ul className="text-sm my-2 text-black list-disc pl-5">
                    <li>Open the session with a recap of the purpose of KOP</li>
                    <li>
                      Work through the agenda allowing all participants to contribute as needed
                    </li>
                    <li>Agree on actions and responsible persons.</li>
                  </ul>
                </p>
              </div>

              {/* Row 4 */}
              <div className="bg-white rounded-lg p-6 relative hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-300">
                <h2 className="font-semibold text-lg text-black">
                  Ideate and update on progress through ongoing leadership discussions
                </h2>
                <p className="text-sm my-2 text-black">
                  <ul className="text-sm my-2 text-black list-disc pl-5">
                    <li>
                      Consider ongoing talent actions in leadership discussions to help shape talent
                      agenda: future skills development, diversity & inclusion, succession planning,
                      resourcing, and talent development
                    </li>
                    <li>Prompt your team to complete their Talent Profile</li>
                  </ul>
                </p>
                <div className="mt-4">
                  <Link
                    href="https://performancemanager5.successfactors.eu/sf/liveprofile"
                    target="_blank"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md text-sm"
                  >
                    Update Profile
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 relative hover:shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-shadow duration-300">
                <h2 className="font-semibold text-lg text-black">
                  Support ongoing talent discussions and operationalising data
                </h2>
                <p className="text-sm my-2 text-black">
                  <ul className="text-sm my-2 text-black list-disc pl-5">
                    <li>
                      Bring actions and data to leadership discussions to help shape ongoing talent
                      agenda: future skills development, diversity & inclusion, succession planning,
                      resourcing, and talent development
                    </li>
                    <li>Continue to promote completion of Talent Profiles for colleagues</li>
                  </ul>
                </p>
                <div className="mt-4">
                  <Link
                    href="https://performancemanager5.successfactors.eu/sf/liveprofile"
                    target="_blank"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md text-sm"
                  >
                    Update Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
