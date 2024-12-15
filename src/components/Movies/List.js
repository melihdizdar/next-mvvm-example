import React from "react";

const List = (props) => {
    const data = props.data?.results;
    return (
        <div>
            <h1>Movies List</h1>
            <div>
                {data.map((item,index) => (
                    <div key={index}>
                        <h2>{item?.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;