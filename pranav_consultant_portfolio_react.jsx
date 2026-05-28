export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="px-8 md:px-20 py-24 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">
              Senior Implementation Consultant
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-blue-600">Pranav Kumar</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Results-driven consultant with experience in enterprise implementations,
              API integrations, stakeholder management, and client success.
              Passionate about solving complex business challenges through scalable
              technology solutions.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white shadow-lg hover:scale-105 transition-transform">
                Download Resume
              </button>

              <button className="px-6 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 transition">
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-[2rem] bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl flex items-center justify-center text-white text-6xl font-bold">
              PK
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-8 md:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a Senior Implementation Consultant with 6+ years of experience
              delivering enterprise technology solutions and leading implementation
              projects for global clients. My expertise spans API integrations,
              Java, SQL, Unix/Linux, stakeholder management, and enterprise
              application implementations.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mt-6">
              Currently at SHL, I work closely with clients and cross-functional
              teams to ensure seamless implementations, process optimization,
              and successful delivery outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 md:px-20 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>

          <div className="grid gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold">Senior Implementation Consultant</h3>
                <span className="text-blue-600 font-medium">SHL</span>
              </div>

              <ul className="list-disc pl-6 text-gray-600 space-y-3">
                <li>Leading enterprise implementation and integration projects.</li>
                <li>Managing API testing and client onboarding activities.</li>
                <li>Collaborating with stakeholders to improve delivery processes.</li>
                <li>Driving successful project execution and customer satisfaction.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold">Technical Consultant</h3>
                <span className="text-blue-600 font-medium">Temenos</span>
              </div>

              <ul className="list-disc pl-6 text-gray-600 space-y-3">
                <li>Delivered large-scale upgrade and implementation projects.</li>
                <li>Worked on enterprise banking solutions and integrations.</li>
                <li>Collaborated with international clients and technical teams.</li>
                <li>Improved project delivery through automation initiatives.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Java',
              'SQL',
              'API Integration',
              'Implementation Consulting',
              'Stakeholder Management',
              'Unix/Linux',
              'Microservices',
              'Project Delivery',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white shadow-md border border-gray-100 rounded-2xl p-6 text-center font-medium hover:shadow-xl transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-8 md:px-20 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Certifications</h2>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <ul className="space-y-4 text-lg text-gray-700">
              <li>• Agile Project Planning Certification</li>
              <li>• Enterprise Implementation & Delivery Experience</li>
              <li>• API Testing & Integration Expertise</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-8 md:px-20 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Open to consulting opportunities, collaborations, and discussions around
            enterprise implementations, integrations, and technology-driven solutions.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white shadow-lg hover:scale-105 transition-transform">
              LinkedIn
            </button>

            <button className="px-6 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 transition">
              Email Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
