import Image from 'next/image';
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Next.js', icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
    { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'Express', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg' },
    { name: 'NodeJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'React Native', icon: 'https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
    { name: 'Redux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' },
    { name: 'Sass', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg' },
    { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'React', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
    { name: 'PostgreSQL', icon: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg' },
    { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-5">
        My <span className="text-blue-500 border-b-4 border-gray-500">Skills</span>
      </h1>
      <p className='font-medium text-2xl text-gray-500 text-center mb-8'>Technologies & tools I work with</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="px-12 py-4 lg:p-4 bg-background/40 rounded-lg flex flex-col items-center transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-md"
          >
            <Image
              width={100}
              height={100}
              src={skill.icon} 
              alt={skill.name} 
              className="w-12 h-12 object-contain mb-2"
            />
            <h4 className="text-md font-medium text-center">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;