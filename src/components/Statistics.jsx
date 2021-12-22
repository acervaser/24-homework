import React from "react";

const Statistics = ({ comments, shares, likes }) => {
    return (
        <div className="statistics">
            <span className="statistics_likes">{likes}</span>
            <span className="statistics_comments">{comments}</span>
            <span className="statistics_shares">{shares}</span>
            <span className="statistics_save"></span>
        </div>
    );
}

export default Statistics;