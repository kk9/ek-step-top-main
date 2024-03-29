import { create } from "zustand";

interface Category {
  name: string;
  imageUrl: string;
  nameImageUrl: string;
  personaImage: string;
  x: number;
  y: number;
  links: Link[];
}

interface Link {
  title: string;
  url: string;
}

interface CategoryStore {
  categories: Category[];
  current: string;
  menuOpen: boolean;
  menuCategory: string;
  toggleMenu: () => void;
  setCurrent: (current: string) => void;
  setMenuCategory: (menuCategory: string) => void;
  introDone: boolean;
  setIntroDone: () => void;
}

const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [
    {
      name: "Govt. Official",
      imageUrl: "./images/ProfilePhotos_0000_Official.jpg",
      nameImageUrl: "./images/Theatre_V4-12 (1).png",
      x: 1,
      y: 3,
      personaImage: "./images/Pop Ups V2/GovtOfficial.jpg",
      links: [
        { title: "IGOT KARMAYOGI - WEBSITE", url: "https://igotkarmayogi.gov.in/#/" },
        { title: "IGOT KARMAYOGI - DASHBOARD", url: "https://igotkarmayogi.gov.in/#/#dashboardAnalytics" },
        { title: "IGOT KARMAYOGI - VIDEO 1", url: "https://igotkarmayogi.gov.in/assets/img/Sanjeev-final.mp4" },
        { title: "IGOT KARMAYOGI - VIDEO 2", url: "https://igotkarmayogi.gov.in/assets/img/Shilpa-final.mp4" },
      ],
    },
    {
      name: "Blue Collar Worker",
      imageUrl: "./images/ProfilePhotos_0001_Plumber.jpg",
      nameImageUrl: "./images/Theatre_V4-12.png",
      x: 2,
      y: 3,
      personaImage: "./images/Pop Ups V2/BlueCollarWorker.jpg",
      links: [
        { title: "ONEST LINK - HOME (ONEST.NETWORK)", url: "https://onest.network/index.php" },
        {
          title: "ULP -  WALLET",
          url: "https://www.figma.com/proto/PnXccLRkedYSkGFHrPwNR9/Arohan?page-id=951%3A1499&node-id=951%3A1647&viewport=-1377%2C-754%2C1.7&scaling=scale-down&starting-point-node-id=951%3A1647&show-proto-sidebar=1",
        },
      ],
    },
    {
      name: "Teacher",
      imageUrl: "./images/ProfilePhotos_0002_Teacher.jpg",
      nameImageUrl: "./images/Theatre_V4-15.png",
      x: 1,
      y: 1,
      personaImage: "./images/Pop Ups V2/Teacher.jpg",
      links: [
        { title: "SARAL APP DEMO", url: "https://youtu.be/tJFQn0Sm0rU" },
        {
          title: "VSK DEMO VIDEO",
          url: "https://drive.google.com/file/d/1_eMqjXEO-L5aCgIMeaUeaz9C4t4ODi3Y/view?usp=sharing",
        },
        { title: "JADUI PITARA", url: "https://ejaaduipitara.ncert.gov.in/index.html" },
        { title: "ASK NCF SAARATH!", url: "https://ncfsaarathi.sunbird.org/#/" },
        { title: "CHITRALEKHA VIDEO EDITING TOOL", url: "https://youtu.be/Jq3CcEb9pxQ" },
        { title: "CHITRALEKHA - DEMO 1", url: "https://youtu.be/wmtYXKupumA" },
        { title: "CHITRALEKHA - DEMO 2", url: "https://youtu.be/yNuRFJ1fCsw" },
      ],
    },
    {
      name: "Farmer",
      imageUrl: "./images/ProfilePhotos_0003_Farmer.jpg",
      nameImageUrl: "./images/Theatre_V4-14.png",
      x: 2,
      y: 2,
      personaImage: "./images/Pop Ups V2/Farmer.jpg",
      links: [
        {
          title: "PM KISAN VIDEO",
          url: "https://drive.google.com/file/d/1DwiFMOze5JyQyXEgG92pEYnRNCHoRBHC/view?usp=drive_link",
        },
        { title: "AGRI.OBSRV.AI", url: "https://agri.obsrv.ai/" },
        { title: "AGRI.OBSRV.AI/ADVISORY", url: "https://agri.obsrv.ai/advisory" },
        { title: "KISAN EMITRA CHATBOT", url: "https://chatbotupmkisan.gov.in/Home/Index" },
      ],
    },
    {
      name: "Parent",
      imageUrl: "./images/ProfilePhotos_0004_Parents.jpg",
      nameImageUrl: "./images/Theatre_V4-11.png",
      x: 3,
      y: 2,
      personaImage: "./images/Pop Ups V2/Parent.jpg",
      links: [
        {
          title: "NAMMA YATRI",
          url: "https://drive.google.com/file/d/1eXWDiaGmNT4eZBSm5SPYxg9PAshNwk4q/view?usp=sharing",
        },
        { title: "JAADUI PITARA(NCERT.GOV.IN)", url: "https://ejaaduipitara.ncert.gov.in/index.html" },
      ],
    },
    {
      name: "HealthCare Worker",
      imageUrl: "./images/ProfilePhotos_0005_Nurse.jpg",
      nameImageUrl: "./images/Theatre_V4-09.png",
      x: 1,
      y: 2,
      personaImage: "./images/Pop Ups V2/HealthCareWorker.jpg",
      links: [
        { title: "ASTRIKA SPHERE", url: "https://sphere.aastrika.org/public/home" },
        {
          title: "ORGAN DONOR REGISTRY",
          url: "https://drive.google.com/file/d/1IXqTmc3nYex_mbSYI1QV2YrtIgiJcPUN/view?usp=sharing",
        },
        { title: "HOW TO CREATE AN ACCOUNT AND LOGIN ON ASTRIKA SPHERE", url: "https://youtu.be/1fqlys8mkHg" },
        { title: "TAKING THE COURSE", url: "https://youtu.be/Kl28R7m2k50" },
        { title: "SUNBIRD RC -VC POWERED CERTIFICAITON", url: "https://youtu.be/JTGzCkEXlmU" },
        {
          title: "TRACK AND TRACE THROUGH SUNBIRD RC",
          url: "https://www.figma.com/proto/mQywJzNtbFqu2nXZkXDBjm/Imagination?page-id=285%3A2638&node-id=382-5473&viewport=312%2C-1001%2C0.11&scaling=min-zoom&starting-point-node-id=382%3A5473",
        },
      ],
    },
    {
      name: "Student",
      imageUrl: "./images/ProfilePhotos_0006_Student.jpg",
      nameImageUrl: "./images/Theatre_V4-10.png",
      x: 4,
      y: 1,
      personaImage: "./images/Pop Ups V2/Student.jpg",
      links: [
        { title: "ETB", url: "https://drive.google.com/file/d/1s7i6PUpBwR-hc9pOOyK5tapmuhUJUtYJ/view?usp=sharing" },
        {
          title: "TN SCHOOL VISIT",
          url: "https://drive.google.com/file/d/1N2xcQ5FyuntK54d4SOGQdsdHwTSFbESs/view?ts=6438bc01",
        },
        {
          title: "UNIVERSAL LEARNERS PASSPORT",
          url: "https://www.figma.com/proto/PnXccLRkedYSkGFHrPwNR9/Arohan?page-id=951%3A1499&node-id=951%3A1647&viewport=-1377%2C-754%2C1.7&scaling=scale-down&starting-point-node-id=951%3A1647&show-proto-sidebar=1",
        },
        {
          title: "WORLD BANK - VIDEO",
          url: "https://drive.google.com/file/d/1l15hP8T5aSK5KT9yJVygjiM54qicT6Jm/view?usp=sharing",
        },
        { title: "ONEST - HOME", url: "https://onest.network/index.php" },
      ],
    },
  ],
  current: "Farmer",
  setCurrent: (current: string) => set({ current }),
  menuOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  menuCategory: "Student",
  setMenuCategory: (menuCategory: string) => set({ menuCategory }),
  introDone: false,
  setIntroDone: () => set(() => ({ introDone: true })),
}));

export default useCategoryStore;
export type { Category };
