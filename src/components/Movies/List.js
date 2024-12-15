import React from "react";

const List = (props) => {
    console.log(props.data?.results)
    return (
        <div>
            <h1>Movies List</h1>
            <div>
                {props.data?.results.map((item) => (
                    <div>
                        <h2>{item?.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;