import React from 'react';

const WeatherForm = props =>(

    <div className="card card-body">
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Your City name" className="form-control" autoFocus value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="Your country name" className="form-control"  />
            </div>
        </form>
        <button className="btn btn-success btn-block">
            Get Weather here!
        </button>
    </div>
)

export default WeatherForm;