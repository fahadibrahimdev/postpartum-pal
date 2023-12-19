import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Empowering Parents, Providing Help, and Creating a Community',
    text: 'PostpartumPal is bringing Postpartum care to the 21st century! More than just helping parents connect with birth workers, the app serves as a social platform that recognizes the care parents require and offers a space where every concern is relevant, and every thought worth the discussion. With PostpartumPal, find your voice, and find the physical and emotional support you need.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Discover Features',
    features: [
        {
            title: 'Baby Tracker',
            description: 'Birth-workers and Parents can both track your newborns feedings, diapers, and sleep.',
            icon: 'user'
        },
        {
            title: 'Schedule Services ',
            description: 'Hire services which are automatically updated to your digital calendar.',
            icon: 'timer'
        },
        {
            title: 'Connect via Chat',
            description: 'Speak with PostpartumPal community members via the chat feature.',
            icon: 'chat-typingh'
        },
        {
            title: 'Leave Reviews',
            description: 'Post feedback for birth workers who have cared for you.',
            icon: 'mutiple-reviews'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'After you’ve experienced PostpartumPal, you’ll wonder how you lived without it.',
        'PostpartumPal is designed to offer the best support to expecting parents, and parents going through the postpartum experience.  We combine the utility of a baby tracker with a social platform offers newborn education and advice, a chance to connect and socialize, and most importantly connections to the valuable care you deserve. At PostpartumPal your experience is valid and all concerns are taken seriously. The benefit of a community is that as the network grows there will always be someone who is listening and may have information and stories to share that help you gain the confidence to seek support.',
        'PostpartumPal provides lead generation with a unique location-based newsfeed so local parents see your services front and center. Additionally, our baby tracker solves the problem of morning reports because we allow parents to link provider and parent accounts so entries automatically populate in their account. No more screenshots! ',
        'Whether you are For-Profit or Non-profit, we provide streamlined administration of services and decreased advertising and client acquisition costs. We anticipate being THE way for parents to learn about, locate, and pay for services. We will catalogue your services and put them in front of parents who need them.',
    ],
}

export const benefitsContent = {
    heading: 'Listen. Affirm. Share. Support.',
    text: 'Part of finding the ultimate support is to share and receive experiences. Parents with similar accounts not only help you affirm what your heart is already feeling which a busy healthcare institution cannot detect.',
    benefits: [
        {
            title: 'Post',
            description: 'Socialize with the PostpartumPal community by posting pictures and thoughts.',
            icon: 'edit'
        },
        {
            title: 'Resources',
            description: 'Find health news, advice and tips from both parents, and birth workers. ',
            icon: 'meeting'
        },
        {
            title: 'Search By',
            description: 'You can search for birth workers suited to your exact needs according to their listed experience and references.',
            icon: 'search-list'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Why is your business called PostpartumPal?',
            answer: 'The answer will be here......',

        },
        {
            question: 'Do you only offer links to Doulas?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Become a Part of the PostpartumPal Community!',
    text: 'Sign up to get early access to the PostpartumPal app!'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-Up',
    accent: `Why ${siteName}?`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
