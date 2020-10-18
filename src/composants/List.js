import React, { Component } from 'react'
import Contact from './Contact'

export default class List extends Component {
    state = {
        contacts : [
            {
                id: 1,
                nom : " Nina Luyoda",
                email :'nina@gmail.com',
                tel : "555-555-5555"
            },
            {
                id: 2,
                nom : " Astrid Rangba",
                email :"astridrgb@gmail.com",
                tel : "555-555-5555"
            },
                  
            {
                id:3,
                nom : " Corentin Drouet",
                email :"coco@gmail.com",
                tel : "555-555-5555"
            }
        ]
    }
    supprime=(id)=>{
        const nvContacts=this.state.contacts.filter(contact=>
            contact.id !== id )

            this.setState({
                contacts: nvContacts
            })
    }
    render() {
        return (
           <>
                {this.state.contacts.map(contact =>(
                    <Contact
                    key= {contact.id}
                    nom= {contact.nom}
                    email= {contact.email}
                    tel= {contact.tel}
                    supprimeClick={()=>this.supprime(contact.id)}/>
                ))}
            </>
        )
    }
}

