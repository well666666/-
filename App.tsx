import React from 'react';
import { Navbar } from './components/Navbar';
import { SectionHeading } from './components/SectionHeading';
import { Timeline } from './components/Timeline';
import { PROFILE, EXPERIENCE, EDUCATION, SKILLS, AUTOBIOGRAPHY_TEXT, CONDITIONS, CERTIFICATES } from './constants';
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Download, CheckCircle, Award, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  // Split the name for custom rendering: "王曜瑄" big, "Well" small and no parens
  const nameParts = PROFILE.name.split(' ');
  const zhName = nameParts[0] || PROFILE.name;
  const enName = nameParts[1] || '';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Profile Section */}
        <section id="profile" className="pt-20 pb-16 md:pt-32 md:pb-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Top Info Block (Avatar removed as requested) */}
            <div className="flex flex-col items-start gap-10">
              <div className="text-left w-full">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 flex items-baseline gap-4">
                  {zhName}
                  {enName && <span className="text-2xl md:text-3xl text-sky-700 font-semibold">{enName}</span>}
                </h1>
                <p className="text-xl md:text-2xl text-sky-800 font-medium mb-8 leading-relaxed max-w-3xl">
                  {PROFILE.title}
                </p>
                
                <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base text-gray-800 mb-8">
                  <div className="flex items-center gap-2 hover:text-sky-600 transition-colors">
                    <Mail size={18} className="text-sky-600" />
                    <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                  </div>
                  <div className="flex items-center gap-2 hover:text-sky-600 transition-colors">
                    <Phone size={18} className="text-sky-600" />
                    <span>{PROFILE.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-sky-600 transition-colors">
                    <MapPin size={18} className="text-sky-600" />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {PROFILE.linkedin && (
                    <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-sky-600 text-white rounded-md text-sm font-semibold hover:bg-sky-700 transition-all hover:shadow-lg shadow-sky-200">
                      <Linkedin size={18} /> LinkedIn
                    </a>
                  )}
                  {PROFILE.github && (
                    <a href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-white text-gray-900 border border-sky-200 rounded-md text-sm font-semibold hover:bg-sky-50 hover:border-sky-300 transition-all">
                      <Github size={18} className="text-sky-600" /> GitHub
                    </a>
                  )}
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-white text-gray-900 border border-sky-200 rounded-md text-sm font-semibold hover:border-sky-600 hover:text-sky-600 transition-all">
                    <Download size={18} /> 下載履歷 PDF
                  </button>
                </div>
              </div>
            </div>
            
            {/* Profile Summary Section */}
            <div className="mt-16 bg-sky-50/50 p-8 rounded-2xl border border-sky-100">
               <div className="flex flex-wrap gap-2 mb-6 justify-start">
                 {PROFILE.summaryTags.map((tag, i) => (
                   <span key={i} className="px-3 py-1 bg-sky-600 text-white text-sm font-medium rounded-full shadow-sm">
                     {tag}
                   </span>
                 ))}
               </div>
               <div className="grid grid-cols-1 gap-6">
                 {PROFILE.summaryItems.map((item, index) => (
                   <div key={index} className="flex gap-4 items-start">
                      <div className="mt-1 text-sky-600 shrink-0">
                        <Sparkles size={20} className="fill-sky-600 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Education embedded in Profile section */}
            <div className="mt-20">
              <h3 className="text-xl font-bold uppercase tracking-widest text-sky-400 mb-8 border-b border-sky-100 pb-4">學歷 (Education)</h3>
              <Timeline items={EDUCATION} />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-sky-50 px-6 border-t border-sky-100">
          <div className="max-w-5xl mx-auto">
            <SectionHeading title="工作經歷" />
            <Timeline items={EXPERIENCE} />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white px-6 border-t border-sky-100">
          <div className="max-w-5xl mx-auto">
            <SectionHeading title="專業技能" />
            <div className="grid grid-cols-1 gap-10">
              {SKILLS.map((skillGroup, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-sky-100 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100/50 transition-all duration-300 group">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-sky-100 group-hover:border-sky-100 flex items-center">
                    <CheckCircle className="mr-3 text-sky-600" size={24} />
                    {skillGroup.category}
                  </h3>
                  
                  {/* Detailed descriptions */}
                  <div className="space-y-4 mb-6">
                    {skillGroup.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                         <span className="font-bold text-gray-900 shrink-0 whitespace-nowrap">{item.title}：</span>
                         <span className="text-gray-800 leading-relaxed">{item.description}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hashtags row */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {skillGroup.tags.map((tag, idx) => (
                      <span key={idx} className="px-4 py-1.5 bg-sky-50 border border-sky-100 rounded-lg text-sm text-sky-700 font-medium hover:bg-sky-100 hover:border-sky-300 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Autobiography Section */}
        <section id="autobiography" className="py-20 bg-sky-50 px-6 border-t border-sky-100">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <SectionHeading title="自傳" className="text-center" />
            <div 
              className="prose prose-lg text-gray-800 mx-auto leading-loose text-justify"
              dangerouslySetInnerHTML={{ __html: AUTOBIOGRAPHY_TEXT }}
            >
            </div>
          </div>
        </section>

        {/* Job Conditions Section */}
        <section id="conditions" className="py-20 bg-white px-6 border-t border-sky-100">
           <div className="max-w-5xl mx-auto">
             <SectionHeading title="求職條件" />
             <div className="mb-8 -mt-8 text-sky-600 text-sm">隨時準備迎接新挑戰</div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {CONDITIONS.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg border border-sky-200 hover:border-sky-400 hover:shadow-md hover:shadow-sky-100 transition-all duration-300 group">
                     <p className="text-sky-600 text-xs uppercase tracking-wider font-semibold mb-2 transition-colors">{item.label}</p>
                     <p className="text-lg font-bold text-gray-900 whitespace-pre-line leading-relaxed">{item.value}</p>
                  </div>
                ))}
             </div>
           </div>
        </section>

        {/* Capabilities / Certificates Section */}
        <section id="capabilities" className="py-20 bg-sky-50 px-6 border-t border-sky-100">
          <div className="max-w-5xl mx-auto">
            <SectionHeading title="證照與其他專長" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {CERTIFICATES.map((cert, idx) => (
                 <div key={idx} className="flex items-center p-6 rounded-xl border border-sky-200 hover:shadow-md hover:border-sky-300 transition-all duration-300 bg-white group">
                    <div className="bg-sky-50 p-3 rounded-full shadow-sm border border-sky-100 mr-5 shrink-0 text-sky-600 group-hover:bg-sky-100 transition-colors">
                       <Award size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-sky-100 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-sky-700">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-sky-600 transition-colors">Privacy Policy</a>
             <a href={`mailto:${PROFILE.email}`} className="hover:text-sky-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;