import "./ThunderObservatory.css";

const ThunderObservatory = ({name, addThunder}) => {
    return (
        <button onClick={addThunder} className="thunder-observatory">Notify thunder in {name}</button>
    )

}

export default ThunderObservatory;