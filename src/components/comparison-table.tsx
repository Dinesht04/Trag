import { Check, X } from "lucide-react"
import { Stars as Stairs } from "lucide-react"

export function ComparisonTable() {
  const features = [
    {
      feature: "Cost",
      trag: { icon: "check", text: "$", color: "text-green-600" },
      fullTime: { icon: "x", text: "$$$$ (High Overhead)", color: "text-red-500" },
      agencies: { icon: "x", text: "$$", color: "text-amber-600" },
    },
    {
      feature: "Senior-Level Designer",
      trag: { icon: "check", text: "Guaranteed", color: "text-green-600" },
      fullTime: { icon: "x", text: "Hopefully", color: "text-amber-600" },
      agencies: { icon: "x", text: "Maybe (They could be lying)", color: "text-amber-600" },
    },
    {
      feature: "Turnaround Time",
      trag: { icon: "check", text: "48 hours for most projects", color: "text-green-600" },
      fullTime: { icon: "x", text: "Can take weeks due to other tasks", color: "text-red-500" },
      agencies: { icon: "x", text: "Weeks, depending on workload", color: "text-red-500" },
    },
    {
      feature: "Start Time",
      trag: { icon: "check", text: "Today itself", color: "text-green-600" },
      fullTime: { icon: "x", text: "Weeks to onboard and train", color: "text-red-500" },
      agencies: { icon: "x", text: "Days to set up agreements", color: "text-red-500" },
    },
    {
      feature: "Unlimited Revisions",
      trag: { icon: "check", text: "Yes, we keep working until it's perfect", color: "text-green-600" },
      fullTime: { icon: "x", text: "Limited, with extra time constraints", color: "text-red-500" },
      agencies: { icon: "x", text: "Limited revisions per project", color: "text-red-500" },
    },
    {
      feature: "Client Portal",
      trag: { icon: "check", text: "Yes, track progress easily", color: "text-green-600" },
      fullTime: { icon: "x", text: "Internal systems may vary", color: "text-amber-500" },
      agencies: { icon: "x", text: "No consistent system", color: "text-red-500" },
    },
    {
      feature: "Scalability",
      trag: { icon: "check", text: "Scale up or down with ease", color: "text-green-600" },
      fullTime: { icon: "check", text: "Possible", color: "text-green-600" },
      agencies: { icon: "x", text: "Limited by freelancer's capacity", color: "text-red-500" },
    },
    {
      feature: "Flexibility",
      trag: { icon: "check", text: "Pause or adjust your subscription anytime", color: "text-green-600" },
      fullTime: { icon: "x", text: "Locked into salaries and benefits", color: "text-red-500" },
      agencies: { icon: "x", text: "Inflexible, project-based", color: "text-red-500" },
    },
  ]

  return (
    <div className="max-w-4xl mx-auto ">
    <div className="bg-gray-100 pb-8 shadow-xl  overflow-hidden rounded-2xl">
      {/* Header */}
      <div className="text-center   py-8 px-6 mb-8 ">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 ">Why choose us?</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Check out what Trag offers Vs employees and other agencies. It's quite a lot!
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto  px-8">
        <table className="w-full bg-white">
          {/* Column Headers */}
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-4 px-6 min-w-fit min-w-fit  w-[210px] font-medium text-gray-500"></th>
              <th className="text-center py-4 px-6">
                <div className="flex justify-center space-x-2 items-center space-y-2">
                  <div className="w-8 h-8 bg-gray-100  flex items-center justify-center">
                    <Stairs className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="font-bold text-lg text-gray-900">Trag</span>
                </div>
              </th>
              <th className="text-center py-4 px-6">
                <span className="font-semibold text-gray-900">full-time Designer</span>
              </th>
              <th className="text-center rouned-tr-lg py-4 px-6">
                <span className="font-semibold text-gray-900">Other agencies</span>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {features.map((row, index) => (
              <tr key={index} className="border-b h-[50px] border-gray-200 hover:bg-gray-50/50 transition-colors">
                <td className="w-fit bg-gray-100 ">
                    <span className="pl-4  text-gray-900  ">
                    {row.feature}
                    </span>
                </td>
                <td className="py-4 px-6 text-left">
                  <div className="flex items-center  space-x-2">
                    {row.trag.icon === "check" ? (
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    ) : (

                      <X className={`w-4 h-4 text-red-500 flex-shrink-0`} />
                    )}
                    <span className={`text-sm`}>{row.trag.text}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-left">
                  <div className="flex items-center  space-x-2">
                    {row.fullTime.icon === "check" ? (
                      <Check className={`w-4 h-4 ${row.fullTime.color} flex-shrink-0`} />
                    ) : (
                      <X className={`w-4 h-4 ${row.fullTime.color} flex-shrink-0`} />
                    )}
                    <span className={`text-sm `}>{row.fullTime.text}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-left">
                  <div className="flex items-center  space-x-2">
                    {row.agencies.icon === "check" ? (
                      <Check className={`w-4 h-4 ${row.agencies.color} flex-shrink-0`} />
                    ) : (
                      <X className={`w-4 h-4 ${row.agencies.color} flex-shrink-0`} />
                    )}
                    <span className={`text-sm `}>{row.agencies.text}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}
