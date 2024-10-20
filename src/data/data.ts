import {IMAGES} from '@utils/nomenclature';

interface AboutUsProps {
  id: number;
  header: string;
  content: string;
}

interface FoundersProps {
  id: number;
  name: string;
  position: string;
  avatarUrl: number;
}

const data: {
  AboutUs: AboutUsProps[];
  Founders: FoundersProps[];
} = {
  AboutUs: [
    {
      id: 1,
      header: 'Who Are We',
      content:
        'Social Army Group  is a non profit and non-governmental organisation, It was initiated by group of 3 friends in 2018. As time passed, many volunteers have joined this group for the welfare of society. It was in 2020, when this group got its name i.e. Social Army group.',
    },
    {
      id: 2,
      header: 'What We Do',
      content:
        'At present, there are 100+ volunteers. for a cleaner, healthier, Education drive and for the betterment of children hailing from the socio-economically challenging background of society.',
    },
    {
      id: 3,
      header: 'Our Mission',
      content:
        'Our aim is to create a more breathable and cleaner surrounding so as to increase sustainability and work towards United Nation’s Sustainable Development Goals 3,4,13,15, and 17.',
    },
    {
      id: 4,
      header: 'Achievements',
      content: `\u203A SAG FOOTBALL CUP 2022
\u203A MENSTRUAL HEALTH CAMPAIGN
\u203A BLANKETS DISTRIBUTION 2021
\u203A EDUCATION DRIVE
\u203A TREE PLANTATION DRIVE
\u203A WATER BOWLS FOR STRAYS
\u203A TREE PLANTATION DRIVE
\u203A REFLECTIVE COLLARS FOR DOG
\u203A RATION KIT DISTRIBUTION
\u203A BLANKETS DISTRIBUTION 2020
\u203A OUR COVID WARRIORS
\u203A GROUP CYCLING DRIVE
\u203A GIP DAM CLEAN DRIVE`,
    },
  ],

  Founders: [
    {
      id: 1,
      name: 'Arun Matthews',
      position: 'Founder',
      avatarUrl: IMAGES.arun,
    },
    {
      id: 2,
      name: 'Ajay Waghmode',
      position: 'Founder',
      avatarUrl: IMAGES.vijay,
    },
    {
      id: 3,
      name: 'Vijay Waghmode',
      position: 'Founder',
      avatarUrl: IMAGES.ajay,
    },
    {
      id: 4,
      name: 'Stavan Kulkarni',
      position: 'Treasurer',
      avatarUrl: IMAGES.stavan,
    },
    {
      id: 5,
      name: 'Nishant Charan',
      position: 'President',
      avatarUrl: IMAGES.charan,
    },
  ],
};

export default data;
