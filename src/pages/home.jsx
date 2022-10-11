import "../components/home.css"
import logo from "../img/aoc_castle_wall.png"
import guildLogo from "../img/Aetherius_logo.png"
import aocLogoWords from "../img/AoC_logo_words_2.png"
import Navbar from "../components/navbar"
import { useState, useEffect } from "react"
import Classes from "../components/classes"
import DataService from '../services/dataService'

const Home = () => {

    const [userResponse, setUserResponse] = useState({
        'user_name': '',
        'class': ''
    })

    const [responses, setResponses] = useState([])

    const[classData, setClassData] = useState({
        'title': 'guild_data',
        'tank_role_primary': 0,
        'tank_role_secondary': 0,
        'DPS_role_primary': 0,
        'DPS_role_secondary': 0,
        'healer_role_primary': 0,
        'healer_role_secondary': 0,
        'fighter_primary': 0,
        'fighter_secondary': 0,
        'tank_primary': 0,
        'tank_secondary': 0,
        'rogue_primary': 0,
        'rogue_secondary': 0,
        'ranger_primary': 0,
        'ranger_secondary': 0,
        'mage_primary': 0,
        'mage_secondary': 0,
        'summoner_primary': 0,
        'summoner_secondary': 0,
        'cleric_primary': 0,
        'cleric_secondary': 0,
        'bard_primary': 0,
        'bard_secondary': 0
    })

    const initialize = async() => {
        let service = new DataService()
        // await service.updateGuildData(classData)
        let responses = await service.getResponses()
        let guildData = await service.getGuildData()

        setResponses(responses)
        if(guildData){
            setClassData(guildData)
        }
    }

    useEffect(() => {
        initialize()
    }, [])

    const onChange = (e) => {
        let name = e.target.name
        let val = e.target.value

        let copy = {...userResponse}
        copy[name] = val

        setUserResponse(copy)
    }

    const updateResponse = (choice) => {
        setUserResponse(choice)
    }

    const addResponse = async () => {
        if (userResponse.user_name){
            updateClassData()
            let copy = [...responses]
            copy.push(userResponse)
            setResponses(copy)
    
            let service = new DataService()
            await service.postResponse(userResponse)
    
            alert("Thanks! Scroll down to see guild results.")
            return
        }
        alert("Something went wrong. Try again")
    }

    const updateClassData = async () => {
        let data = {...classData}

        let primary = userResponse.primary_class
        console.log("Primary is: " + primary)
        let secondary = userResponse.augment_class
        console.log("Augment is: " + secondary)

        if (primary === 'Fighter'){
            data['DPS_role_primary'] += 1
            data['fighter_primary'] += 1
        }

        if (secondary === 'Fighter'){
            data['DPS_role_secondary'] += 1
            data['fighter_secondary'] += 1
        }

        if (primary === 'Tank'){
            data['tank_role_primary'] += 1
            data['tank_primary'] += 1
        }

        if (secondary === 'Tank'){
            data['tank_role_secondary'] += 1
            data['tank_secondary'] += 1
        }

        if (primary === 'Rogue'){
            data['DPS_role_primary'] += 1
            data['rogue_primary'] += 1
        }

        if (secondary === 'Rogue'){
            data['DPS_role_secondary'] += 1
            data['rogue_secondary'] += 1
        }

        if (primary === 'Ranger'){
            data['DPS_role_primary'] += 1
            data['ranger_primary'] += 1
        }

        if (secondary === 'Ranger'){
            data['DPS_role_secondary'] += 1
            data['ranger_secondary'] += 1
        }

        if (primary === 'Mage'){
            data['DPS_role_primary'] += 1
            data['mage_primary'] += 1
        }

        if (secondary === 'Mage'){
            data['DPS_role_secondary'] += 1
            data['mage_secondary'] += 1
        }

        if (primary === 'Summoner'){
            data['DPS_role_primary'] += 1
            data['summoner_primary'] += 1
        }

        if (secondary === 'Summoner'){
            data['DPS_role_secondary'] += 1
            data['summoner_secondary'] += 1
        }

        if (primary === 'Cleric'){
            data['healer_role_primary'] += 1
            data['cleric_primary'] += 1
        }

        if (secondary === 'Cleric'){
            data['healer_role_secondary'] += 1
            data['cleric_secondary'] += 1
        }

        if (primary === 'Bard'){
            data['DPS_role_primary'] += 1
            data['bard_primary'] += 1
        }

        if (secondary === 'Bard'){
            data['DPS_role_secondary'] += 1
            data['bard_secondary'] += 1
        }

        setClassData(data)

        let service = new DataService()
        await service.updateGuildData(data)
    }
    
    return (
        <div className="home container">
            <div className="hero-container">
                <img src={logo} alt="castle wall" className="hero-img"/>
                <img src={guildLogo} alt="guild logo" className="guild-logo"/>
                <img src={aocLogoWords} alt="aoc logo" className="aoc-logo-words" />
            </div>
            {/* <Navbar/> */}
            <div className="content">

                <h1 className="h1-first">What class will you main in AoC?</h1>
                <h3 className="instruction">Select a class from the table {'>'} enter you Discord username {'>'} click "SUBMIT"</h3>
                <Classes data={updateResponse}/>

                <div className="user-info">
                    <div className="input-container">
                        <label className="username-label">Discord Username</label>
                        <input name="user_name" type="text" className="username-input" onChange={onChange} placeholder="Enter your Discord Username"/>
                    </div>
                    <button className="commit-btn" onClick={addResponse}>SUBMIT</button>
                </div>
                <h1 className="h1 ">Guild Breakdown</h1>
                <h3 className="stat-table-header">Trinity Breakdown</h3>
                <div className="class-breakdown">
                    <div className="data-point-container-headers">
                        <div className="class-header">Role List</div>
                        <div className="class-header">Augmented Role List</div>
                    </div>
                    <div className="data-point-container">
                        <div className="data-point">
                            <label className="label">Tanks</label>
                            <div className="stat">{classData.tank_role_primary}</div>
                        </div>
                        <div className="data-point">
                            <label className="label ">Tank Augmented</label>
                            <div className="stat">{classData.tank_role_secondary}</div>
                        </div>
                    </div>
                    <div className="data-point-container">
                        <div className="data-point">
                            <label className="label alt-label">DPS / Support</label>
                            <div className="stat alt-stat">{classData.DPS_role_primary}</div>
                        </div>
                        <div className="data-point">
                            <label className="label alt-label">DPS / Support Augmented</label>
                            <div className="stat alt-stat">{classData.DPS_role_secondary}</div>
                        </div>
                    </div>
                    <div className="data-point-container">
                        <div className="data-point">
                            <label className="label">Healers</label>
                            <div className="stat">{classData.healer_role_primary}</div>
                        </div>
                        <div className="data-point">
                            <label className="label">Healer Augmented</label>
                            <div className="stat">{classData.healer_role_secondary}</div>
                        </div>
                    </div>

                    <br></br>

                    <h3 className="stat-table-header">Class Breakdown</h3>

                    <div className="data-point-container-headers">
                        <div className="class-header">Class List</div>
                        <div className="class-header">Augment List</div>
                    </div>
                    <div className="data-point-container">
                        <div className="data-point">
                            <label className="label">Fighters</label>
                            <div className="stat">{classData.fighter_primary}</div>
                        </div>
                        <div className="data-point">
                            <label className="label">Fighter Augments</label>
                            <div className="stat">{classData.fighter_secondary}</div>
                        </div>
                    </div>
                    <div className="data-point-container">
                        <div className="data-point">
                            <label className="label alt-label">Tanks</label>
                            <div className="stat alt-stat">{classData.tank_primary}</div>
                        </div>
                        <div className="data-point">
                            <label className="label alt-label">Tank Augments</label>
                            <div className="stat alt-stat">{classData.tank_secondary}</div>
                        </div>
                    </div>
                    <div className="data-point-container">
                        <div className="data-point">
                            <label className="label">Rogues</label>
                            <div className="stat">{classData.rogue_primary}</div>
                        </div>
                        <div className="data-point">
                            <label className="label">Rogue Augments</label>
                            <div className="stat">{classData.rogue_secondary}</div>
                        </div>
                    </div>
                    <div className="data-point-container">
                        <div className="data-point">
                            <label className="label alt-label">Rangers</label>
                            <div className="stat alt-stat">{classData.ranger_primary}</div>
                        </div>
                        <div className="data-point">
                            <label className="label alt-label">Ranger Augments</label>
                            <div className="stat alt-stat">{classData.ranger_secondary}</div>
                        </div>
                    </div>
                    <div className="data-point-container">
                        <div className="data-point">
                            <label className="label">Mages</label>
                            <div className="stat">{classData.mage_primary}</div>
                        </div>
                        <div className="data-point">
                            <label className="label">Mage Augments</label>
                            <div className="stat">{classData.mage_secondary}</div>
                        </div>
                    </div>
                    <div className="data-point-container">
                        <div className="data-point">
                            <label className="label alt-label">Summoners</label>
                            <div className="stat alt-stat">{classData.summoner_primary}</div>
                        </div>
                        <div className="data-point">
                            <label className="label alt-label">Summoner Augments</label>
                            <div className="stat alt-stat">{classData.summoner_secondary}</div>
                        </div>
                    </div>
                    <div className="data-point-container">
                        <div className="data-point">
                            <label className="label">Clerics</label>
                            <div className="stat">{classData.cleric_primary}</div>
                        </div>
                        <div className="data-point">
                            <label className="label">Cleric Augments</label>
                            <div className="stat">{classData.cleric_secondary}</div>
                        </div>
                    </div>
                    <div className="data-point-container">
                        <div className="data-point">
                            <label className="label alt-label">Bards</label>
                            <div className="stat alt-stat">{classData.bard_primary}</div>
                        </div>
                        <div className="data-point">
                            <label className="label alt-label">Bard Augments</label>
                            <div className="stat alt-stat">{classData.bard_secondary}</div>
                        </div>
                    </div>
                </div>

                <h1 className="h1">Guild Member Responses</h1>
                {responses &&
                    <div className="responses">
                        {
                            responses.map(response => (
                                <div key={response.user_name} className="response-container">
                                    <p className="user-name">{response.user_name}</p>
                                    <div className="columns">
                                        <div className="response-container-headers">
                                            <label className="response-label">Class</label>
                                            <label className="response-label">Primary</label>
                                            <label className="response-label">Augment</label>
                                        </div>
                                        <div className="response-data">
                                            <p className="class">{response.class}</p>
                                            <p className="class">{response.primary_class}</p>
                                            <p className="class">{response.augment_class}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Home