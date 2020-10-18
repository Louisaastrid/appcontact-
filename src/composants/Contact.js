
import React, { Component } from 'react'

export default class Contact extends Component {
    state = {
        show : true
    }
    montrerContact=()=> {
        this.setState({
            show:!this.state.show
        })
        // console.log(this.state.show);
    }
    supprimeContact=()=>{
       this.props.supprimeClick()
    }
    render() {
        return (
             <div className="card card-body mb-3 text-center">
             <h4>{this.props.nom}    <i  className ="fas fa-sort-down " onClick={this.montrerContact} />
             <i className="fas fa-times" style={{cursor:'pointer',float: "right"
            ,color:'red'}} onClick={this.supprimeContact}></i>
            
    </h4>
             {this.state.show ? (<ul className="card card-body mb-3">
                <li className="list-group-item">
                Email : {this.props.email}
                </li>
                <li className="list-group-item">
                Téléphone : {this.props.tel}
                </li>
            </ul>
            ) : null}




           
            
           
            
       </div>
        )
    }
}

// import React from 'react'

// export default function Contact(props) {

//     const [montrerContact, setMontrerContacr] = useState (x => 3 * x);

//     return (
//         <div className="card card-body mb-3 text-center">
//             <h4>{props.nom}     <i class="fas fa-angle-double-down"></i></h4>
//             <ul className="card card-body mb-3">
//                 <li className="list-group-item">
//                     Email : {props.email}
//                 </li>
//                  <li className="list-group-item">
//                     Téléphone : {props.tel}
//                 </li>
//             </ul>
//         </div>
//     )
// }
