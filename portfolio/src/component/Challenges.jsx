import React from "react";
const Challenges = () => {
  return (
    <div
      id="challenges"
      className="flex flex-wrap justify-center gap-6 px-4 py-8"
    >
      {/* 160 Days GFG Challenge */}
      <div
        className="flex flex-col justify-start items-start rounded-2xl bg-[#f9f9f9] shadow-sm px-5 py-6 w-full max-w-[360px] transition-all duration-300 hover:border-2 hover:border-[#1DA1F2] hover:-translate-y-1"
      >
        <h2 className="font-semibold text-[1.1rem] mb-4 px-4 py-2 rounded-xl text-[#333333] leading-snug">
          160 days gfg Challenge
        </h2>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            Active
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            80 days Left
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            geeksforgeeks
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap min-w-[80px]">
            76 days
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            All DSA Topics
          </span>
        </div>
      </div>

      {/* 365 DSA Challenge */}
      <div
        className="flex flex-col justify-start items-start rounded-2xl bg-[#f9f9f9] shadow-sm px-5 py-6 w-full max-w-[360px] transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:-translate-y-1"
      >
        <h2 className="font-semibold text-[1.1rem] mb-4 px-4 py-2 rounded-xl text-[#333333] leading-snug">
          365 days DSA challenge
        </h2>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
           165 ✓
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            200 left
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            50 badge ✓
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            Basic 100
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            Easy 120Q
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            Medium 80Q
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            Hard 65Q
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            gfg
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            leetcode
          </span>
        </div>
      </div>

      {/* 130 Days Aptitude Challenge */}
      <div
        className="group flex flex-col justify-start items-start rounded-2xl bg-[#f9f9f9] shadow-sm px-5 py-6 w-full max-w-[360px] transition-all duration-300 hover:-translate-y-1"
      >
        <h2 className="font-semibold text-[1.1rem] mb-4 px-4 py-2 rounded-xl text-[#333333] leading-snug group-hover:text-[#ff6600] group-hover:underline">
          130 days Aptitude
        </h2>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] min-w-[80px] whitespace-nowrap">
            Active •
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] min-w-[80px] whitespace-nowrap">
            80 days Left
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] min-w-[80px] whitespace-nowrap">
            Min 10 ques/day
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            DSA
          </span>
          <span className="text-sm font-medium px-2 py-1 rounded-md border border-[#f1f0f0] bg-[#fbf9f9] text-[#444444] whitespace-nowrap">
            Challenge
          </span>
        </div>
      </div>
    </div>
  );
};

export default Challenges;





