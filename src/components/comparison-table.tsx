import { Check, X } from 'lucide-react';
import Image from 'next/image';


export function ComparisonTable() {
  const features = [
    {
      feature: 'Cost',
      trag: { icon: 'check', text: '$', color: 'text-green-600' },
      fullTime: {
        icon: 'x',
        text: '$$$$ (Cost of two full-time hires)',
        color: 'text-red-500',
      },
      agencies: { icon: 'x', text: '$$$ (High retainers & fees)', color: 'text-amber-600' },
    },
    {
      feature: 'Senior-Level Expertise',
      trag: { icon: 'check', text: 'Unified Design & Dev Duo', color: 'text-green-600' },
      fullTime: { icon: 'x', text: 'Requires two separate hires', color: 'text-amber-600' },
      agencies: {
        icon: 'x',
        text: 'Often passed to junior members',
        color: 'text-amber-600',
      },
    },
    {
      feature: 'Turnaround Time',
      trag: {
        icon: 'check',
        text: '48 hours for most tasks',
        color: 'text-green-600',
      },
      fullTime: {
        icon: 'x',
        text: 'Slowed by internal meetings',
        color: 'text-red-500',
      },
      agencies: {
        icon: 'x',
        text: 'Weeks, due to multiple clients',
        color: 'text-red-500',
      },
    },
    {
      feature: 'Start Time',
      trag: { icon: 'check', text: 'Instantly', color: 'text-green-600' },
      fullTime: {
        icon: 'x',
        text: 'Months to hire & onboard',
        color: 'text-red-500',
      },
      agencies: {
        icon: 'x',
        text: 'Weeks for proposals',
        color: 'text-red-500',
      },
    },
    {
      feature: 'Unlimited Iterations',
      trag: {
        icon: 'check',
        text: "We refine until you're 100% happy",
        color: 'text-green-600',
      },
      fullTime: {
        icon: 'x',
        text: 'Often discouraged by deadlines',
        color: 'text-red-500',
      },
      agencies: {
        icon: 'x',
        text: 'Usually capped or costs extra',
        color: 'text-red-500',
      },
    },
    {
      feature: 'Communication & Focus',
      trag: {
        icon: 'check',
        text: 'Direct access, no project managers',
        color: 'text-green-600',
      },
      fullTime: {
        icon: 'x',
        text: 'Divided attention across tasks',
        color: 'text-amber-500',
      },
      agencies: {
        icon: 'x',
        text: 'Filtered through account managers',
        color: 'text-red-500',
      },
    },
    {
      feature: 'Scalability',
      trag: {
        icon: 'check',
        text: 'Scale up or down with ease',
        color: 'text-green-600',
      },
      fullTime: { icon: 'x', text: 'Slow and very expensive', color: 'text-red-500' },
      agencies: {
        icon: 'x',
        text: 'Rigid contracts, slow to adapt',
        color: 'text-red-500',
      },
    },
    {
      feature: 'Flexibility',
      trag: {
        icon: 'check',
        text: 'Pause or cancel your subscription anytime',
        color: 'text-green-600',
      },
      fullTime: {
        icon: 'x',
        text: 'Locked into salaries and benefits',
        color: 'text-red-500',
      },
      agencies: {
        icon: 'x',
        text: 'Locked into long-term contracts',
        color: 'text-red-500',
      },
    },
  ];

  return (
    <div className="max-w-4xl mx-auto ">
      <div className=" pb-8   overflow-hidden rounded-2xl">
        {/* Header */}
        <div className="text-center   py-8 px-6 mb-8 ">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 ">
            Why choose us?
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Check out what Trag offers Vs employees and other agencies. It's
            quite a lot!
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto  px-8">
          <table className="w-full ">
            {/* Column Headers */}
            <thead>
              <tr className="bg-transparent">
                <th className="text-left py-4 px-6 min-w-fit min-w-fit  w-[210px] font-medium text-gray-500"></th>
                <th className="text-center py-4 px-6">
                  <div className="flex justify-center space-x-2 items-center space-y-2">
                    <div className="w-8 h-8 bg-gray-100  flex items-center justify-center">
                      <Image 
                        src={'trag.svg'}
                        height={40}
                        width={300}
                        alt='trag-logo'
                      />
                    </div>
                    <span className="font-bold text-lg text-gray-900">
                      Trag
                    </span>
                  </div>
                </th>
                <th className="text-center py-4 px-6">
                  <span className="font-semibold text-gray-900">
                    full-time Designer
                  </span>
                </th>
                <th className="text-center rouned-tr-lg py-4 px-6">
                  <span className="font-semibold text-gray-900">
                    Other agencies
                  </span>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className='bg-white'>
              {features.map((row, index) => (
                <tr
                  key={index}
                  className="border-b h-[50px] border-gray-200 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="w-fit bg-gray-100 ">
                    <span className="pl-4  text-gray-900  ">{row.feature}</span>
                  </td>
                  <td className="py-4 px-6 text-left">
                    <div className="flex items-center  space-x-2">
                      {row.trag.icon === 'check' ? (
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className={`w-4 h-4 text-red-500 flex-shrink-0`} />
                      )}
                      <span className={`text-sm`}>{row.trag.text}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-left">
                    <div className="flex items-center  space-x-2">
                      {row.fullTime.icon === 'check' ? (
                        <Check
                          className={`w-4 h-4 ${row.fullTime.color} flex-shrink-0`}
                        />
                      ) : (
                        <X
                          className={`w-4 h-4 ${row.fullTime.color} flex-shrink-0`}
                        />
                      )}
                      <span className={`text-sm `}>{row.fullTime.text}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-left">
                    <div className="flex items-center  space-x-2">
                      {row.agencies.icon === 'check' ? (
                        <Check
                          className={`w-4 h-4 ${row.agencies.color} flex-shrink-0`}
                        />
                      ) : (
                        <X
                          className={`w-4 h-4 ${row.agencies.color} flex-shrink-0`}
                        />
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
  );
}
