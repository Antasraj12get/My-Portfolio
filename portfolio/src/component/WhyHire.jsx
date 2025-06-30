import React from 'react';
import { Link } from 'react-router-dom';

const WhyHire = () => {
  return (
    <section  className="font-inter px-4 py-16 w-full max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 font-playfair">
        Why Should You Hire Me?
      </h2>

      <p className="text-lg md:text-xl text-center text-gray-600 max-w-4xl mx-auto mb-14 font-inter leading-relaxed">
        I combine hands-on project experience, strong logical foundations, and a consistent learning mindset to bring value to any team. Here’s exactly why I’d be a great asset:
      </p>

      <div className="space-y-12">
        {/* 1. Quick Learner */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-purple-100 flex items-center justify-center text-3xl md:text-4xl shrink-0">
            🚀
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-playfair">Quick Learner</h3>
            <p className="text-base md:text-lg text-gray-600 mt-1 font-inter leading-relaxed">
              I pick up new tools and frameworks rapidly. From backend systems like Express to cloud deployment and CI/CD basics, I adapt to evolving stacks quickly and confidently. Being self-taught, I rely on consistent practice, real implementation, and structured learning.
            </p>
          </div>
        </div>

        {/* 2. Logic Building */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-100 flex items-center justify-center text-3xl md:text-4xl shrink-0">
            🧠
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-playfair">Strong Logic Building</h3>
            <p className="text-base md:text-lg text-gray-600 mt-1 font-inter leading-relaxed">
              I'm actively solving problems in my <span className="text-purple-700 font-semibold">365-Day DSA Challenge</span>. With 160+ days completed, I’ve built strong foundations in recursion, graphs, arrays, trees, and more—boosting my ability to write clean, optimized code.
            </p>
          </div>
        </div>

        {/* 3. Multitalented */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-pink-100 flex items-center justify-center text-3xl md:text-4xl shrink-0">
            ⚙️
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-playfair">Multitalented Developer</h3>
            <p className="text-base md:text-lg text-gray-600 mt-1 font-inter leading-relaxed">
              I work across the full stack (React + Node.js + MongoDB), understand deployment workflows, and have started exploring DevOps and system design. My versatility means I can fill multiple roles, depending on the project’s need.
            </p>
          </div>
        </div>

        {/* 4. Internship Experience */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-100 flex items-center justify-center text-3xl md:text-4xl shrink-0">
            💼
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-playfair">Internship Experience</h3>
            <p className="text-base md:text-lg text-gray-600 mt-1 font-inter leading-relaxed">
              During my internship, I worked on real business features, participated in sprint planning, and collaborated with teammates under strict deadlines. I learned how real teams manage code quality, delivery, and async communication.
            </p>
          </div>
        </div>

        {/* 5. Hardworking */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl md:text-4xl shrink-0">
            💪
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-playfair">Hardworking & Consistent</h3>
            <p className="text-base md:text-lg text-gray-600 mt-1 font-inter leading-relaxed">
              I’ve solved 130+ days of aptitude problems and 160+ logic questions consistently. I never rely on motivation—my strength is discipline. You’ll always find me moving forward, even when challenges arise.
            </p>
          </div>
        </div>

        {/* 6. Communication */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-100 flex items-center justify-center text-3xl md:text-4xl shrink-0">
            🌐
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-playfair">Great Communicator</h3>
            <p className="text-base md:text-lg text-gray-600 mt-1 font-inter leading-relaxed">
              I share insights weekly on LinkedIn, engage with mentors, and thrive in team environments. Whether it’s async chats, pair programming, or documenting decisions — I ensure communication is never a blocker.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHire;
