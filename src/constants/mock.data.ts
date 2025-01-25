import { teamType } from '../../types'
import brunett from '../assets/images/friendly-smiling-brunett.png';
import youngMan from '../assets/images/young-bearded-man.png';
import bohemianMan from '../assets/images/bohemian-man.png';
import prettyWoman from '../assets/images/pretty-woman-white.png';

export const TEAM:Array<teamType> = [
    {
        name: "Janifer",
        role: "QA Engineer",
        image: brunett
    },
    {
        name: "John Doe",
        role: "Full Stack Developer",
        image: youngMan
    },
    {
        name: "Michael",
        role: "Front-end Developer",
        image: bohemianMan
    },
    {
        name: "Emilie Smile",
        role: "UX Designer",
        image: prettyWoman
    }
]