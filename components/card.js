import React from 'react'

const Card = ({taskName}) => {
    return (
        <div className="card">
            <p><b>{taskName}</b></p>
            <hr/>
            <div className="buttons">
                <i className="fas fa-edit"></i>
                <i className="fas fa-check-circle"></i>
                <i className="fas fa-trash-alt"></i>
            </div>

            <style jsx>{`
                .buttons i{
                    font-size: 1.2rem;
                    cursor: pointer;
                    margin-left: 10px;
                    color: #999;
                }
                .fa-edit:hover{
                    color: #39a2bd !important;
                }
                .fa-check-circle:hover{
                    color: #5ed183 !important;
                }
                .fa-trash-alt:hover{
                    color: #e83348 !important;
                }
                .card{
                    text-align: left;
                    margin: 10px;
                    background: #fff;
                    display: inline-block;
                    border-radius: 4px;
                    padding: 30px;
                    -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.22);
                    -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.22);
                    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.22);
                    transition: .25s;
                    max-width: 450px;
                    min-width: 250px;
                }
                .card:hover{
                    transform: translateY(-2px);
                    -webkit-box-shadow: 0px 6px 6px 0px rgba(0,0,0,0.22);
                    -moz-box-shadow: 0px 6px 6px 0px rgba(0,0,0,0.22);
                    box-shadow: 0px 6px 6px 0px rgba(0,0,0,0.22);
                }
                .card p{
                    margin: 0;
                }
                .card p b{
                    font-size: 1.1rem;
                }
                .buttons{
                    padding: 12px 0;
                    padding-bottom: 0;
                    text-align: right;
                }
            `}</style>
        </div>
    );
}

export default Card;