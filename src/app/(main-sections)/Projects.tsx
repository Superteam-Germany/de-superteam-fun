'use client';
import React, { Suspense } from 'react';
import Card from '@/components/ui/Card';
import { ProjectRecord } from '@/app/types/projects';
import { Highlight } from '@/components/ui/Highlight';
import FadeInDiv from '@/components/ui/FadeInDiv';

const getProjects = async (): Promise<{ projects: ProjectRecord[] }> => {
  const projects = await fetch('api/projects', {
    next: {
      // revalidate every day
      // revalidate: 60 * 60,
    },
  });

  return await projects.json();
};

const Projects = () => {
  const [projects, setProjects] = React.useState<ProjectRecord[]>([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const { projects } = await getProjects();

      setProjects(projects);
    };
    fetchEvents();
  }, []);
  return (
    <div className='relative w-full '>
      <FadeInDiv>
        <section className='container min-h-80 py-24 grid grid-cols-1 lg:grid-cols-2 gap-x-6 justify-center sm:flex-row sm:justify-between items-start'>
          <h2 className='uppercase text-h2.5 self-start mb-12'>
            Build with our <br /> <Highlight>Community</Highlight>
          </h2>
          <div className='max-w-[40rem] lg:justify-self-end'>
            <p>
              Our members are pushing the Solana Ecosystem forward and stand at
              the forefront of crypto inovation. We make sure our members have
              all of the tools at thier disposal so they can get ahead. You
              build it, but our community has your back.
            </p>
            <a
              href='https://discord.com/channels/1034811886996299877/1036611708468351056'
              className='underline underline-offset-4'>
              <span className='block my-6 text-body'>Become a member</span>
            </a>
          </div>
        </section>
      </FadeInDiv>
      <FadeInDiv>
        <section className=' justify-between pb-24  container gap-4 flex relative h-full overflow-clip'>
          <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4 gap-4 gap-y-6 grow justify-between'>
            <Suspense
              fallback={
                <>
                  {[0, 0, 0, 0].map((_, i) => (
                    <Card
                      className='animate-pulse'
                      key={i}
                      title=''
                      content=''
                      linkContent=''
                      href=''
                      imgSrc=''
                    />
                  ))}
                </>
              }>
              {projects.map(project => {
                if (!project.fields.display) return;
                return (
                  <Card
                    key={project.id}
                    title={project.fields.name}
                    content={project.fields.description}
                    linkContent='More information'
                    href={project.fields.link}
                    logo={project.fields.logo}
                  />
                );
              })}
            </Suspense>
            {/* <Card
        title="Builderz"
        content="Lorem ipsum dolor sit amet consectetur."
        linkContent="More information"
        href="/"
        imgSrc="/images/placeholder.jpg"
        />
        <Card
        title="Triggr"
        content="Lorem ipsum dolor sit amet consectetur."
        linkContent="More information"
        href="/"
        imgSrc="/images/placeholder.jpg"
        />
        <Card
        title="Bunkr"
        content="Lorem ipsum dolor sit amet consectetur."
        linkContent="More information"
        href="/"
        imgSrc="/images/placeholder.jpg"
        />
        <Card
        title="Cavyar"
        content="Lorem ipsum dolor sit amet consectetur."
        linkContent="More information"
        href="/"
        imgSrc="/images/placeholder.jpg"
      /> */}
          </div>
          <h2 className='ml-4 hidden sm:block [writing-mode:vertical-rl] uppercase grow-1 '>
            Our Projects
          </h2>
        </section>
      </FadeInDiv>
    </div>
  );
};

export default Projects;
