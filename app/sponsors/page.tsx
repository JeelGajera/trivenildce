import React from 'react';
import SponsorCard from "@/components/sponsors_Card";
import Image from 'next/image';
import "@/styles/sponsors.css"

export default function page() {
    return (
        <>
                
                <div className="text-center mt-1">
                        <h1 className='font-clourso text-[4rem] mt-[2rem] md:text-[4rem] lg:text-[5rem]' style={{lineHeight: "5rem"}}>Our Sponsors</h1>
                        <div className="flex justify-center m-auto md:.seven">
                                <h1 className='w-[60%] m-auto' style={{fontFamily: "system-ui;"}}>Sincere thanks to sponsors for elevating our event!</h1>

                        </div>
                </div>
                <div className="flex justify-center md:mt-[1rem]">
                        <div className='md:grid md:grid-cols-3 md:gap-[5rem] md:m-[10rem] md:mt-[5rem] md:mb-[5rem] items-center place-items-center p-[1rem]'>
                                <SponsorCard imageUrl="/sponsors/D-Vivid Logo.png" title='Title Sponsor' />
                                <SponsorCard imageUrl="/sponsors/My Global Connect Logo.png" title='Event Sponsor' />
                                <SponsorCard imageUrl="/sponsors/Demmisto Technologies.jpeg" title='Workshop | Technology Partner' />
                                <SponsorCard imageUrl="/sponsors/Skill Coach.jpeg" title='Workshop Partner' />
                                <SponsorCard imageUrl="/sponsors/Canamlogo-White.png" title='Stall Partner' />
                                <SponsorCard imageUrl="/sponsors/levelup logo.png" title='Stall Partner' />
                                <SponsorCard imageUrl="/sponsors/nutsweet-logo.png" title='Goodies Partner' />
                                <SponsorCard imageUrl="/sponsors/priyesh_Vidhyapeeth.jpg" title='Learning Partner' />
                                <SponsorCard imageUrl="/sponsors/ami-polymer.png" title='Ami Polymer' />
                        </div>
                </div>

        </>
        
    )
}
