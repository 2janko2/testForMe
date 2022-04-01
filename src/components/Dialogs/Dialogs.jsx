import classes from "./Dialogs.module.css";

const Dialogs = (props) =>{

    const DialogsItem = (props) =>{
        return(
            <div className={classes.dialogs}>
            {props.title}: {props.icon}
            </div>
        )
    }

    let dialogsData = props.dialogs.map((dialog) => (
        <div>
            {console.log(dialog)}
            <DialogsItem  title={dialog.name} icon={dialog.message}/>
        </div>
    ))
    //  <DialogsItem  title={dialog.title} icon={dialog.icon}/> )


    console.log(props);
    return(
        <div>
            <div>
                {dialogsData}
            </div>
        </div>
    )
}

export default Dialogs