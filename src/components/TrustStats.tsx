// import React from 'react';
// import { Layers, Users, Hammer, ClipboardList, Sliders, ShieldCheck, Truck } from 'lucide-react';
// import { motion } from 'motion/react';

// export const TrustStats: React.FC = () => {
//   const stats = [
//     {
//       icon: <Layers className="w-5 h-5 text-[#8F533C]" strokeWidth={1.5} />,
//       value: '20+',
//       label: 'Product Categories',
//     },
//     {
//       icon: <Users className="w-5 h-5 text-[#8F533C]" strokeWidth={1.5} />,
//       value: '100+',
//       label: 'Skilled Artisans',
//     },
//     {
//       icon: <Hammer className="w-5 h-5 text-[#8F533C]" strokeWidth={1.5} />,
//       value: 'Custom',
//       label: 'Manufacturing',
//     },
//     {
//       icon: <ClipboardList className="w-5 h-5 text-[#8F533C]" strokeWidth={1.5} />,
//       value: 'OEM &',
//       label: 'Private Label Solutions',
//     },
//     {
//       icon: <Sliders className="w-5 h-5 text-[#8F533C]" strokeWidth={1.5} />,
//       value: 'Low MOQ',
//       label: 'Flexible Volumes',
//     },
//     {
//       icon: <ShieldCheck className="w-5 h-5 text-[#8F533C]" strokeWidth={1.5} />,
//       value: 'Quality',
//       label: 'Assurance At Every Step',
//     },
//     {
//       icon: <Truck className="w-5 h-5 text-[#8F533C]" strokeWidth={1.5} />,
//       value: 'Global Shipping',
//       label: 'Worldwide Delivery',
//     },
//   ];

//   return (
//     <section className="bg-white border-y border-[#EBE4DC] py-10">
//       <div className="max-w-[1280px] mx-auto px-6">
//         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 items-start justify-items-center">
//           {stats.map((s, index) => (
//             <motion.div
//               key={s.label}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.3, delay: index * 0.04 }}
//               className="flex flex-col items-center text-center gap-2 max-w-[140px]"
//             >
//               <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EBE4DC]/60 flex items-center justify-center mb-1">
//                 {s.icon}
//               </div>
//               <div className="font-serif text-lg sm:text-xl font-bold text-[#2C2623] tracking-tight leading-none">
//                 {s.value}
//               </div>
//               <div className="font-sans text-[10px] sm:text-xs font-medium text-[#615751] uppercase tracking-wider leading-relaxed">
//                 {s.label}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



import React from 'react';
import { Layers, Users, Hammer, ClipboardList, Sliders, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';

// image import
import icon1 from "../assets/images/ico-a.svg";
import icon2 from "../assets/images/ico-b.svg";
import icon3 from "../assets/images/ico-c.svg";
import icon4 from "../assets/images/ico-d.svg";
import icon5 from "../assets/images/ico-e.svg";
import icon6 from "../assets/images/ico-f.svg";

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon:< img src={icon1} className=" w-full h-full object-contain mix-blend-multiply" />,
      value: '20+',
      label: 'Product Categories',
    },
    {
      icon: < img src={icon2} className=" w-full h-full object-contain mix-blend-multiply" />,
      value: '100+',
      label: 'Skilled Artisans',
    },
    {
      icon:< img src={icon3} className=" w-full h-full object-contain mix-blend-multiply" />,
      value: 'Custom',
      label: 'Manufacturing',
    },
    {
      icon: < img src={icon4} className=" w-full h-full object-contain mix-blend-multiply" />,
      value: 'OEM &',
      label: 'Private Label\nSolutions',
    },
    {
      icon: < img src={icon5} className=" w-full h-full object-contain mix-blend-multiply" />,
      value: 'Low MOQ',
      label: 'Flexible Volumes',
    },
    {
      icon: < img src={icon6} className=" w-full h-full object-contain mix-blend-multiply" />,
      value: 'Quality',
      label: 'Assurance At\nEvery Step',
    },
    {
      icon:< img src={icon1} className=" w-full h-full object-contain mix-blend-multiply" />,
      value: 'Global Shipping',
      label: 'Worldwide\nDelivery',
    },
  ];
return (
    <section className="bg-[#FAF8F5]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-white border border-[#EBE4DC] px-6 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-6 items-center justify-items-center">
          {stats.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="flex flex-row items-center gap-3 text-left w-full max-w-[160px]"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#EBE4DC] flex items-center justify-center">
                {s.icon}
              </div>

              <div className="flex flex-col justify-center min-w-0">
                <div className="font-sans text-sm sm:text-base font-bold text-[#2C2623] tracking-tight leading-tight">
                  {s.value}
                </div>
                <div className="font-sans text-[10px] sm:text-xs font-medium text-[#615751] tracking-normal leading-tight whitespace-pre-line">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};
