// "use client";
// import axios from "axios";
// import { Loader2Icon } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { toast } from "sonner";

// function QuestionList({ formData }) {
//   const [loading, setLoading] = useState(true);
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     if (formData) {
//       GenerateQuestionList();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData]);

//   const GenerateQuestionList = async () => {
//     setLoading(true);
//     try {
//       const { data } = await axios.post("/api/ai-model", { ...formData });
//       console.log("API result:", data);
//       if (data?.interviewQuestions?.length) {
//         setQuestions(data.interviewQuestions);
//       } else {
//         toast("Model returned no questions. Check server logs.");
//       }
//     } catch (e) {
//       console.error(e);
//       toast("Server Error, Try Again..! 😕");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-5 bg-indigo-50 rounded-xl border border-gray-100 flex gap-5 items-center">
//         <Loader2Icon className="animate-spin" />
//         <div>
//           <h2>Generating Interview Questions</h2>
//           <p>Our AI is crafting personalized questions based on your Job Position.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-4 space-y-3">
//       {questions.map((q, i) => (
//         <div key={i} className="p-4 rounded-lg border">
//           <div className="text-sm opacity-70">{q.type}</div>
//           <div className="font-medium">{q.question}</div>
//         </div>
//       ))}
//       {!questions.length && (
//         <div className="text-sm opacity-70">No questions generated.</div>
//       )}
//     </div>
//   );
// }

// export default QuestionList;


// ------------------------------------------ 01

// "use client";
// import axios from "axios";
// import { Loader2Icon } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { toast } from "sonner";

// function QuestionList({ formData }) {
//   const [loading, setLoading] = useState(false); // start as false
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     if (formData) {
//       GenerateQuestionList();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData]);

//   const GenerateQuestionList = async () => {
//     setLoading(true);
//     try {
//       const { data } = await axios.post("/api/ai-model", { ...formData });
//       console.log("API result:", data);

//       if (data?.error) {
//         toast(`Error: ${data.error}`);
//         setQuestions([]);
//       } else if (data?.interviewQuestions?.length) {
//         setQuestions(data.interviewQuestions);
//       } else {
//         toast("Model returned no questions. Check server logs.");
//         setQuestions([]);
//       }
//     } catch (e) {
//       console.error(e);
//       toast("Server Error, Try Again..! 😕");
//       setQuestions([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-5 bg-indigo-50 rounded-xl border border-gray-100 flex gap-5 items-center">
//         <Loader2Icon className="animate-spin" />
//         <div>
//           <h2>Generating Interview Questions</h2>
//           <p>Our AI is crafting personalized questions based on your Job Position.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-4 space-y-3">
//       {questions.map((q, i) => (
//         <div key={i} className="p-4 rounded-lg border hover:shadow-sm transition">
//           <div className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">
//             {q.type || "General"}
//           </div>
//           <div className="font-medium mt-1">Q{i + 1}. {q.question}</div>
//         </div>
//       ))}

//       {!questions.length && (
//         <div className="text-sm opacity-70">No questions generated.</div>
//       )}
//     </div>
//   );
// }

// export default QuestionList;

// ----------------------------------  02

// "use client";
// import axios from "axios";
// import { Loader2Icon } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { toast } from "sonner";

// function QuestionList({ formData }) {
//   const [loading, setLoading] = useState(true);
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     if (formData && Object.keys(formData).length > 0) {
//       GenerateQuestionList();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData]);

//   const GenerateQuestionList = async () => {
//     setLoading(true);
//     try {
//       console.log("📤 Sending to API:", formData);
//       const { data } = await axios.post("/api/ai-model", { ...formData });
//       console.log("✅ API result:", data);

//       if (data?.interviewQuestions?.length) {
//         setQuestions(data.interviewQuestions);
//       } else {
//         toast("Model returned no questions. Check server logs.");
//       }
//     } catch (e) {
//       console.error("❌ API error:", e);
//       toast("Server Error, Try Again..! 😕");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-5 bg-indigo-50 rounded-xl border border-gray-100 flex gap-5 items-center">
//         <Loader2Icon className="animate-spin" />
//         <div>
//           <h2>Generating Interview Questions</h2>
//           <p>Our AI is crafting personalized questions based on your Job Position.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-4 space-y-3">
//       {questions.map((q, i) => (
//         <div key={i} className="p-4 rounded-lg border">
//           <div className="text-sm opacity-70">{q.type}</div>
//           <div className="font-medium">
//             Q{i + 1}. {q.question}
//           </div>
//         </div>
//       ))}
//       {!questions.length && (
//         <div className="text-sm opacity-70">No questions generated.</div>
//       )}
//     </div>
//   );
// }

// export default QuestionList;


// --------TESTING-----------

// QuestionList.jsx (only the changed function shown)
// 

// ----------- 🟡 FINAL CODE (AFTER DEBUGG) 🔴 ---------

// "use client";
// import axios from "axios";
// import { Loader2Icon } from "lucide-react";
// import React, { useEffect, useRef, useState } from "react";
// import { toast } from "sonner";

// function QuestionList({ formData }) {
//   const [loading, setLoading] = useState(true);
//   const [questions, setQuestions] = useState([]);
//   const calledRef = useRef(false); // prevent duplicate API calls in dev

//   useEffect(() => {
//     if (formData && Object.keys(formData).length > 0) {
//       if (calledRef.current) return;
//       calledRef.current = true;
//       GenerateQuestionList();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData]);

//   const GenerateQuestionList = async () => {
//     setLoading(true);
//     try {
//       console.log("📤 Sending to API (frontend):", formData);

//       const { data } = await axios.post("/api/ai-model", { ...formData });

//       console.log("✅ API result (frontend):", data);

//       if (data?.interviewQuestions?.length) {
//         setQuestions(data.interviewQuestions);
//       } else {
//         toast("Model returned no questions.");
//         setQuestions([]); // keep empty
//       }
//     } catch (e) {
//       console.error("❌ API error (frontend):", e);
//       toast("Server error. Try again later.");
//       setQuestions([]); // keep empty
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-5 bg-indigo-50 rounded-xl border border-gray-100 flex gap-5 items-center">
//         <Loader2Icon className="animate-spin" />
//         <div>
//           <h2>Generating Interview Questions</h2>
//           <p>Our AI is crafting personalized questions based on your Job Position.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-4 space-y-3">
//       {questions.map((q, i) => (
//         <div key={i} className="p-4 rounded-lg border">
//           <div className="text-sm opacity-70">{q.type}</div>
//           <div className="font-medium">Q{i + 1}. {q.question}</div>
//         </div>
//       ))}
//       {!questions.length && (
//         <div className="text-sm opacity-70">No questions generated.</div>
//       )}
//     </div>
//   );
// }

// export default QuestionList;




// --------- 🟡 FINAL CODE (AFTER DEBUGG)-001 🔴 ---------
"use client";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function QuestionList({ formData }) {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (formData && Object.keys(formData).length > 0) {
      GenerateQuestionList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const GenerateQuestionList = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/ai-model", { ...formData });
      console.log("✅ API result (frontend):", data);

      if (data?.interviewQuestions?.length) {
        // filter out empties
        const cleanQuestions = data.interviewQuestions.filter(
          (q) => q.question && q.question.trim() !== ""
        );
        setQuestions(cleanQuestions);
      } else {
        toast("⚠️ Model returned no questions.");
        setQuestions([]);
      }
    } catch (e) {
      console.error("❌ API error:", e);
      toast("Server Error, Try Again..! 😕");
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-5 bg-indigo-50 rounded-xl border border-gray-100 flex gap-5 items-center">
        <Loader2Icon className="animate-spin" />
        <div>
          <h2>Generating Interview Questions</h2>
          <p>Our AI is crafting personalized questions based on your Job Position.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-3 ">
      {questions.length > 0 ? (
        questions.map((q, i) => (
          <div key={i} className="p-4 rounded-lg border bg-white ">
            <div className="font-medium">
              Q{i + 1}. {q.question}
            </div>
            <div className="text-sm opacity-70 text-indigo-600 ">{q.type}</div>
          </div>
        ))
      ) : (
        <div className="text-sm opacity-70">No questions generated.</div>
      )}
    </div>
  );
}

export default QuestionList;


// ------------🟡FINAL CODE  007 (AFTER DEBUGG)🟠---------


// "use client";
// import axios from "axios";
// import { Loader2Icon } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { toast } from "sonner";

// function QuestionList({ formData }) {
//   const [loading, setLoading] = useState(true);
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     if (formData && Object.keys(formData).length > 0) {
//       GenerateQuestionList();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [formData]);

//   const GenerateQuestionList = async () => {
//     setLoading(true);
//     try {
//       console.log("📤 Sending to API:", formData);
//       const { data } = await axios.post("/api/ai-model", { ...formData });
//       console.log("✅ API result:", data);

//       if (data?.interviewQuestions?.length) {
//         // Filter out empty / useless entries
//         const cleanQuestions = data.interviewQuestions.filter(
//           (q) => q?.question && q.question.trim() !== ""
//         );
//         setQuestions(cleanQuestions);
//       } else {
//         toast("⚠️ Model returned no questions.");
//         setQuestions([]);
//       }
//     } catch (e) {
//       console.error("❌ API error:", e);
//       toast("Server Error, Try Again..! 😕");
//       setQuestions([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-5 bg-indigo-50 rounded-xl border border-gray-100 flex gap-5 items-center">
//         <Loader2Icon className="animate-spin" />
//         <div>
//           <h2>Generating Interview Questions</h2>
//           <p>Our AI is crafting personalized questions based on your Job Position.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-4 space-y-3">
//       {questions.length > 0 ? (
//         questions.map((q, i) => (
//           <div key={i} className="p-4 rounded-lg border bg-white">
//             <p className="font-medium">Q{i + 1}. {q.question}</p>
//             <p className="text-sm text-gray-500 italic">({q.type})</p>
//           </div>
//         ))
//       ) : (
//         <div className="text-sm opacity-70">No questions generated.</div>
//       )}
//     </div>
//   );
// }

// export default QuestionList;
