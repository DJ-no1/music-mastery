
'use client'
import HeroSec from '@/components/HeroSec'
import Featured from '@/components/Featured'
import UpcomingWebinars from '@/components/UpcomingWebinars';
import Instructors from '@/components/Instructors';
export default function Page() {
  return (
  <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

<HeroSec/>
<Featured/>
<UpcomingWebinars/>

  </main>
  );
}
