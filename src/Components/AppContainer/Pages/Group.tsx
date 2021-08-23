import React from "react";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { groupByIdSelector, 
    groupCreatorSelector, 
    groupFetchErrorSelector, 
    groupLoadingSelector, 
    groupInvitedMembersSelector, 
    groupSearchedIdSelector, 
    grouParticipentsSelector,
    groupIndexSelector,
    groupsIdsByCurrentQuerySelector} from "../../../StateManagement/selector/groups.selector";
import { useAppSelector } from "../../../StateManagement/store";
import image from "../../../img/default_avatar.jpg";
import AvatarOnline from "../../Avatar/Avatar"
import { useDispatch } from "react-redux";
import { groupByIdFetchingAction, groupByIdAction, groupIndexAction } from "../../../StateManagement/actions/groups.action";
import { FaSpinner } from "react-icons/fa";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

interface Props{}

const Group: React.FC<Props> = () => {
    const index = useAppSelector(groupIndexSelector)
    const param: any = useParams()
    const dispatch = useDispatch()
    const history = useHistory();
    dispatch(groupByIdAction(param.id))    

    const id = useAppSelector(groupSearchedIdSelector)
    const group = useAppSelector(groupByIdSelector)
    const loading = useAppSelector(groupLoadingSelector)
    const error = useAppSelector(groupFetchErrorSelector)
    const creator = useAppSelector(groupCreatorSelector)
    const invitedMembers = useAppSelector(groupInvitedMembersSelector)
    const participents = useAppSelector(grouParticipentsSelector)
    const ids = useAppSelector(groupsIdsByCurrentQuerySelector)

    useEffect(() =>{
        dispatch(groupByIdFetchingAction(id!))
    }, [id])//eslint-disable-line

    
    return(
        <div className={`max-w-4xl mx-auto mt-5`}>
        <div className={`shadow-2xl mb-6 relative`}>
            <div className={`bg-gray-200 p-8 sm:px-3 rounded-lg shadow-sm mb-5 relative`}>
                {loading && 
                <div className={`flex items-center absolute top-2`}>
                    <FaSpinner className={`text-primary-main animate-spin mr-2`} />
                    <p>Loading...</p>
                </div>}
                {error && <h1 className={`text-red-600`}>{error}</h1>}
                <div>
                    <div className={`flex py-8 mx-auto mb-2`}>
                        <AvatarOnline
                            img={group ?  group.group_image_url || image : image}
                            variant="default"
                            theme="small"
                            className={`mr-6`}
                        />
                        <div>
                            <h1 className={`font-semibold text-lg capitalize tracking-normal`}>
                                {group && group.name}
                            </h1>
                            <p className={`max-w-md`}>
                                {group && group.description}
                            </p>
                        </div>
                    </div>
                    <div className={`py-5 relative`}>
                        <h5 className={`font-medium text-gray-500`}>CREATOR :</h5>
                        {creator && 
                        <button onClick={() =>{history.push(`/user/${creator.id}`)}} className={`text-primary-main`}>
                            {creator.first_name} {creator.middle_name} {creator.last_name}
                        </button>}
                    </div>
                    <div className={`py-8 relative`}>
                        <h5 className={`font-medium text-gray-500`}>INVITEDMEMBERS :</h5>
                        {invitedMembers.map((user) =>{
                            if(user === undefined){
                                return //eslint-disable-line
                            }
                            return(
                                <button key={user.id} onClick={() =>{history.push(`/user/${user.id}`)}} className={`text-primary-main block`}>
                                    {user.first_name} {user.middle_name} {user.last_name}
                                </button>
                            )
                        })}
                    </div>
                     
                    <div className={`py-5`}>
                        <h5 className={`font-medium text-gray-500`}>PARTICIPENTS :</h5>
                        {participents.map((user) =>{
                            if(user === undefined){
                                return //eslint-disable-line
                            }
                            return(
                                <button key={user.id} onClick={() =>{history.push(`/user/${user.id}`)}} className={`text-primary-main block`}>
                                    {user.first_name} {user.middle_name} {user.last_name}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className={`flex mx-auto justify-between absolute top-3 right-3`}>
            {ids && (index! > 0) &&
                <button onClick={() =>{
                    dispatch(groupIndexAction(index! - 1))
                    history.push(`/group/${ids[index! - 1]}`)
                }}>
                    <GrLinkPrevious className={`text-4xl mr-2 border p-2 rounded-full bg-gray-200 transform scale-100 hover:bg-gray-200 hover:scale-90 border-black-light`} />
                </button>
            }
            {ids && (index! < ids.length - 1) &&
                <button className={`ml-auto`} onClick={() =>{
                    dispatch(groupIndexAction(index! + 1))
                    history.push(`/group/${ids[index! + 1]}`)
                }}>
                    <GrLinkNext className={`text-4xl border p-2 rounded-full bg-gray-200 transform scale-100 hover:bg-white hover:scale-90 border-black-light`} />
                </button>
            }
        </div>
        <Link to="/groups" className={`underline text-primary-main`}>
            Back to Groups Page
        </Link>
        </div>
    )

    return (<></>) //eslint-disable-line
};

Group.defaultProps = {
    
}

export default React.memo(Group)