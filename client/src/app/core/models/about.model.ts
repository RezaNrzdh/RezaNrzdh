export class AboutModel {
    jobtitle: string;
    aboutme: string;
    phone: string;
    email: string;
    birthday: string;
    married: string;
    militaryservice: string;
    experience: Array<{
        year: string;
        img: string;
        companyname: string;
        from: string;
        desc: string;
        reason: string;
    }>;
    skills: Array<{
        title: string;
        skill: Array<string>;
    }>;
    language: Array<{
        title: string;
        cefr: string;
        level: number;
    }>;
}

