import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="movie__detail">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} className="detail__image" />
                    <div className="detail__content">
                        <div className="detail__title">{location.state.title}</div>
                        <div className="detail__year">{location.state.year}</div>
                        <ul className="detail__genres">
                            {location.state.genres.map((genre, index) => (
                                <li key={index} className="genres__genre">{genre}</li>
                            ))}
                        </ul>
                        <div className="detail__summary">{location.state.summary}</div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;