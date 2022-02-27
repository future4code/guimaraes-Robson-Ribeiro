import React from "react";

//css
import * as S from './styles';

//components
import UserList from '../UserList'

//ServerList
class Users extends React.Component {
    state = {
        users: [],
    }

    render(){

        return(<>
            <S.Container className='users'>
                {this.props.users.map((user, index) =>{
            return <UserList
                key={index} 
                name={user.name} 
                id={user.id} 
                onClick={() => this.props.handleDeleteUser(user.id)}
                />
          })}
            </S.Container>
        </>)
    }
}

export default Users;