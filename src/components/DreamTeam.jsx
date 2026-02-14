import Friend from "./Friend.jsx";
import {dreamTeam} from "../utils/constants.js";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 mt-1 ms-2 me-0 row border border-warning rounded-bottom-5">
            <h2 className="col-sm-12 text-center">Dream team</h2>
            {dreamTeam.map((title, i) => <Friend friend={title} pos={++i} key={title}/>)}
        </section>
    );
};

export default DreamTeam;