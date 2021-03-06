import { useState, useRef, useEffect } from "react"
import {connect} from "react-redux"
import Swal from 'sweetalert2'
import Editing from '../assets/editing.png'
import Delete from '../assets/delete.png'

const Comment = (props) => {
    const [modifyComment, setModifyComment] = useState(false)
    const inputHandler = useRef()
    
    useEffect(() => {
        setModifyComment(false)
    }, [props.updateComment])

    const confirmDeletion = () => {
        Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        props.delete(props.itineraryId, props.newComment._id, props.token)
          Swal.fire(
            'Deleted!',
            'Your comment has been deleted.',
            'success'
          )
        }
      })
    }
    const img=props.newComment.userId._id ?props.newComment.userId.urlImage:props.dataComment.urlImage
    const user = props.userId==props._id ||props.newComment.userId._id === props._id
    const text=props.newComment.userId._id ?props.newComment.userId.name:props.dataComment.name
    console.log(props.dataComment)
    const comment = <div className="textArea">
                        <div>
                            {!modifyComment 
                            ? <p>{props.newComment.comment}</p>
                            :<>
                                <input type="text" defaultValue={props.newComment.comment} ref={inputHandler}/>
                                <img src="/assets/check.svg" alt="send" onClick={()=>props.edit(props.newComment._id, inputHandler.current.value, props.token)}/>
                            </>
                            }
                        </div>
                        <img className="pencil" src={Editing} alt="pencil" onClick={()=>setModifyComment(!modifyComment)} />
                        <img className="pencil" src={Delete} alt="trash" onClick={confirmDeletion}/>  
                    </div>

    const renderComment = user ? comment : <p>{props.newComment.comment}</p> 
    
    return (
        <>
            <div className="textArea"> 
            <div className="profilePic" style={{backgroundImage:`url("${img}")` }}> </div>
            <div>
                <h6>{text}</h6>
                {renderComment}  
            </div>
            </div>   
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        token:state.users.token,
        _id: state.users._id
    }
}

export default connect(mapStateToProps)(Comment)