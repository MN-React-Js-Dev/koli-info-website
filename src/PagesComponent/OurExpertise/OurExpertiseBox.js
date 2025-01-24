// import Image from "next/image";

// const OurExpertiseBox = (props) => {
//   const { title, image } = props;

//   return (
//     <div className="w-full ms-auto">
//       <div className="relative z-10 h-[200px] rounded-sm bg-white px-8 py-10 shadow-three transition-all duration-300 ease-in-out transform hover:bg-[#4a6cf717] hover:translate-y-[-5px] hover:shadow-lg dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
//         <div className="flex items-center justify-between">
//           <h3 className="price mb-2 text-[32px] font-bold text-black dark:text-white">
//             <span className="amount">{title}</span>
//           </h3>
//           <div className="flex items-center">
//             <Image
//               src={image}
//               alt={`${title} icon`}
//               className="mb-4 mr-2 h-10 w-10"
//               width={40}
//               height={40}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurExpertiseBox;

//bootstrape box

import Image from "next/image";

const OurExpertiseBox = (props) => {
  const { title, image } = props;

  return (
    <div className="w-100 ms-auto">
      <div className="position-relative z-10 h-200px rounded-sm bg-white p-4 shadow-sm transition-all duration-300 ease-in-out transform hover:bg-light hover:translate-y-[-5px] hover:shadow-lg dark:bg-dark dark:shadow-none dark:hover:shadow-dark">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="mb-2 fs-4 fw-bold text-dark dark:text-white">
            <span>{title}</span>
          </h3>
          <div className="d-flex align-items-center">
            <Image
              src={image}
              alt={`${title} icon`}
              className="mb-4 me-2"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertiseBox;
