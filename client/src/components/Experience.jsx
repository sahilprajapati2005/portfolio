const Experience = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span className="w-2 h-8 bg-blue-600 rounded-sm"></span>
        Experience
      </h2>
      
      <div className="relative border-l-2 border-gray-200 ml-3 pl-8 py-2 space-y-10">
        {/* Experience Item 1 */}
        <div className="relative">
          {/* Dot on the timeline */}
          <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow-sm"></span>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
            <h3 className="text-xl font-bold text-gray-900">MERN Stack Intern</h3>
            <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
              Techmicra, Ahmedabad
            </span>
          </div>
          
          <ul className="list-disc list-outside ml-4 text-gray-700 space-y-2 mt-3">
            <li>Developed and optimized RESTful APIs using <strong>Node.js</strong> and <strong>Express</strong>.</li>
            <li>Built dynamic responsive frontend interfaces using <strong>React.js</strong>.</li>
            <li>Integrated backend services (Vercel) with frontend applications (Netlify).</li>
            <li>Collaborated on <strong>MongoDB</strong> database modeling and schema design.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;