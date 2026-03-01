import {base_url, hero_info, period_month} from "../utils/constants.js";
import {useEffect, useState} from "react";

const AboutMe = () => {
    const [hero, setHero] = useState(() => {
        const hero = JSON.parse(localStorage.getItem("hero"));
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            return hero.payload;
        }
    });

    useEffect(() => {
        if (!hero) {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem("hero", JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, [])


    return (
        <>
            {(!!hero) &&
                <div className='text-4xl leading-loose text-justify ms-12'>
                    {hero_info.map((item) => {
                        const key = item.toLowerCase().replace(" ", "_");
                        return (
                            <p key={key}>
                                <span className='text-6xl'>{item}:</span> {hero[key]}
                            </p>
                        );
                    })}
                </div>
            }
        </>
    );

}

export default AboutMe;