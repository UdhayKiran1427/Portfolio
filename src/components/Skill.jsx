export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      tech: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      ]
    },
    {
      title: "Backend",
      tech: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      ]
    },
    {
      title: "Database & Tools",
      tech: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      ]
    }
  ];

  return (
    <section className=" text-white flex flex-col justify-center items-center" style={{padding:"29px 60px"}}>
      {/* Title */}
      <h2 className="text-4xl font-semibold text-center
      text-white/60 tracking-wide" style={{margin:"30px 0 80px 0"}}>
        Skills & Technologies
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {skills.map((category, i) => (
          <div key={i}
            className="group p-6 rounded-xl bg-white/10 backdrop-blur-lg 
            border border-white/10 hover:scale-105 
            hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] 
            transition duration-300"
          >

            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-6 text-center">
              {category.title}
            </h3>

            {/* Tech Icons */}
            <div className="flex flex-wrap justify-center gap-5">

              {category.tech.map((item, index) => (
                <div key={index} className="flex flex-col items-center group/icon">

                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-12 h-12 grayscale 
                    group-hover/icon:grayscale-0 
                    hover:scale-110 transition duration-300"
                  />

                  <p className="text-xs mt-2 text-gray-400">
                    {item.name}
                  </p>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}