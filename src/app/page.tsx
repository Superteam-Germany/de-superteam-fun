import Hero from '../sections/home/Hero';
import WhatIsSuperteam from '../sections/home/WhatIsSupeteam';
import FadeInDiv from '@/components/FadeInDiv';
import { Suspense } from 'react';
import WhatWeDo from '../sections/home/WhatWeDo';
import Newsletter from '../sections/home/Newsletter';
import { Events } from '../sections/home/Events';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <FadeInDiv>
        <Hero />
      </FadeInDiv>
      <Suspense>
        <WhatIsSuperteam />
      </Suspense>
      <WhatWeDo/>
      <Events />
      <Newsletter />
    </div>
  );
}
