import React from 'react';
import Cities from './Cities';
import regions from './Regions';

class VirtualMap extends React.Component {
    render() {
        return (
            <center>
                <div
                    class="svg-turkey-map"
                    onMouseOver={this.props.onMouseOver}
                    onMouseMove={this.props.onMouseMove}
                    onClick={this.props.onClick}
                    style={{ width: 1500 }}
                >
                    <svg
                        id="svg-turkey-map"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 1007.478 527.323"
                        xmlSpace="preserve"
                    >
                        <Cities regions={regions} />
                    </svg>
                </div>
            </center>
        );
    }
}

export default VirtualMap;
