import { teamType } from '../../types'
import brunett from '../assets/images/friendly-smiling-brunett.png';
import youngMan from '../assets/images/young-bearded-man.png';
import bohemianMan from '../assets/images/bohemian-man.png';
import prettyWoman from '../assets/images/pretty-woman-white.png';

export const TEAM:Array<teamType> = [
    {
        name: "Janifer",
        role: "QA Engineer",
        image: brunett,
        bgColor: '#FFB9CE',
        height: 310
    },
    {
        name: "John Doe",
        role: "Full Stack Developer",
        image: youngMan,
        bgColor: '#CAD5D4',
        height: 200
    },
    {
        name: "Michael",
        role: "Front-end Developer",
        image: bohemianMan,
        bgColor: '#E4DCD3',
        height: 300
    },
    {
        name: "Emilie Smile",
        role: "UX Designer",
        image: prettyWoman,
        bgColor: '#FFCA31',
        height: 205
    }
]