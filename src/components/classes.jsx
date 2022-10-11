import "../components/classes.css"
import { useState } from "react"
import ClassTile from "./classTile"

const Classes = (props) => {

    const [response, setResponse] = useState({})

    const [classes, setClasses] = useState([
        'Fighter', 'Tank', 'Rogue', 'Ranger', 'Mage', 'Summoner', 'Cleric', 'Bard'
    ])
    const [subClasses, setSubClasses] = useState([
        'Weapon Master', 'Dreadnought', 'Shadowblade', 'Hunter', 'Spellsword', 'BladeCaller', 'Highsword', 'Bladedancer',
        'Knight', 'Guardian', 'Nightshield', 'Warden', 'Spellshield', 'Keeper', 'Paladin', 'Argent',
        'Duelist', 'Shadow Guardian', 'Assassin', 'Predator', 'Nightspell', 'Shadow Lord', 'Cultist', 'Charlatan',
        'Strider', 'Sentinel', 'Scout', 'Hawkeye', 'Scion', 'Falconer', 'Soulbow', 'Bowsinger',
        'Battle Mage', 'Spellstone', 'Shadow Caster', 'Speelhunter', 'Archwizard', 'Warlock', 'Acolyte', 'Sorcerer',
        'Wild Blade', 'Brood Warden', 'Shadowmancer', 'Beastmaster', 'Spellmancer', 'Conjurer', 'Necromancer', 'Enchanter',
        'Templar', 'Apostle', 'Shadow Disciple', 'Protector', 'Oracle', 'Shaman', 'High Priest', 'Scryer',
        'Tellsword', 'Siren', 'Trickster', 'Song Warden', 'Magician', 'Songcaller', 'Soul Weaver', 'Minstrel'
    ])

    const onChange = (e) => {
        let val = e.target.value
        setResponse(val)
    }

    const removeSelectedAll = () => {
        let options = document.querySelectorAll('.subclass-tile')

        options.forEach(option => {
            option.classList.remove('.selected')
            option.style.color = "rgb(228, 132, 6)"
            option.style.backgroundColor = "rgb(30, 30, 30)"
            // remove temp style to allow hover to work again
            option.style.backgroundColor = ''
            option.style.color = ''
        })
    }

    const getTile = (tile, target) => {
        let name = tile.class
        setResponse(tile)

        removeSelectedAll()
        let selection = document.getElementById(name)
        selection.style.color = "rgb(30, 30, 30)"
        selection.style.backgroundColor = "rgb(228, 132, 6)"
        props.data(tile)
    }

    return (
        <div className="classes">
            <div className="classes-grid">
                <div className="top-header">
                    <div className="base-tile">Base Class</div>
                    {
                        classes.map((row, index) => (
                            <div key={index} className='header-tile'>{row}
                            </div>
                        ))
                    }
                </div>
                <div className="left-header">
                    {
                        classes.map((row, index) => (
                            <div key={index} className='header-tile'>{row}
                            </div>
                        ))
                    }
                </div>
                <div className="subclasses-container">
                    {
                        subClasses.map((row, index) => (
                            <ClassTile key={index} className='subclass-tile' name={row} classes={classes} subClasses={subClasses} id={row} index={index} getTile={getTile}>{row}
                            </ClassTile>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Classes