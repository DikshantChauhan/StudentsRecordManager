import React from "react";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { groupByIdSelector, 
    groupCreatorSelector, 
    groupFetchingfailSelector, 
    groupLoadingSelector, 
    groupMembersSelector, 
    groupSearchedIdSelector } from "../../../StateManagement/selector/groups.selector";
import { useAppSelector } from "../../../StateManagement/store";
import image from "../../../img/default_avatar.jpg";
import AvatarOnline from "../../Avatar/Avatar"
import { useDispatch } from "react-redux";
import { groupByIdFetchingAction, groupByIdAction, groupLoadingAction } from "../../../StateManagement/actions/groups.action";

interface Props{}

const Group: React.FC<Props> = () => {
    console.log("rendering")
    const param: any = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    dispatch(groupByIdAction(param.id))

    const id = useAppSelector(groupSearchedIdSelector)
    const group = useAppSelector(groupByIdSelector)
    const loading = useAppSelector(groupLoadingSelector)
    const error = useAppSelector(groupFetchingfailSelector)
    const creator = useAppSelector(groupCreatorSelector)
    const members = useAppSelector(groupMembersSelector)

    useEffect(() =>{
        dispatch(groupLoadingAction(true))
        dispatch(groupByIdFetchingAction(id!))
    }, [id])

    if(loading || group || error){
        return(
            <div className={`max-w-4xl mx-auto mt-5`}>
                <div className={`bg-gray-200 p-2 rounded-lg shadow-sm mb-5`}>
                    {error && <h1 className={`text-red-600`}>{error}</h1>}
                    {(loading || group) && 
                        <div>
                            <div className={`flex p-8 mx-auto mb-2`}>
                                <AvatarOnline
                                    img={loading ? image : (group.group_image_url || image)}
                                    variant="default"
                                    theme="small"
                                    className={`mr-6`}
                                />
                                <div>
                                    {loading ? <h1>____________</h1> : 
                                        <h1 className={`font-semibold text-lg capitalize tracking-normal`}>
                                            {group.name}
                                        </h1>}
                                    {loading ? <h1>_______________________</h1> : 
                                        <p className={`max-w-md`}>
                                            {group.description}
                                        </p>}
                                </div>
                            </div>
                            {creator && 
                                <div className={`px-9 py-5`}>
                                    <h5 className={`font-medium text-gray-500`}>CREATOR :</h5>
                                    <button onClick={() =>{history.push(`/user/${creator.id}`)}} className={`text-primary-main`}>{creator.first_name + " " + creator.middle_name + " " + creator.last_name}</button>
                                </div>
                            }
                            {members && 
                                <div className={`px-9 py-5`}>
                                    <h5 className={`font-medium text-gray-500`}>MEMBERS :</h5>
                                    {members.map((user) =>{
                                        return(
                                            <button onClick={() =>{history.push(`/user/${user.id}`)}} className={`text-primary-main`}>{user.first_name}</button>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                    }
                </div>
                <Link to="/groups" className={`underline text-primary-main`}>
                    Back to Groups Page
                </Link>
            </div>
        )
    }

    return (<></>)
};

Group.defaultProps = {
    
}

export default React.memo(Group)