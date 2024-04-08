export const USERS = {
  1: {
    id: 1,
    email: 'ngrx@codezetta.com',
    password: 'test'
  }

};


export const BLOGS: any = {

  4: {
    id: 4,
    description: 'DevTo',
    longDescription: 'DevTo is a platform that provides a community-driven space for software developers to share knowledge, collaborate, and connect with others in the industry.',
    iconUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ef6b-MHSiT0AaSWICWDbHw.png',
    category: 'BEGINNER',
    lessonsCount: 10,
    seqNo: 0,
    url: 'DevTo-courses'
  },

  2: {
    id: 2,
    description: 'WebDev',
    longDescription: 'WebDev is a platform that provides a range of resources and tools for web developers, including articles, tutorials, and blog covering various topics related to web development',
    iconUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*nmSuYb20u3Yl5GV3i5wxWw.png',
    lessonsCount: 10,
    category: 'BEGINNER',
    seqNo: 1,
    url: 'WebDev-courses'
  },

  3: {
    id: 3,
    description: 'ChromeDev',
    longDescription: 'ChromeDev is a platform that provides a range of resources and tools for developers building applications for the web using the Google Chrome browser',
    iconUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_RS9wJjVHC0VOepPHplRgg.png',
    category: 'BEGINNER',
    lessonsCount: 10,
    seqNo: 2,
    url: 'ChromeDev-courses'
  },

  1: {
    id: 1,
    description: 'CssTricks',
    longDescription: 'CssTricks is a web development platform that provides articles, tutorials, and resources related to CSS, HTML, JavaScript, and other front-end technologies.',
    iconUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*PZdMbmahztOMMQ3pE6-TeQ.png',
    lessonsCount: 10,
    category: 'BEGINNER',
    seqNo: 4,
    url: 'CssTricks-courses'
  },
  12: {
    id: 12,
    description: 'Sitepoint',
    longDescription: 'Sitepoint is an online platform that offers articles, tutorials, and blog related to web development and design. The platform provides content on a wide range of topic',
    iconUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wQAGvKFpAR0E1s3vXeO76A.png',
    category: 'BEGINNER',
    seqNo: 6,
    url: 'Sitepoint-courses',
    lessonsCount: 10,
  },

  6: {
    id: 6,
    description: 'SmashingMag',
    longDescription: 'SmashingMag is a web development and design platform that provides articles and resources for developers and designers of all levels',
    iconUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*56BAvKrjYnhN_EcG7k0d0g.png',
    category: 'ADVANCED',
    lessonsCount: 11,
    seqNo: 7,
    url: 'SmashingMag-course'
  },

  7: {
    id: 7,
    description: 'StackDiary',
    longDescription: 'StackDiary is a platform for software developers that provides articles, tutorials, and interviews covering various aspects of software development. The platform aims to offer practical insights.',
    iconUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*X7HHPoCs-DQAC3qaNudGOA.png',
    category: 'ADVANCED',
    lessonsCount: 8,
    seqNo: 8,
    url: 'StackDiary-course'
  },

  8: {
    id: 8,
    description: 'SyntaxFm',
    longDescription: 'SyntaxFm is a podcast platform hosted by Wes Bos and Scott Tolinski, focused on web development topics',
    iconUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KF9hzK_jDw1Dtmxs_pfbsA.png',
    category: 'ADVANCED',
    seqNo: 9,
    url: 'SyntaxFm-course'
  },

  9: {
    id: 9,
    description: 'JsParty',
    longDescription: 'JsParty is a podcast platform focused on JavaScript-related topics. The platform provides practical insights and discussions for developers of all levels',
    iconUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*oMjO5ikvzf1S4XCaK2cuGg.png',
    category: 'BEGINNER',
    seqNo: 10,
    url: 'JsParty-course'
  },

  10: {
    id: 10,
    description: 'JsJabber',
    longDescription: 'JsJabber is a podcast platform focused on JavaScript development. The platform provides practical insights and advice for developers of all levels. The podcasts cover various topics related to JavaScrip',
    iconUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MZ9XiU8R_ajoMZnve3ln5w.png',
    category: 'BEGINNER',
    seqNo: 11,
    url: 'JsJabber-patterns-course'
  },

  11: {
    id: 11,
    description: 'CodeZetta',
    longDescription: 'Youtube channel that contain anything related to Javascript',
    iconUrl: 'https://drive.google.com/file/d/1oA1-IP4HlzU-4GvD-nS4IQtjcXkbdFvv/view?usp=sharing',
    category: 'ADVANCED',
    seqNo: 12,
    url: 'CodeZetta-course'
  }

};


export const LESSONS = {

  1: {
    id: 1,
    'description': 'The Power of :has() in CSS',
    'duration': '4:17',
    'seqNo': 1,
    blogId: 5
  },
  2: {
    id: 2,
    'description': 'Accessible Forms with Pseudo Classes    ',
    'duration': '2:07',
    'seqNo': 2,
    blogId: 5
  },
  3: {
    id: 3,
    'description': ' Passkeys: What the Heck and Why?    ',
    'duration': '2:33',
    'seqNo': 3,
    blogId: 5
  },
  4: {
    id: 4,
    'description': ' Animating CSS Grid (How To + Examples)    ',
    'duration': '4:44',
    'seqNo': 4,
    blogId: 5
  },
  5: {
    id: 5,
    'description': 'More Real-World Uses for :has()    ',
    'duration': '2:55',
    'seqNo': 5,
    blogId: 5
  },
  6: {
    id: 6,
    'description': ' Different Ways to Write CSS in React    ',
    'duration': '3:27',
    'seqNo': 6,
    blogId: 5
  },
  7: {
    id: 7,
    'description':'6 Common SVG Fails (and How to Fix Them)    ',
    'duration': '9:22',
    'seqNo': 7,
    blogId: 5
  },
  8: {
    id: 8,
    'description': ' Ease-y Breezy: A Primer on Easing Functions    ',
    'duration': '1:26',
    'seqNo': 8,
    blogId: 5
  },
  9: {
    id: 9,
    'description': 'AR, VR, and a Model for 3D in HTML    ',
    'duration': '2:08',
    'seqNo': 9,
    blogId: 5
  },
  10: {
    id: 10,
    'description': '  Faking Min Width on a Table Column    ',
    'duration': '4:01',
    'seqNo': 10,
    blogId: 5
  },

  11: {
    id: 11,
    'description': ' 5 Mistakes I Made When Starting My First React Project      ',
    'duration': '08:19',
    'seqNo': 1,
    blogId: 6
  },

  12: {
    id: 12,
    'description': ' Creating a Clock with the New CSS sin() and cos() Trigonometry Functions      ',
    'duration': '04:17',
    'seqNo': 2,
    blogId: 6
  },

  13: {
    id: 13,
    'description': 'Making Calendars With Accessibility and Internationalization in Mind     ',
    'duration': '06:05',
    'seqNo': 3,
    blogId: 6
  },
  22: {
    id: 22,
    'description': 'Blog Kick-Off - Install Node, NPM And Service Workers Section Code',
    'duration': '07:19',
    'seqNo': 1,
    blogId: 7
  },
  23: {
    id: 23,
    'description': ' How the Style Engine Generates Classes      ',
    'duration': '6:59',
    'seqNo': 2,
    blogId: 7
  },
  24: {
    id: 24,
    'description':  'Embracing Web Standards with Owen Buckley - JSJ 626',
    'duration': '7:28',
    'seqNo': 3,
    blogId: 7
  },
  25: {
    id: 25,
    'description': 'Simplifying Development with Deno - JSJ 625',
    'duration': '10:17',
    'seqNo': 4,
    blogId: 7
  },

  26: {
    id: 26,
    'description': 'Navigating Web Development Challenges - JSJ 624',
    'duration': '09:50',
    'seqNo': 5,
    blogId: 7
  },
  27: {
    id: 27,
    'description': '13% of the time, Devin works every time',
    'duration': '04:44',
    'seqNo': 6,
    blogId: 7
  },
  28: {
    id: 28,
    'description': 'Advocating for the future of the open web',
    'duration': '06:07',
    'seqNo': 7,
    blogId: 7
  },
  29: {
    id: 29,
    'description': 'Getting a pulse on your Core Web Vital',
    'duration': '5:38',
    'seqNo': 8,
    blogId: 7
  },


  30: {
    id: 30,
    description: 'Take a look, it\'s in a book',
    'duration': '5:38',
    'seqNo': 1,
    blogId: 1
  },

  31: {
    id: 31,
    description: 'Angular moves fast without breaking things',
    'duration': '5:12',
    'seqNo': 2,
    blogId: 1
  },

  32: {
    id: 32,
    description: 'React Server Components 🧐',
    'duration': '4:07',
    'seqNo': 3,
    blogId: 1
  },

  33: {
    id: 33,
    description: 'Angular Signals',
    'duration': '7:32',
    'seqNo': 4,
    blogId: 1
  },

  34: {
    id: 34,
    description: 'From sales to engineering',
    'duration': '6:28',
    'seqNo': 5,
    blogId: 1
  },

  35: {
    id: 35,
    description: 'A pre-party to a feud (Changelog++ 🔐)',
    'duration': '4:38',
    'seqNo': 6,
    blogId: 1
  },

  36: {
    id: 36,
    description: 'Frontend Feud: CSS Podcast vs CompressedFM',
    'duration': '7:54',
    'seqNo': 7,
    blogId: 1
  },

  37: {
    id: 37,
    description: 'htmx: a new old way to build the web',
    'duration': '5:31',
    'seqNo': 8,
    blogId: 1
  },

  38: {
    id: 38,
    description: 'New Year\'s Party 🎊',
    'duration': '8:19',
    'seqNo': 9,
    blogId: 1
  },

  39: {
    id: 39,
    description: 'What\'s next in JavaScript (a TC39 update)',
    'duration': '7:05',
    'seqNo': 10,
    blogId: 1
  },

  40: {
    id: 40,
    description: 'From WebGL to WebGPU',
    'duration': '5:38',
    'seqNo': 1,
    blogId: 12
  },

  41: {
    id: 41,
    description: 'Art of the state machine',
    'duration': '5:12',
    'seqNo': 2,
    blogId: 12
  },

  42: {
    id: 42,
    description: 'What\'s new in CSS land',
    'duration': '4:07',
    'seqNo': 3,
    blogId: 12
  },

  43: {
    id: 43,
    description: 'Building something new',
    'duration': '7:32',
    'seqNo': 4,
    blogId: 12
  },

  44: {
    id: 44,
    description: 'Best of the fest! Volume 2',
    'duration': '6:28',
    'seqNo': 5,
    blogId: 12
  },

  45: {
    id: 45,
    description: 'Helping people enter, stay & thrive in tech',
    'duration': '4:38',
    'seqNo': 6,
    blogId: 12
  },

  46: {
    id: 46,
    description: 'I wanna React Jam it with you',
    'duration': '7:54',
    'seqNo': 7,
    blogId: 12
  },

  47: {
    id: 47,
    description: 'Use Effect (not useEffect)',
    'duration': '5:31',
    'seqNo': 8,
    blogId: 12
  },

  48: {
    id: 48,
    description: 'Party on PartyKit',
    'duration': '8:19',
    'seqNo': 9,
    blogId: 12
  },

  49: {
    id: 49,
    description: 'Reflecting on Bun\'s big launch',
    'duration': '7:05',
    'seqNo': 10,
    blogId: 12
  },
  50: {
    id: 50,
    "description": "Reports of Node's death are greatly exaggerated",
    "duration": "6:53",
    "seqNo": 1,
    blogId: 4

  },
  51: {
    id: 51,
    "description": "Web dev security school",
    "duration": "5:52",
    "seqNo": 2,
    blogId: 4
  },
  52: {
    id: 52,
    "description": "A view to a transitions API",
    "duration": "8:17",
    "seqNo": 3,
    blogId: 4
  },
  53: {
    id: 53,
    "description": "Modernizing packages to ESM",
    "duration": "7:47",
    "seqNo": 4,
    blogId: 4
  },
  54: {
    id: 54,
    "description": "Ten years of TypeScript bliss",
    "duration": "9:22",
    "seqNo": 5,
    blogId: 4
  },
  55: {
    id: 55,
    "description": "Frontend Feud: CSS Pod vs Whiskey Web and Whatnot",
    "duration": "7:07",
    "seqNo": 6,
    blogId: 4
  },

  56: {
    id: 56,
    "description": "Making web art the hard way",
    "duration": "4:39",
    "seqNo": 7,
    blogId: 4
  }
};


export function findCourseById(blogId: number) {
  return BLOGS[blogId];
}

export function findLessonsForCourse(blogId: number) {
  return Object.values(LESSONS).filter(lesson => lesson.blogId == blogId);
}


export function authenticate(email: string, password: string) {

  const user: any = Object.values(USERS).find(user => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }

}
