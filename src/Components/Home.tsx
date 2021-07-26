import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "./Login";
import AvatarOnline from "./Avatar/Avatar"
import image from "../img/profile-12.jpg"

interface Props{
    
}

const Home: React.FC<Props> = () => {
    const [users, setUsers] = useState<any[]>([])
    const [searchKey, setSearchKey] = useState("")
    const [filteredUser, setFilteredUser] = useState<any[]>([])

    useEffect(() =>{
        fetchGroups({ status: "all-groups" }).then((response) =>{
            setUsers(response)
            console.log(response)
            setFilteredUser(response)
        })
    }, [])

    useEffect(() =>{
        let filtered: any[] = []
        users.forEach((item) =>{
            item.name.toLowerCase()
            if(item.name.startsWith(searchKey)){
                filtered.push(item)
                setFilteredUser(filtered)
            }
        })
    },[searchKey])

    return(
        <div className={`w-full`}>
            <input 
                className={`w-full mt-4 text-black-dark p-4 max-w-4xl mx-auto mb-8 sticky top-28 z-50 border rounded-xl block hover:bg-gray-200`}
                type="text" 
                placeholder="Search..." 
                onChange={(e) =>{setSearchKey(e.target.value)}}
            />  
            {filteredUser.map((item, index) =>{
                let stripClass = ""
                if(index % 2 === 0){
                    stripClass = "bg-gray-800 text-gray-200"
                }else{
                    stripClass = "bg-black-light text-gray-200"
                }
                let checker = item.name.startsWith(searchKey)
                return(
                    <div className={`flex p-8 max-w-4xl mx-auto mb-2 rounded-xl hover:bg-gray-200 hover:text-black-light ${stripClass}`}>
                        <AvatarOnline
                            img={
                                (item.creator.profile_pic_url === null || 
                                item.creator.profile_pic_url === undefined || 
                                item.creator.profile_pic_url === "") ? 
                                image:item.creator.profile_pic_url
                            }
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

function fatchGroups() {
    throw new Error("Function not implemented.");
}
