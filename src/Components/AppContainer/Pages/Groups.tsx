import React from "react";
import { Link, useHistory } from "react-router-dom";
import { groupsCurrentQuerySelector, groupsByQuerySelector, groupsByQueryLoadingSelector } from "../../../StateManagement/selector/groups.selector";
import { useAppSelector } from "../../../StateManagement/store";
import AvatarOnline from "../../Avatar/Avatar"
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { groupsCurrentQueryAction } from "../../../StateManagement/actions/groups.action";
import { FiSearch } from "react-icons/fi";
import { useEffect } from "react";
import image from "../../../img/default_avatar.jpg"

interface Props{}

const Groups: React.FC<Props> = () => {
    const searchKey = useAppSelector(groupsCurrentQuerySelector);
    const groups = useAppSelector(groupsByQuerySelector)
    const history = useHistory()
    const dispatch = useDispatch()
    const isFetching = useAppSelector(groupsByQueryLoadingSelector)
    
    useEffect(() =>{
        dispatch(groupsCurrentQueryAction(""))
    }, [])
    
    return(
        <div className={`w-full max-w-4xl mx-auto mt-5 mb-5`}>
            <div className={`mb-8 sticky top-5 z-10`}>
                <input 
                    className={`w-full text-black-dark p-4 pl-10 border-2 rounded-xl block focus:outline-none focus:border-primary-main`}
                    type="text" 
                    placeholder="Search..." 
                    onChange={(e) =>{dispatch(groupsCurrentQueryAction(e.target.value))}}
                    value={searchKey}
                />  
                <FiSearch className={`absolute left-4 opacity-50 text-lg top-1/2 transform -translate-y-1/2`} />
                {isFetching && <FaSpinner className={`animate-spin absolute right-4 text-2xl top-4 text-green-600 font-black`}></FaSpinner>}
            </div>
            <div className={`rounded-3xl mb-5`}>
                {groups.map((item, index) =>{
                    let stripClass = ""
                    if(index % 2 === 0){
                        stripClass = "bg-gray-300 text-black-dark"
                    }else{
                        stripClass = "bg-gray-200 text-black-dark"
                    }
                    return(
                        <div className={`flex w-full p-8 sm:px-1 ${stripClass}`}>
                            <AvatarOnline
                                img={item.group_image_url || image}
                                variant="default"
                                theme="small"
                                className={`mr-6`}
                            />
                            <div>
                                <h1 onClick={() =>{history.push(`/group/${item.id}`)}} className={`font-semibold text-lg underline capitalize tracking-normal cursor-pointer text-primary-main`}>
                                    {item.name}
                                </h1>
                                <p className={`max-w-md`}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Link to="/lecture" className={`text-primary-main underline`}>
                Go to lecture recording page
            </Link>
        </div>
    )
};

Groups.defaultProps = {
    
}

export default React.memo(Groups);