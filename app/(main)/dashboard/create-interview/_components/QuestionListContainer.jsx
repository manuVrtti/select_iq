// import React from 'react'

// function QuestionListContainer() {
//   return (
//     <div>
//         <h2 className="font-bold text-lg mb-5">
//               Generated Interview Questions :
//             </h2>

//             <div className="p-5 border border-gray-300 bg-indigo-50 rounded-2xl">
//               {questions.map((item, index) => (
//                 <div
//                   key={index}
//                   className="p-3 border rounded-lg bg-white mb-3"
//                 >
//                   <h2 className="font-medium">
//                     Q{index + 1}. {item.question}
//                   </h2>
//                   <h2 className="text-sm text-indigo-600 opacity-70">
//                     {item.type}
//                   </h2>
//                 </div>
//               ))}
//             </div>
//     </div>
//   )
// }

// export default QuestionListContainer

// ------Final-------

import React from "react";

function QuestionListContainer({ questions }) {
  return (
    <div className="p-5 border border-gray-300 bg-indigo-50 rounded-2xl">
      {questions.map((item, index) => (
        <div
          key={index}
          className="p-3 border rounded-lg bg-white mb-3"
        >
          <h2 className="font-medium">
            Q{index + 1}. {item.question}
          </h2>
          <h2 className="text-sm text-indigo-600 opacity-70">
            {item.type}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default QuestionListContainer;
