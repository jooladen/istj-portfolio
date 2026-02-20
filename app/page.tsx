import { PortfolioLayout } from "@/components/templates/PortfolioLayout";
import { SkillBar } from "@/components/atoms/SkillBar";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import portfolioData from "@/mocks/portfolio.json";

export default function Home() {
  const { profile, skills, projects, experience } = portfolioData;

  return (
    <PortfolioLayout>
      {/* About */}
      <section id="about" className="py-24 border-b border-neutral-100 dark:border-neutral-800">
        <div className="mb-2">
          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
            {profile.mbti} · {profile.title}
          </span>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
          {profile.name}
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mb-8">
          {profile.bio}
        </p>
        <div className="flex gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors border-b border-neutral-200 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 pb-0.5"
          >
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors border-b border-neutral-200 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 pb-0.5"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors border-b border-neutral-200 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-100 pb-0.5"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 border-b border-neutral-100 dark:border-neutral-800">
        <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase mb-8">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 border-b border-neutral-100 dark:border-neutral-800">
        <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 border-b border-neutral-100 dark:border-neutral-800">
        <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase mb-8">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div key={i} className="flex gap-8">
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 w-36 shrink-0 pt-0.5">
                {exp.period}
              </span>
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-0.5">{exp.role}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{exp.company}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <h2 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 tracking-widest uppercase mb-8">
          Contact
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          새로운 기회나 협업에 대해 언제든지 연락 주세요.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="text-lg font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors border-b border-neutral-900 dark:border-neutral-100 hover:border-neutral-400 dark:hover:border-neutral-500 pb-1"
        >
          {profile.email}
        </a>
      </section>
    </PortfolioLayout>
  );
}
