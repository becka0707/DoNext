import React from 'react'

const Card = ({taskName}) => {
    return (
        <div className="card">
            <p><b>{taskName}</b></p>
            <hr/>
            <div className="buttons">
                <span className="edit" title="edit">
                    <i class="fas fa-edit"></i>
                </span>
                <span className="done" title="done">
                    <i class="fas fa-check-circle"></i>
                </span>
                <span className="trash" title="remove">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </div>

            <style jsx>{`
                .buttons span{
                    font-size: 1.2rem;
                    cursor: pointer;
                    margin-left: 10px;
                    color: #999;
                }
                .edit:hover{
                    color: #39a2bd !important;
                }
                .done:hover{
                    color: #5ed183 !important;
                }
                .trash:hover{
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