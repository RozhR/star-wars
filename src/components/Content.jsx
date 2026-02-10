const Content = () => {
    return (
        <main className="clearfix">
            <section className="float-start w-25 mt-1 me-3">
                <img className="w-100" src="/src/assets/main.jpg" alt="Luke Skywalker"/>
                </section>
                <section className="float-end w-50 mt-1 ms-2 me-0 row border border-warning rounded-bottom-5">
                    <h2 className="col-sm-12 text-center">Dream team</h2>
                    <img className="friend col-sm-4 p-1" title="R2-D2" src="/src/assets/friend1.jpg" alt="R2-D2"/>
                    <img className="friend col-sm-4 p-1" title="C-3PO" src="/src/assets/friend2.jpg" alt="C-3PO"/>
                    <img className="friend col-sm-4 p-1" title="Ewok" src="/src/assets/friend3.jpg" alt="Ewok"/>
                    <img className="friend col-sm-4 p-1" title="Chewbacca" src="/src/assets/friend4.jpg"
                         alt="Chewbacca"/>
                    <img className="friend col-sm-4 p-1" title="Han Solo" src="/src/assets/friend5.jpg"
                         alt="Han Solo"/>
                    <img className="friend col-sm-4 p-1" title="Yoda" src="/src/assets/friend6.jpg" alt="Yoda"/>
                    <img className="friend col-sm-4 p-1 Obi-Wan-Kenobi" title="Obi-Wan Kenobi" src="/src/assets/friend8.jpg"
                         alt="Obi-Wan Kenobi"/>
                    <img className="friend col-sm-4 p-1" title="Millennium Falcon"
                         src="/src/assets/friend7.jpg"
                         alt="Millennium Falcon"/>
                    <img className="friend col-sm-4 p-1 Leia-Organa" title="Leia Organa" src="/src/assets/friend9.jpg"
                         alt="Leia Organa"/>
                </section>
                <p className="far-galaxy">
                    It is a period of civil war.
                    Rebel spaceships, striking
                    from a hidden base, have won
                    their first victory against
                    the evil Galactic Empire.

                    During the battle, Rebel
                    spies managed to steal secret
                    plans to the Empire's
                    ultimate weapon, the DEATH
                    STAR, an armored space
                    station with enough power
                    to destroy an entire planet.

                    Pursued by the Empire's
                    sinister agents, Princess
                    Leia races home aboard her
                    starship, custodian of the
                    stolen plans that can save her
                    people and restore
                    freedom to the galaxy....
                </p>
        </main>
);
};

export default Content;