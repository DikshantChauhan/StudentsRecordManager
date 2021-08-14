import React from "react";
import { Link, useHistory } from "react-router-dom";
import { groupQuerySelector, groupsByQuerySelector, groupsFetchingSelector } from "../../../StateManagement/selector/groups.selector";
import { useAppSelector } from "../../../StateManagement/store";
import AvatarOnline from "../../Avatar/Avatar"
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { groupsCurrentQueryAction } from "../../../StateManagement/actions/groups.action";

interface Props{}

const Groups: React.FC<Props> = () => {
    const searchKey = useAppSelector(groupQuerySelector);
    const groups = useAppSelector(groupsByQuerySelector)
    const history = useHistory()
    const dispatch = useDispatch()

    const isFetching = useAppSelector(groupsFetchingSelector)

    const image = "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png"

    return(
        <div className={`w-full`}>
            <input 
                className={`w-full mt-2 text-black-dark p-4 max-w-4xl mx-auto mb-8 sticky top-32 z-10 border rounded-xl block hover:bg-gray-200`}
                type="text" 
                placeholder="Search..." 
                onChange={(e) =>{dispatch(groupsCurrentQueryAction(e.target.value))}}
                value={searchKey}
            />  
            {isFetching && <FaSpinner className={`animate-spin`}></FaSpinner>}
            {groups.map((item, index) =>{
                let stripClass = ""
                if(index % 2 === 0){
                    stripClass = "bg-gray-800 text-gray-200"
                }else{
                    stripClass = "bg-black-light text-gray-200"
                }
                return(
                    <div onClick={() =>{history.push(`/group/${item.id}`)}} className={`flex p-8 max-w-4xl mx-auto mb-2 rounded-xl hover:bg-gray-200 hover:text-black-light ${stripClass}`}>
                        <AvatarOnline
                            img={item.group_image_url || image}
                            variant="default"
                            theme="small"
                            className={`mr-6`}
                        />
                        <div>
                            <h1 className={`font-semibold text-lg capitalize tracking-normal`}>
                                {item.name}
                            </h1>
                            <p className={`max-w-md`}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                )
            })}
            <h1>
                <Link to="/lecture" className={`text-green-700`}>
                    go to lecture recording page
                </Link>
            </h1>
        </div>
    )
};

Groups.defaultProps = {
    
}

export default React.memo(Groups);