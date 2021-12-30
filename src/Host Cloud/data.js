import servicesLogo from "./images/home-services-logo.png";
import aboutTeam1 from "./images/about-team-1.jpg";
import aboutTeam2 from "./images/about-team-2.jpg";
import aboutTeam3 from "./images/about-team-3.jpg";
import servicesIcon1 from "./images/services-icon-1.svg";
import servicesIcon2 from "./images/services-icon-2.svg";
import servicesIcon3 from "./images/services-icon-3.svg";
import servicesIcon4 from "./images/services-icon-4.svg";
import servicesIcon5 from "./images/services-icon-5.svg";
import servicesIcon6 from "./images/services-icon-6.svg";
import contactIcon1 from "./images/contact-icon-1.svg";
import contactIcon2 from "./images/contact-icon-2.svg";
import contactIcon3 from "./images/contact-icon-3.svg";
import contactIcon4 from "./images/contact-icon-4.svg";

// Header & Footer

export const headerData = [
    { id: 1, name: "home" },
    { id: 2, name: "about us" },
    { id: 3, name: "our services" },
    { id: 4, name: "contact us" }
];

export const footerData = [
    {
        id: 1,
        title: "about us",
        content: [
            "Host Cloud website developed in React by drb0r1s. Website idea by TemplateMo."
        ]
    },

    {
        id: 2,
        title: "hosting plans",
        content: [
            "Basic Cloud 5X", "Cloud VPS 10X", "Advanced Cloud",
            "Custom Designs", "Special Solutions"
        ]
    },

    {
        id: 3,
        title: "useful links",
        content: [
            "Cloud Hosting Platform", "Light Speed Zone", "Content Delivery Network",
            "Customer Support", "Latest News"
        ]
    },

    {
        id: 4,
        title: "more information",
        content: [
            { name: "Phone", content: "010-020-0560" },
            { name: "Email", content: "mail@company.com" },
            { name: "Support", content: "support@company.com" },
            { name: "Website", content: "www.company.com" }
        ]
    },
];

// Home

export const homeMainData = [
    { id: 1, name: "com", price: "10" },
    { id: 2, name: "net", price: "12" },
    { id: 3, name: "org", price: "8" },
    { id: 4, name: "in", price: "6" }
];

export const homeServicesData = [];

for(let i = 0; i < 10; i++) {
    homeServicesData.push(servicesLogo);
}

export const homeServicesDataList = [
    {
        id: 1,
        title: "10x light cloud",
        text: "Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id."
    },

    {
        id: 2,
        title: "managed vps cloud",
        text: "You are not allowed to re-distribute this template as a downloadable ZIP file on any template collection website. Please contact us if you want to."
    },

    {
        id: 3,
        title: "fully dedicated",
        text: "Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id."
    }
];

export const homePlansData = [
    {
        id: 1,
        name: "basic cloud 5x",
        price: 15.50,
        description: "Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.",
        plans: [
            "500 gb storage space", "3 tb data transfer", "bacis managed panel",
            "24/7 fast support", "100 premium themes", "cancel or upgrade anytime"
        ],
        button: "start plan"
    },

    {
        id: 2,
        name: "cloud vps 10x",
        price: 30,
        description: "Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.",
        plans: [
            "1 tb cloud space", "8 tb data transfer", "fully managed panel",
            "15-minute quick support", "unlimited web addons", "cancel or upgrade anytime"
        ],
        button: "select plan"
    },

    {
        id: 3,
        name: "advanced cloud",
        price: 72.25,
        description: "Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.",
        plans: [
            "4 tb storage space", "20 tb data transfer", "fully managed panel",
            "15-minute quick support", "top notch web adds", "advanced scalable"
        ],
        button: "take it now"
    }
];

export const homeFeaturesData = [
    {
        id: 1,
        title: "load balanced",
        description: "Nulla nisl ex, vehicula in urna nec, commodo consectetur augue. Vivamus nec metus mauris. Praesent lacinia tempus urna."
    },

    {
        id: 2,
        title: "top reliability",
        description: "Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester."
    },

    {
        id: 3,
        title: "quality hardwares",
        description: "Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester."
    },

    {
        id: 4,
        title: "99.9% quaility guaranteed",
        description: "Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester."
    },

    {
        id: 5,
        title: "high security",
        description: "Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester."
    },

    {
        id: 6,
        title: "network solutions",
        description: "Lorem ipsum dolor ame taxidermy sriracha cardigan salvia actually vice migas en pin sustainable carry scenester."
    }
];

export const homeReviewsData = [
    {
        id: 1,
        name: "william smith",
        title: "new co-founder",
        description: '"Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada."'
    },

    {
        id: 2,
        name: "vinny smart",
        title: "digital marketer",
        description: '"Quisque lacinia sed velit et maximus. Quisque dictum, lacus a malesuada finibus, arcu magna luctus risus, eu accumsan risus elit vitae lacus."'
    },

    {
        id: 3,
        name: "trevor liam",
        title: "technology chef",
        description: '"Vestibulum mauris ipsum, tempor tincidunt justo sit amet, bibendum tincidunt dui. Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis."'
    }
];

export const homeReviewsDataButtons = [];

for(let i = 0; i < 3; i++) {
    homeReviewsDataButtons.push(i);
}

// About Us

export const aboutInfoData = [
    {
        id: 1,
        title: "our history",
        description: "Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada a, commodo vitae lectus. Integer volutpat sapien in arcu fringilla, ac eleifend est facilisis.<br><br>Phasellus finibus lacus eu scelerisque rutrum. Duis purus eros, blandit ultricies iaculis in, commodo quis lacus. Pellentesque interdum varius enim nec accumsan."
    },

    {
        id: 2,
        title: "our cloud",
        description: "Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis. Duis sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare, suscipit lobortis augue volutpat.<br><br>Sed ligula arcu, interdum eu magna eget, tristique aliquet nibh. Aenean sodales justo vitae ex pharetra, vitae tincidunt dolor condimentum. Cras vel mattis risus."
    },

    {
        id: 3,
        title: "our network",
        description: "Fusce in semper velit, at tempus augue. Morbi quis auctor ipsum, ut accumsan neque. Vivamus dapibus ipsum placerat ante commodo, eget suscipit tortor hendrerit. Quisque lacinia sed velit et maximus.<br><br>Quisque dictum, lacus a malesuada finibus, arcu magna luctus risus, eu accumsan risus elit vitae lacus. Vestibulum et lorem non erat efficitur iaculis ut nec nibh. Vestibulum mauris ipsum, tempor tincidunt justo sit amet, bibendum tincidunt dui."
    }
];

export const aboutTeamData = [
    {
        id: 1,
        name: "jonathan smart",
        title: "co-founder",
        image: aboutTeam1
    },

    {
        id: 2,
        name: "mary morris",
        title: "co-founder",
        image: aboutTeam2
    },

    {
        id: 3,
        name: "george white",
        title: "co-founder",
        image: aboutTeam3
    }
];

// Our Services

export const servicesInfoData = [
    {
        id: 1,
        title: "vps cloud",
        description: "Fusce blandit commodo metus eu suscipit. Nullam ut blandit neque. Aenean nec tellus ac velit elementum tempor. Pellentesque nec urna ipsum.",
        image: servicesIcon1
    },

    {
        id: 2,
        title: "fast network",
        description: "Sed ligula arcu, interdum eu magna eget, tristique aliquet nibh. Aenean sodales justo vitae ex pharetra, vitae tincidunt dolor condimentum.",
        image: servicesIcon2
    },

    {
        id: 3,
        title: "reliable platform",
        description: "Fusce blandit commodo metus eu suscipit. Nullam ut blandit neque. Aenean nec tellus ac velit elementum tempor. Pellentesque nec urna ipsum.",
        image: servicesIcon3
    },

    {
        id: 4,
        title: "managed cdn",
        description: "Sed ligula arcu, interdum eu magna eget, tristique aliquet nibh. Aenean sodales justo vitae ex pharetra, vitae tincidunt dolor condimentum.",
        image: servicesIcon4
    },

    {
        id: 5,
        title: "optimal hosting",
        description: "Fusce blandit commodo metus eu suscipit. Nullam ut blandit neque. Aenean nec tellus ac velit elementum tempor. Pellentesque nec urna ipsum.",
        image: servicesIcon5
    },

    {
        id: 6,
        title: "customer support",
        description: "Cras placerat mauris scelerisque, placerat enim sed, imperdiet diam. Fusce blandit commodo metus eu suscipit. Nullam ut blandit neque.",
        image: servicesIcon6
    }
];

// Contact Us

export const contactFormData = [
    {
        id: 1,
        title: "010-020-0560",
        image: contactIcon1
    },

    {
        id: 2,
        title: "contact@company.com",
        image: contactIcon2
    },

    {
        id: 3,
        title: "support@company.com",
        image: contactIcon3
    },

    {
        id: 4,
        title: "www.company.com",
        image: contactIcon4
    }
];