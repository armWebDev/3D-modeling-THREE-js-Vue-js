const handleMouseMove = (event,props) => {   
    if (props.select) {
        mouseCurrentObj(event);
    }
};

export default handleMouseMove;
