import React, { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { usersFetchingAction, usersLoadingAction } from "../../../StateManagement/actions/users.action";
import { usersArrSelector, usersLoadingSelector } from "../../../StateManagement/selector/users.selector";
import { useAppSelector } from "../../../StateManagement/store";
import image from "../../../img/default_avatar.jpg";
import AvatarOnline from "../../Avatar/Avatar"

interface Props{}

const Users: React.FC<Props> = () => {
    const dispatch = useDispatch()
    const users = useAppSelector(usersArrSelector) 
    const history = useHistory()
    const loading = useAppSelector(usersLoadingSelector)

    useEffect(() =>{
        dispatch(usersLoadingAction(true))
        dispatch(usersFetchingAction())
    }, [])   

    return(
        <div className={`w-full max-w-4xl mx-auto mt-5 mb-5`}>
            {loading && <h1>loading...</h1>}
            {users && <div className={`rounded-3xl mb-5`}>
                {users.map((item, index) =>{
                    let stripClass = ""
                    if(index % 2 === 0){
                        stripClass = "bg-gray-300 text-black-dark"
                    }else{
                        stripClass = "bg-gray-200 text-black-dark"
                    }
                    return(
                        <div className={`flex w-full p-8 ${stripClass}`}>
                            <AvatarOnline
                                img={item.profile_pic_url || image}
                                variant="default"
                                theme="small"
                                className={`mr-6`}
                            />
                            <div>
                                <h1 onClick={() =>{history.push(`/user/${item.id}`)}} className={`font-semibold text-lg underline capitalize tracking-normal cursor-pointer text-primary-main`}>
                                    {item.first_name + " " + item.middle_name + " " + item.last_name}
                                </h1>
                            </div>
                        </div>
                    )
                })}
            </div>}
            <Link to="/home" className={`text-primary-main underline`}>
                Go to home page
            </Link>
        </div>
    )
};

Users.defaultProps = {
    
}

export default React.memo(Users);