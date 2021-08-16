import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { groupByIdSelector, groupFetchingfailSelector, groupLoadingSelector, groupSearchedIdSelector } from "../../../StateManagement/selector/groups.selector";
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

    dispatch(groupByIdAction(param.id))

    const id = useAppSelector(groupSearchedIdSelector)
    const group = useAppSelector(groupByIdSelector)
    const loading = useAppSelector(groupLoadingSelector)
    const error = useAppSelector(groupFetchingfailSelector)

    useEffect(() =>{
        dispatch(groupLoadingAction(true))
        dispatch(groupByIdFetchingAction(id!))
    }, [id])

    if(loading || group || error){
        return(
            <div className={`max-w-4xl mx-auto mt-5`}>
                <div className={`bg-gray-200 p-2 rounded-lg shadow-sm mb-5`}>
                    {error && <h1 className={`text-red-600`}>{error}</h1>}
                    {(loading || group) && <div className={`flex p-8 mx-auto mb-2`}>
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
                    </div>}
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