import React from 'react'
import { Metadata } from 'next';
import TeamPage from './page.client';

type Props = {}

export const metadata: Metadata = {
    title: "Triveni 2K24 | Team - Embark On The Journey of Inno-Culture ✨",
    description: "Have questions or suggestions? Feel free to reach out to us! Get in touch with the organizers of Triveni 2K24 Annual Fest 2024. We're here to assist you!."
};


const TeamMain = (props: Props) => {
    return <TeamPage />
}


export default TeamMain;