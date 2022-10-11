import { useState } from "react"
import "../components/classTile.css"


const ClassTile = (props) => {
    const [tile, setTile] = useState({
        'class': props.name,
        'primary_class': '',
        'augment_class': '',
        'index': parseInt(props.index)
    })

    const calcClassTypes = (copy) => {
        let classes = props.classes
        // let subClasses = props.subClasses

        let convertedIndex = tile.index % 8
        console.log("converted index: " + convertedIndex)
        let primaryClass = classes[convertedIndex]

        convertedIndex = (copy.index - convertedIndex) / 8
        console.log("Augmented Index: " + convertedIndex)
        let augmentClass = classes[convertedIndex]

        
        copy['primary_class'] = primaryClass
        copy['augment_class'] = augmentClass
        return copy
    }

    const getTile = (e) => {
        let target = e.target
        let copy = {...tile}
        calcClassTypes(copy)
        setTile(copy)

        props.getTile(copy, target)
    }
    
    return (
        <div className={props.className} onClick={getTile} name={props.name} id={props.id}>
            {tile.class}
        </div>
    )
}

export default ClassTile