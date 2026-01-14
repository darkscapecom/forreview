interface serviceDT {
    id: number,
    image: string,
    title: string,
    description?: string;
    categories?: string[];
}
const serviceData: serviceDT[] = [
    //home five service data start
    {
        id: 1,
        image: "/assets/img/update/service/vp/thumb.jpg",
        title: "Corporate Video Production",
    },
    {
        id: 2,
        image: "/assets/img/update/service/vp/thumb-2.jpg",
        title: "Scriptwriting & Storyboarding",
    },
    {
        id: 3,
        image: "/assets/img/update/service/vp/thumb-3.jpg",
        title: "MOTION GRAPHICS AND ANIMATION",
    },
    {
        id: 4,
        image: "/assets/img/update/service/vp/thumb-4.jpg",
        title: "SOCIAL MEDIA VIDEO CONTENT",
    },
    {
        id: 5,
        image: "/assets/img/update/service/vp/thumb-5.jpg",
        title: "FASHION AND LIFESTYLE VIDEOS",
    },
    //home five service data end
    //home four service data start
    {
        id: 6,
        title: "Brand Identity Design",
        description: "Strategic, data-driven media campaigns designed to build brand awareness & connect with your target audience.",
        image: "/assets/img/update/service/service-1.jpg",
        categories: ["Content strategy", "Analytics & reporting", "Community management"],
    },
    {
        id: 7,
        title: "Web Design & Development",
        description: "Custom websites built with modern design principles and performance in mind, optimized for all devices.",
        image: "/assets/img/update/service/service-2.jpg",
        categories: ["UI/UX Design", "Responsive design", "Performance optimization"],
    },
    {
        id: 8,
        title: "SEO Optimization",
        description: "Increase search visibility and drive traffic with proven SEO strategies tailored for your business.",
        image: "/assets/img/update/service/service-3.jpg",
        categories: ["Keyword research", "On-page SEO", "Backlink strategy"],
    },
    {
        id: 9,
        title: "Creative Web Solutions",
        description: "Innovative web solutions that elevate your brand and provide a seamless user experience.",
        image: "/assets/img/update/service/service-4.jpg",
        categories: ["Web apps", "Interactive design", "Performance optimization"],
    },
    //home four service data end
    //home six service data start
    {
        id: 10,
        title: "Development",
        image: "/assets/img/update/service/service-3/st-service-1.jpg",
        categories: ["UX Design", "User Testing", "Product Prototype", "Mobile UI", "Web app design"],
    },
    {
        id: 11,
        title: "Marketing",
        image: "/assets/img/update/service/service-3/st-service-2.jpg",
        categories: ["UX Design", "User Testing", "Product Prototype", "Mobile UI", "Web app design"],
    },
    {
        id: 12,
        title: "Graphics",
        image: "/assets/img/update/service/service-3/st-service-3.jpg",
        categories: ["UX Design", "User Testing", "Product Prototype", "Mobile UI", "Web app design"],
    },
    {
        id: 13,
        title: "Technology",
        image: "/assets/img/update/service/service-3/st-service-4.jpg",
        categories: ["UX Design", "User Testing", "Product Prototype", "Mobile UI", "Web app design"],
    },
    //home six service data end
]
export default serviceData;