export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    subtitle?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: `It's a boy!`,
    subtitle: 'Celebrate with us on Octboer 26th, 2024',
    description: 'Event details for the Capshaw baby shower',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Event details',
            href: '#event-details'
        },
        {
            text: 'RSVP',
            href: '#rsvp'
        },
        {
            text: 'Registry',
            href: '#gifts'
        }
    ],
    footerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Event details',
            href: '#event-details'
        }
    ],

    hero: {
        title: `It's a boy!`,
        subtitle: 'Celebrate with us on October 26th, 2024',
        text: `**Dear Friends and Family**, </br>We're thrilled to invite you to join us in celebrating the upcoming arrival of our first child! </br></br> We look forward to creating new memories with you as we prepare to welcome the newest member of the Capshaw family. Thank you for being part of our journey! </br></br>With love and gratitude, </br>Zach & Kat Capshaw`,
        image: {
            src: '/dogs.webp',
            alt: 'dogs'
        },
        actions: [
            {
                text: 'RSVP',
                href: '/contact'
            }
        ]
    },

    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
