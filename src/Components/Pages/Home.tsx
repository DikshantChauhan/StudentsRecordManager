import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AvatarOnline from "../Avatar/Avatar"
import image from "../../img/profile-12.jpg"
import { fetchGroups } from "../Api/Groups";
import { useAppSelector } from "../../store";
import { groupsAction } from "../../actions/groups.action";
import { groupQuerySelector, groupsByQuerySelector } from "../../selector/groups.selector";

interface Props{
}

const Home: React.FC<Props> = () => {
    const searchKey = useAppSelector(groupQuerySelector)
    const groups = useAppSelector(groupsByQuerySelector)

    useEffect(() =>{
        fetchGroups({ status: "all-groups", query: searchKey }).then((response) =>{
            groupsAction.queryFinished(response)
        })
    }, [searchKey])

    return(
        <div className={`w-full`}>
            <input 
                className={`w-full mt-4 text-black-dark p-4 max-w-4xl mx-auto mb-8 sticky top-32 z-10 border rounded-xl block hover:bg-gray-200`}
                type="text" 
                placeholder="Search..." 
                onChange={(e) =>{groupsAction.query(e.target.value)}}
            />  
            {groups.map((item, index) =>{
                let stripClass = ""
                if(index % 2 === 0){
                    stripClass = "bg-gray-800 text-gray-200"
                }else{
                    stripClass = "bg-black-light text-gray-200"
                }
                return(
                    <div className={`flex p-8 max-w-4xl mx-auto mb-2 rounded-xl hover:bg-gray-200 hover:text-black-light ${stripClass}`}>
                        <AvatarOnline
                            img={image}
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

Home.defaultProps = {
    
}

export default React.memo(Home)
