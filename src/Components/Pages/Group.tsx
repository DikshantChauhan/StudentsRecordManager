import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { groupByIdSelector, groupSearchedIdSelector } from "../../StateManagement/selector/groups.selector";
import { useAppSelector } from "../../StateManagement/store";
import image from "../../img/profile-12.jpg";
import AvatarOnline from "../Avatar/Avatar"
import { useDispatch } from "react-redux";
import { groupByIdFetchingAction, groupByIdAction } from "../../StateManagement/actions/groups.action";

interface Props{}

const Group: React.FC<Props> = () => {
    const param: any = useParams()
    const dispatch = useDispatch()

    dispatch(groupByIdAction(param.id))

    const id = useAppSelector(groupSearchedIdSelector)
    const group = useAppSelector(groupByIdSelector)

    useEffect(() =>{
        dispatch(groupByIdFetchingAction(id!))
    }, [id])
    
    if(group === undefined){
        return <h1>group with id = {id} does not exist</h1>
    }
    return(
        <>
        <div className={`bg-white p-2 max-w-4xl mx-auto rounded-lg shadow-sm`}>
            <div className={`flex p-8 mx-auto mb-2`}>
                <AvatarOnline
                    img={group.group_image_url || image}
                    variant="default"
                    theme="small"
                    className={`mr-6`}
                />
                <div>
                    <h1 className={`font-semibold text-lg capitalize tracking-normal`}>
                        {group.name}
                    </h1>
                    <p className={`max-w-md`}>
                        {group.description}
                    </p>
                </div>
            </div>
        </div>
        <h1><Link to="/groups" className={`text-green-700`}>back to Groups Page</Link> </h1>      
        </>
    )
};

Group.defaultProps = {
    
}

export default React.memo(Group)