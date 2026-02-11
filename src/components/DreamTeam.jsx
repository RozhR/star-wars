import friend1 from '../assets/friend1.jpg'
import friend2 from '../assets/friend2.jpg'
import friend3 from '../assets/friend3.jpg'
import friend4 from '../assets/friend4.jpg'
import friend5 from '../assets/friend5.jpg'
import friend6 from '../assets/friend6.jpg'
import friend7 from '../assets/friend7.jpg'
import friend8 from '../assets/friend8.jpg'
import friend9 from '../assets/friend9.jpg'
import Friend from "./Friend.jsx";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 mt-1 ms-2 me-0 row border border-warning rounded-bottom-5">
            <h2 className="col-sm-12 text-center">Dream team</h2>
            <Friend friend={friend1}/>
            <Friend friend={friend2}/>
            <Friend friend={friend3}/>
            <Friend friend={friend4}/>
            <Friend friend={friend5}/>
            <Friend friend={friend6}/>
            <Friend friend={friend7} pos={7}/>
            <Friend friend={friend8}/>
            <Friend friend={friend9} pos={9}/>

            {/*<img className="friend col-sm-4 p-1" title="R2-D2" src={friend1} alt="R2-D2"/>*/}
            {/*<img className="friend col-sm-4 p-1" title="C-3PO" src={friend2} alt="C-3PO"/>*/}
            {/*<img className="friend col-sm-4 p-1" title="Ewok" src={friend3} alt="Ewok"/>*/}
            {/*<img className="friend col-sm-4 p-1" title="Chewbacca" src={friend4}*/}
            {/*     alt="Chewbacca"/>*/}
            {/*<img className="friend col-sm-4 p-1" title="Han Solo" src={friend5}*/}
            {/*     alt="Han Solo"/>*/}
            {/*<img className="friend col-sm-4 p-1" title="Yoda" src={friend6} alt="Yoda"/>*/}
            {/*<img className="friend col-sm-4 p-1 Obi-Wan-Kenobi" title="Obi-Wan Kenobi" src={friend7}*/}
            {/*     alt="Obi-Wan Kenobi"/>*/}
            {/*<img className="friend col-sm-4 p-1" title="Millennium Falcon"*/}
            {/*     src={friend8}*/}
            {/*     alt="Millennium Falcon"/>*/}
            {/*<img className="friend col-sm-4 p-1 Leia-Organa" title="Leia Organa" src={friend9}*/}
            {/*     alt="Leia Organa"/>*/}
        </section>
    );
};

export default DreamTeam;