import React from "react";

import * as S from './styles';

class UserList extends React.Component{
    render(){
        // console.log("UserList: ", this.props);
        return(<>
            <S.InfoUser className="infor-user">
                
                <S.IconIdCardInfo>
                    <S.IconIdCard />
                </S.IconIdCardInfo>
                
                <S.UserNameInfo>
                    <S.UserName>{this.props.name}</S.UserName>
                </S.UserNameInfo>
                
                <S.IconDeleteInfo>
                    <S.IconDelete onClick={() => this.props.onClick(this.props.id)}/> 
                </S.IconDeleteInfo>

            </S.InfoUser>
        </>)
    }
}

export default UserList;