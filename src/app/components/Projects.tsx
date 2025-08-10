// components/Projects.tsx
import Image from 'next/image';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectsCardData } from '@/lib/data';

interface ProjectsProps {
  projects?: typeof ProjectsCardData; // optional, defaults to ProjectsCardData
}

const Projects: React.FC<ProjectsProps> = ({ projects = ProjectsCardData }) => {
  return (
    <div className="container mx-auto mb-8">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="block text-lg font-bold mb-5 mt-20 text-blue-500 uppercase tracking-widest">
          Recent Work
        </span>
        <h2 className="text-3xl font-bold mb-4">
          Featured <span className="text-indigo-600 border-b-4 border-gray-400">Projects</span>
        </h2>
        <p className="mt-2 font-medium text-lg text-gray-500 max-w-xl mx-auto">
          Here are some of my recent projects that showcase my skills and expertise in creating innovative digital solutions.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-8">
        <ul className="flex flex-wrap gap-3 ">
          {['All', 'Web Design', 'Mobile Apps', 'UI/UX Design', 'Branding'].map((label, index) => (
            <li key={index}>
              <button
                className={`px-4 py-2 rounded-md filter-btn cursor-pointer hover:bg-gary-900 ${
                  index === 0 ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'
                }`}
                data-filter={label.toLowerCase().replace(/\s+/g, '')}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[20px] p-5 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] transition-all relative transform group"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <Image
                height={300}
                width={300}
                src={item.image}
                loading="lazy"
                alt={item.title}
                className="w-full object-cover transition-transform duration-500 md:group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 hidden md:flex items-center justify-center bg-black/40 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-2xl hover:scale-110 transition-transform hover:bg-blue-900 hover:text-white bg-white p-2 rounded-full"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={item.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-2xl hover:scale-110 transition-transform bg-white p-2 rounded-full hover:bg-blue-900 hover:text-white"
                >
                  <BsGithub />
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="mt-4">
              <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-2xl font-semibold mb-2">{item.title}</h1>
              <br />
              <p className="text-lg text-gray-400 leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: item.description }} />
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="text-center mt-10">
        <a
          href=""
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
